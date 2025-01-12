"use client";
import React from "react";
import Image from "next/image";

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
import { useEmailPasswordSignupMutation } from "@/lib/services/graphql/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z
  .object({
    firstName: z.string({ message: "Enter your first name" }),
    lastName: z.string({ message: "Enter your last name" }),
    email: z.string({ message: "Please enter email" }),
    password1: z.string({ message: "Please enter password" }),
    password2: z.string({ message: "Please confirm password" }),
  })
  .refine((v) => v.password2 === v.password1, {
    message: "Passwords do not match",
    path: ["password2"],
  });

type FormSchema = z.infer<typeof formSchema>;

const SigninPage = () => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [{ fetching, error }, mutate] = useEmailPasswordSignupMutation();

  const onSubmit = async (value: FormSchema) => {
    const res = await mutate({
      input: {
        email: value.email,
        password1: value.password1,
        password2: value.password2
      },
    });
    if (res.data) {
      toast.success("Account created");
      router.replace("/signin");
    }
  };

  React.useEffect(() => {
    if (error && error.graphQLErrors.length > 0) {
      error.graphQLErrors.map(e => toast.error(e.message))
    }
  }, [error])

  return (
    <section className="bg-greyish-white p-10 px-4 flex items-center justify-center min-h-screen font-poppins">
      <article className="w-full flex items-center justify-center flex-col">
        <div className="max-w-[1300px] border-2 border-grey-border w-full flex items-center gap-10 justify-between rounded-[24px] p-[24px] bg-white">
          <article className="w-full">
            <div className="flex flex-col gap-4">
              <Image
                src="/veecerts-logo.svg"
                alt="veecerts-logo"
                width={214}
                height={101}
              />
              <div className="flex flex-col items-start mb-4">
                <p className="text-2xl sm:text-3xl font-medium leading-normal text-black2">
                  Create new account
                </p>
                <p className="-mt-1">
                  Already have an account?
                  <Link className="text-blue-500" href="/signin">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col-reverse gap-8 md:flex-row items-center">
              <Form {...form}>
                <form
                  className="flex flex-col w-full gap-4 font-poppins"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="flex w-full flex-col lg:flex-row gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-form-label font-normal text-sm">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-form-label font-normal text-sm">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-form-label font-normal text-sm">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full flex-col lg:flex-row gap-4">
                    <FormField
                      control={form.control}
                      name="password1"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-form-label font-normal text-sm">
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="*********"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password2"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-form-label font-normal text-sm">
                            Confirm Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="*********"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="text-sm -mt-2">
                    Use 8 or more characters with a mix of numbers, letters and
                    symbols.
                  </p>
                  <Button
                    className="bg-blue rounded-[32px] w-full py-6 mt-2"
                    loading={fetching}
                    disabled={fetching}
                  >
                    Create Account
                  </Button>
                </form>
              </Form>
              <Image
                src="/signup-img.png"
                alt="signup-img"
                className="w-full max-w-[500px]"
                width={358}
                height={339}
              />
            </div>
          </article>
        </div>

        <ul className="flex gap-6 mt-4 ml-4 text-black2">
          <li>Help</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </article>
    </section>
  );
};

export default SigninPage;
