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
import { H2 } from "@/components/ui/typography";
import { useEmailPasswordSigninMutation } from "@/lib/services/graphql/generated";
import { setAuthTokens } from "@/lib/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string({ message: "Please enter email" }),
  password: z.string({ message: "Please enter password" }),
});

type FormSchema = z.infer<typeof formSchema>;

const SigninPage = () => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [{ fetching }, mutate] = useEmailPasswordSigninMutation();

  const onSubmit = async (value: FormSchema) => {
    const res = await mutate({
      input: value,
    });
    if (res.data) {
      setAuthTokens({
        token: res.data.emailPasswordSignin.token,
        refreshToken: res.data.emailPasswordSignin.refreshToken,
      });
      router.replace("/app");
    }
  };

  return (
    <div className="p-4 md:p-16 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <H2>Welcome back</H2>
        <p>
          Don&apos;t have an account?{" "}
          <Link className="text-blue-500" href="/signup">
            Sign Up
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
            name="password"
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
          <Button loading={fetching} disabled={fetching}>
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SigninPage;
