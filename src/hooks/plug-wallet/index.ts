import React from "react";
import { PlugMobileProvider } from "@funded-labs/plug-mobile-sdk";
import { PlugWindow, RequestTransferArgs } from "./types";
import { useWalletStore } from "@/stores/plug-wallet";
import toast from "react-hot-toast";

export const useWallet = () => {
  const { setError, setConnected, setPublicKey, wallet } = useWalletStore();
  const mobileProvider = React.useMemo(() => {
    if (typeof window !== "undefined") {
      const isMobile = PlugMobileProvider.isMobileBrowser();
      if (isMobile) {
        const provider = new PlugMobileProvider({
          debug: true,
          walletConnectProjectId:
            process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID ?? "",
          window,
        });
        provider.initialize().catch((reason) => {
          setError({
            title: "Failed to initialize wallet",
            details: String(reason),
          });
        });

        return provider;
      }
    }
  }, [setError]);

  React.useEffect(() => {
    if (wallet.error) {
      toast.error(
        `${wallet.error.title}${wallet.error.details ? ": " + wallet.error.details : ""}`,
      );
    }
  }, [wallet.error]);

  const getPlug = React.useCallback(() => {
    const Window = window as PlugWindow;
    if (!Window.ic?.plug) {
      setError({
        title: "Plug not found",
        details: "Plug extenstion not installed",
        cause: "desktop-plug-unavailable",
      });
    }
    return Window.ic?.plug;
  }, [setError]);

  const checkConnected = React.useCallback(async () => {
    if (typeof window !== "undefined") {
      if (PlugMobileProvider.isMobileBrowser()) {
        const connected = mobileProvider?.isPaired() === true;
        setConnected(connected);
      } else {
        const Window = window as PlugWindow;
        const res = await Window.ic?.plug?.isConnected();
        const connected = res === true;
        setConnected(connected);
        setPublicKey(Window.ic?.plug?.accountId);
      }
    }
    return false;
  }, [mobileProvider, setPublicKey, setConnected]);

  const connect = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (PlugMobileProvider.isMobileBrowser()) {
        if (!mobileProvider?.isPaired()) {
          mobileProvider
            ?.pair()
            .then(checkConnected)
            .catch((reason) => {
              setError({
                title: "Failed to connect wallet",
                details: String(reason),
              });
            });
        }
      } else {
        const plug = getPlug();
        try {
          const publicKey = plug?.requestConnect();
          setPublicKey(publicKey);
          checkConnected();
        } catch (e) {
          setError({
            title: "Failed to connect wallet",
            details: String(e),
          });
        }
      }
    }
  }, [setPublicKey, setError, mobileProvider, checkConnected, getPlug]);

  const requestTransfer = React.useCallback(
    async (args: RequestTransferArgs) => {
      connect();
      if (typeof window !== "undefined") {
        const plug = getPlug();
        return await plug?.requestTransfer(args);
      } else {
        throw new Error("window is undefined", {
          cause: "invalid-environment",
        });
      }
    },
    [getPlug],
  );

  React.useEffect(() => {
    checkConnected();
  }, [checkConnected]);

  return { connect, wallet, requestTransfer };
};
