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
import Dropzone from "shadcn-dropzone";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { useCreateUpdateFolderMutation } from "@/lib/services/graphql/generated";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string({ message: "Please enter file name" }),
  logo: z.instanceof(File, { message: "Please provide a logo image" }),
  description: z.string({ message: "Please enter file description" }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  onSuccess?: () => void;
}

const FolderForm: React.FC<Props> = ({ onSuccess }) => {
  const [image, setImage] = React.useState<File>();
  const [{ fetching, error }, mutate] = useCreateUpdateFolderMutation();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    const res = await mutate({
      input: value,
    });
    if (res.data?.createUpdateFolder) {
      toast.success("Folder Created");
      onSuccess?.();
    }
  };

  React.useEffect(() => {
    if (error && error.graphQLErrors.length > 0) {
      error.graphQLErrors.map(e => toast.error(e.message))
    }
  }, [error])

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
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormControl>
                <div>
                  <Dropzone
                    accept={{ "image/*": [] }}
                    dropZoneClassName="py-8"
                    onDrop={(accepted) => {
                      setImage(accepted.at(0));
                      field.onChange(accepted.at(0));
                    }}
                  />
                  {image && (
                    <div className="flex flex-col items-center bg-foreground/5 rounded-md overflow-hidden border mt-2 max-w-[100px]">
                      <Image
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        width={100}
                        height={60}
                        className="h-[60px] object-cover border-b"
                      />
                      <span className="line-clamp-1 bg-background w-full text-center text-xs">
                        {image.name}
                      </span>
                    </div>
                  )}
                </div>
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
        <Button loading={fetching} disabled={fetching}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default FolderForm;
