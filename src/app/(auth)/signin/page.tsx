"use client";
import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as backendIdlFactory,
  _SERVICE,
} from "@/lib/services/icp/declarations/backend.did.js";
import { idlFactory as transactionsIdlFactory } from "@/lib/services/icp/declarations/transactions.did.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";
import SvgSpinnersRingResize from "~icons/svg-spinners/ring-resize.jsx";

const SigninPage = () => {
  const router = useRouter();
  const setStore = useSetAtom(agentAtom);

  const handleLogin = React.useCallback(async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    authClient.login({
      identityProvider: process.env.NEXT_PUBLIC_II_URL,
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const agent = await HttpAgent.create({
          host: process.env.NEXT_PUBLIC_CANISTER_HOST_URL,
          identity,
        });

        const backendActor = Actor.createActor<_SERVICE>(backendIdlFactory, {
          agent,
          canisterId: process.env.NEXT_PUBLIC_BACKEND_CANISTER_ID ?? "",
        });
        const transactionsActor = Actor.createActor(transactionsIdlFactory, {
          agent,
          canisterId: process.env.NEXT_PUBLIC_TRANSACTIONS_CANISTER_ID ?? "",
        });

        setStore((c) => ({ ...c, transactionsActor, backendActor }));

        const profile = await backendActor.get_profile();
        if (profile.length == 0) {
          await backendActor.register();
          const profile = await backendActor.get_profile();
          if (profile.length == 0) {
            toast.error("Failed to authenticate user. Please contact an admin");
            return;
          } else {
            setStore((c) => ({ ...c, profile: profile[0] }));
            router.push("/app");
          }
        } else {
          setStore((c) => ({ ...c, profile: profile[0] }));
          router.push("/app");
        }
      },
    });
  }, [router, setStore]);

  React.useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <div className="h-screen w-screen flex items-center justify-center text-4xl">
      <SvgSpinnersRingResize />
    </div>
  );
};

export default SigninPage;
