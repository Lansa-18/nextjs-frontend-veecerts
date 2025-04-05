"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as backendIdlFactory,
  _SERVICE,
} from "@/lib/services/icp/declarations/backend.did.js";
import { idlFactory as transactionsIdlFactory } from "@/lib/services/icp/declarations/transactions.did.js";
import toast from "react-hot-toast";
import { ellipseAddress } from "@/lib/utils/text";
import { useAtom } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [store, setStore] = useAtom(agentAtom);

  const navLinks = [
    { name: "Home", path: "" },
    { name: "Pricing", path: "" },
    { name: "Developers", path: "" },
  ];

  const handleLogin = async () => {
    const authClient = await AuthClient.create();
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
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between text-gray items-center px-[47px] py-[4px] lg:px-[47px]">
        {/* Logo */}
        <div>
          <Image src="/veeLogo.svg" width={190.33} height={57} alt="Logo" />
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-5">
          {navLinks.map((link, index) => (
            <div key={index}>
              <span className="text-gray-600 hover:text-gray-800">
                {link.name}
              </span>
            </div>
          ))}
        </div>

        {/* Language and Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="pt-2">English</span>
          {store.profile ? (
            <Button variant="secondary" className="w-full">
              {ellipseAddress(store.profile?.principal.toString(), 10)}
            </Button>
          ) : (
            <>
              <Button onClick={handleLogin} variant="secondary">
                Sign in
              </Button>
              <Button onClick={() => router.push("/signup")} variant="default">
                Create an account
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-lg px-6 py-4`}
      >
        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-5 text-gray">
          {navLinks.map((link, index) => (
            <div key={index}>
              <span className="text-gray-600 hover:text-gray-800">
                {link.name}
              </span>
            </div>
          ))}
        </div>

        {/* Language and Buttons */}
        <div className="flex flex-col gap-5 mt-4 text-gray">
          <span className="pt-2">English</span>
          <Button variant="secondary">Sign in</Button>
          <Button variant="default">Create an account</Button>
        </div>
      </div>
    </nav>
  );
}
