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
import { H2, H4 } from "@/components/ui/typography";
import {
  useEmailPasswordSigninMutation,
  useEmailPasswordSignupMutation,
} from "@/lib/services/graphql/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    email: z.string({ message: "Please enter email" }),
    password1: z.string({ message: "Please enter password" }),
    password2: z.string({ message: "Please confirm password" }),
  })
  .refine((v) => v.password2 === v.password1, {
    message: "Passwords do not match",
    path: ["password1", "password2"],
  });

type FormSchema = z.infer<typeof formSchema>;

const SigninPage = () => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [{ fetching }, mutate] = useEmailPasswordSignupMutation();

  const onSubmit = async (value: FormSchema) => {
    const res = await mutate({
      input: value,
    });
    if (res.data) {
      router.replace("/signin");
    }
  };

  return (
    <div className="p-4 md:p-16 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <H4>Start for free</H4>
        <H2>Create new account</H2>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500" href="/signin">
            Sign In
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="examplet@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button loading={fetching} disabled={fetching}>
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SigninPage;
