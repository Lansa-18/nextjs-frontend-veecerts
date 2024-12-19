"use client";

import { getAuthTokens } from "@/lib/utils/localStorage";
import React from "react";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

const client = new Client({
  url: process.env.NEXT_PUBLIC_BACKEND_URL ?? "",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = getAuthTokens();
    return {
      headers: {
        authorization: token?.token ? `Bearer ${token.token}` : "",
      },
    };
  },
});

interface Props {
  children?: React.ReactNode;
}

const URQLProvider: React.FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default URQLProvider;
