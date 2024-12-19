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
import { useCreateUpdateSubscriptionPackageMutation } from "@/lib/services/graphql/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string({ message: "Please enter package name" }),
  price: z.number({ message: "Please enter package price" }),
  storageCapacityMb: z.number({
    message: "Please enter package storace capacity",
  }),
  maxAllowedSessions: z.number({
    message: "Please enter package max allowed sessions",
  }),
  monthlyRequests: z.number({
    message: "Please enter package max monthly requests",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const SubscriptionPackageForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [{ fetching }, mutate] = useCreateUpdateSubscriptionPackageMutation();

  const onSubmit = async (value: FormSchema) => {
    await mutate({
      input: value,
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
        <Button loading={fetching} disabled={fetching}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default SubscriptionPackageForm;
