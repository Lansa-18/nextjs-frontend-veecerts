"use client";

import React from "react";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { AuthClient } from "@dfinity/auth-client";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import SvgSpinnersRingResize from "~icons/svg-spinners/ring-resize.jsx";

const SignOutPage = () => {
  const setStore = useSetAtom(agentAtom);
  const router = useRouter();

  const handleLogout = React.useCallback(async () => {
    const authClient = await AuthClient.create();
    authClient.logout();
    setStore(() => ({
      profile: null,
      client: null,
      backendActor: null,
      transactionsActor: null,
    }));
  }, [setStore]);

  React.useEffect(() => {
    handleLogout().then(() => router.replace("/"));
  }, [handleLogout, router]);

  return (
    <div className="h-screen w-screen flex items-center justify-center text-4xl">
      <SvgSpinnersRingResize />
    </div>
  );
};

export default SignOutPage;
