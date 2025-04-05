"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { v4 as uuid4 } from "uuid";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { Folder, Result_2 } from "@/lib/services/icp/declarations/backend.did";
import { QUERY_KEYS } from "@/constants/queryKeys";

const formSchema = z.object({
  name: z.string({ message: "Please enter file name" }),
  description: z.string({ message: "Please enter file description" }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  onSuccess?: () => void;
}

const FolderForm: React.FC<Props> = ({ onSuccess }) => {
  const store = useAtomValue(agentAtom);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (folder: Folder) => {
      return (
        store.backendActor?.create_update_folder(folder) ??
        new Promise<Result_2>((res) => res({ Err: "client not ready" }))
      );
    },
    onSuccess: () => {
      toast.success("Folder Created");
      onSuccess?.();
      queryClient.invalidateQueries({
        queryKey: [
          QUERY_KEYS.CLIENT_FOLDERS,
          store.profile?.principal.toString(),
        ],
      });
    },
    onError: (res) => {
      console.log({ res })
      toast.error("Failed to create folder")
    }
  });
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    if (!store.profile?.principal) {
      toast.error("You must be authenticated to perform this action");
      return;
    }
    mutation.mutate({
      ...value,
      uuid: uuid4(),
      client_id: store.profile.principal.toString(),
      owner_id: store.profile.principal,
      date_added: new Date().toISOString(),
      last_updated: new Date().toISOString(),
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Folder name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Enter text..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button loading={mutation.isPending} disabled={mutation.isPending}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default FolderForm;
