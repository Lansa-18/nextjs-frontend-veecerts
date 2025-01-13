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
import { useCreateUpdateAssetMutation } from "@/lib/services/graphql/generated";
import Image from "next/image";
import { getFileIcon } from "@/lib/utils/jsxElements";

const formSchema = z.object({
  name: z.string({ message: "Please enter file name" }),
  file: z.instanceof(File, { message: "Please provide a valid file" }),
  description: z.string({ message: "Please enter file description" }),
  folderId: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  folderUuid: string;
  onSuccess?: () => void;
}

const AssetForm: React.FC<Props> = ({ folderUuid, onSuccess }) => {
  const [file, setFile] = React.useState<File>();
  const [{ fetching }, mutate] = useCreateUpdateAssetMutation();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    await mutate({
      input: {
        folderUuid,
        name: value.name,
        file: value.file,
        description: value.description,
      },
    });
    onSuccess?.();
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
                <Input placeholder="File name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <div>
                  <Dropzone
                    dropZoneClassName="py-8"
                    onDrop={(accepted) => {
                      setFile(accepted.at(0));
                      field.onChange(accepted.at(0));
                    }}
                  />

                  {file && (
                    <div className="flex flex-col items-center bg-foreground/5 rounded-md overflow-hidden border mt-2 max-w-[100px]">
                      {file.type.startsWith("image") ? (
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          width={100}
                          height={60}
                          className="h-[60px] object-cover border-b"
                        />
                      ) : (
                        <span className="text-5xl p-2">
                          {getFileIcon(file.type)}
                        </span>
                      )}
                      <span className="line-clamp-1 bg-background w-full text-center text-xs">
                        {file.name}
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
        <Button disabled={fetching} loading={fetching}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default AssetForm;
