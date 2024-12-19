"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/plug-wallet";
import { ellipseAddress } from "@/lib/utils/text";
import UilWallet from "~icons/uil/wallet.jsx";
import CuidaCopyOutline from "~icons/cuida/copy-outline.jsx";
import { toast } from "react-hot-toast";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopNav = () => {
  const { wallet, connect } = useWallet();

  const copyAddress = React.useCallback(() => {
    if (typeof window !== "undefined" && wallet.publicKey) {
      window.navigator.clipboard.writeText(wallet.publicKey);
      toast.success("Copied to clipboard");
    }
  }, [wallet.publicKey]);

  return (
    <nav className="flex shadow items-center justify-between p-4">
      <SidebarTrigger />
      <div>
        {wallet.connected ? (
          <div className="flex items-center gap-2">
            <span className="bg-foreground text-background p-2 rounded-full aspect-square">
              <UilWallet />
            </span>
            <div className="border-2 rounded-xl p-0.5">
              <div className="border-2 rounded-[0.5rem] flex items-center bg-foreground/10 ">
                <span className="p-2">
                  {ellipseAddress(wallet.publicKey ?? "", 10)}
                </span>
                <Button onClick={copyAddress} size="icon" variant="outline">
                  <CuidaCopyOutline />
                  <span className="sr-only">Copy to clipboard</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button onClick={connect}>Connect Wallet</Button>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
