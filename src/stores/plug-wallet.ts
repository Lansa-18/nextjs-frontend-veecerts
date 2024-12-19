import { create } from "zustand";

interface WalletError {
  title: string;
  details: string;
  cause?: string;
}

interface State {
  publicKey?: string;
  connected?: boolean;
  error?: WalletError;
}

interface WalletState {
  wallet: State;
  setPublicKey: (key?: string) => void;
  setConnected: (connected: boolean) => void;
  setError: (err: WalletError) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  wallet: {},
  setPublicKey: (key) =>
    set((s) => ({ wallet: { ...s.wallet, publicKey: key } })),
  setConnected: (connected) =>
    set((s) => ({ wallet: { ...s.wallet, connected } })),
  setError: (err) => set((s) => ({ wallet: { ...s.wallet, error: err } })),
}));
