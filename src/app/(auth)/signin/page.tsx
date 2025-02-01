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
import { useEmailPasswordSigninMutation } from "@/lib/services/graphql/generated";
import { setAuthTokens } from "@/lib/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import LoginAuthButton from "@/components/atoms/a-login-auth-button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string({ message: "Please enter email" }),
  password: z.string({ message: "Please enter password" }),
});

type FormSchema = z.infer<typeof formSchema>;

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [{ fetching, error }, mutate] = useEmailPasswordSigninMutation();

  React.useEffect(() => {
    if (error && error.graphQLErrors.length > 0) {
      error.graphQLErrors.map((e) => toast.error(e.message));
    }
  }, [error]);

  const onSubmit = async (value: FormSchema) => {
    const res = await mutate({
      input: value,
    });
    if (res.data) {
      setAuthTokens({
        token: res.data.emailPasswordSignin.token,
        refreshToken: res.data.emailPasswordSignin.refreshToken,
        dateAdded: new Date().toISOString(),
      });
      toast.success("Sign in success");
      router.replace("/app");
    }
  };

  return (
    <section className="flex items-center p-10 px-4 md:px-20 lg:px-40 justify-center min-h-screen font-poppins">
      <div className="flex flex-col w-full">
        <article className="self-center">
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/veecerts-logo.svg"
              alt="veecerts-logo"
              width={214}
              height={101}
            />
            <h1 className="text-3xl font-medium text-black2 -mt-8">Log In</h1>
          </div>
        </article>
        <article className="flex flex-col items-center xl:flex-row border-red-500 mt-10">
          <div className="border-black flex flex-col w-full md:px-12 py-6">
            <h2 className="text-black3 font-medium text-2xl hidden xl:block text-center mb-5">
              Log In
            </h2>
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
                      <FormLabel className="text-form-label font-normal text-[13px]">
                        Email address
                      </FormLabel>
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
                      <FormLabel className="text-form-label font-normal text-[13px]">
                        Password
                      </FormLabel>
                      <FormControl>
                        <article className="relative">
                          <Input
                            className="pr-10"
                            placeholder="Create your password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <div
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </div>
                        </article>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-blue rounded-[32px] py-6 mt-2 w-full"
                  loading={fetching}
                  disabled={fetching}
                >
                  Log In
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex xl:flex-col gap-3 xl:w-fit w-full items-center">
            <span className="border h-px w-full xl:h-[150px] xl:w-px border-grey-border2"></span>
            <p>OR</p>
            <span className="border h-px w-full xl:h-[150px] xl:w-px border-grey-border2"></span>
          </div>

          <div className=" border-blue w-full md:px-12 py-6 flex items-center">
            <div className="space-y-5 w-full ">
              <LoginAuthButton
                icon="/google-logo.svg"
                text="Continue with Google"
              />
              <LoginAuthButton
                icon="/facebook-logo.svg"
                text="Continue with Facebook"
              />
              <Link href="/signup">
                <LoginAuthButton
                  icon="/mail-logo.svg"
                  text="Sign up with Email "
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SigninPage;
