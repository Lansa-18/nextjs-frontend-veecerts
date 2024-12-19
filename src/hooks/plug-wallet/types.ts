interface ConnectArgs {
  whitelist?: string[];
  host?: string;
  timeout?: number;
}

export interface RequestTransferArgs {
  to: string;
  amount: number;
  memo: string;
  opts?: {
    fee?: number;
    memo?: string;
    from_subaccount?: number;
    created_at_time?: {
      timestamp_nanos: number;
    };
  };
}

export type PlugWindow = typeof globalThis & {
  ic?: {
    plug?: {
      isWalletLocked?: boolean;
      principalId?: string;
      accountId?: string;
      requestConnect: (args?: ConnectArgs) => string;
      isConnected: () => Promise<boolean>;
      requestTransfer: (
        args: RequestTransferArgs,
      ) => Promise<{ height: number }>;
    };
  };
};
