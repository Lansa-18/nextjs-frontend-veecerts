interface ConnectArgs {
  whitelist?: string[];
  host?: string;
  timeout?: number;
}

export type PlugWindow = typeof globalThis & {
  ic?: {
    plug?: {
      isWalletLocked?: boolean;
      principalId?: string;
      accountId?: string;
      requestConnect: (args?: ConnectArgs) => string;
      isConnected: () => Promise<boolean>;
    };
  };
};
