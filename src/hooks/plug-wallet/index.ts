import React from "react";
import { PlugMobileProvider } from "@funded-labs/plug-mobile-sdk";
import { PlugWindow } from "./types";
import { useWalletStore } from "@/stores/plug-wallet";

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
        const Window = window as PlugWindow;
        if (!Window.ic?.plug) {
          setError({
            title: "Plug not found",
            details: "Plug extenstion not installed",
            cause: "desktop-plug-unavailable",
          });
        } else {
          try {
            const publicKey = Window.ic.plug.requestConnect();
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
    }
  }, [setPublicKey, setError, mobileProvider, checkConnected]);

  React.useEffect(() => {
    checkConnected();
  }, [checkConnected]);

  return { connect, wallet };
};
