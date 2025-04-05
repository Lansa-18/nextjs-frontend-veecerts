"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string({ message: "Please enter package name" }),
  price: z.string({ message: "Please enter package price" }),
  storageCapacityMb: z.string({
    message: "Please enter package storace capacity",
  }),
  maxAllowedSessions: z.string({
    message: "Please enter package max allowed sessions",
  }),
  monthlyRequests: z.string({
    message: "Please enter package max monthly requests",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  onSuccess?: () => void;
}

const SubscriptionPackageForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const store = useAtomValue(agentAtom);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (value: FormSchema) => {
      return (
        store.backendActor?.create_update_subscription_package(
          [],
          value.name,
          Number(value.price),
          BigInt(value.storageCapacityMb),
          BigInt(value.monthlyRequests),
          BigInt(value.maxAllowedSessions),
        ) ?? new Promise<string>((res) => res("Client not ready"))
      );
    },
    onSuccess: () => {
      toast.success("Subscription Package Created");
      onSuccess?.();
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIPTION_PACKAGES],
      });
    },
    onError: (res) => {
      console.log({ res });
      toast.error("Failed to create subscription package");
    },
  });

  const onSubmit = async (value: FormSchema) => {
    mutation.mutate(value);
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
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="storageCapacityMb"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Storage Capacity (MB)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxAllowedSessions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Allowed Sessions</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Monthly Requests</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button loading={mutation.isPending} disabled={mutation.isPending}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default SubscriptionPackageForm;
