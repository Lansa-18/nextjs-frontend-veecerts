"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/plug-wallet";
import { icpToE8s } from "@/lib/utils/currency";
import React from "react";
import toast from "react-hot-toast";
import MaterialSymbolsCheckCircleOutlineRounded from "~icons/material-symbols/check-circle-outline-rounded.jsx";
import { v4 as uuid4 } from "uuid";
import { RequestTransferArgs } from "@/hooks/plug-wallet/types";
import { SubscriptionPackage } from "@/lib/services/icp/declarations/backend.did";
import { useAtomValue } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";

interface Props {
  subscriptionPackage?: SubscriptionPackage;
}

const SubscriptionPackageCard: React.FC<Props> = ({ subscriptionPackage }) => {
  const { requestTransfer } = useWallet();
  const { backendActor, profile } = useAtomValue(agentAtom);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      if (!subscriptionPackage?.uuid) {
        throw new Error("Subscription package not found");
      }
      if (backendActor) {
        return backendActor?.create_update_client_package_subscription(
          subscriptionPackage?.uuid ??
            new Promise<string>((res) => res("Failed to subscribe")),
        );
      }
      return new Promise<string>((res) => res("Failed to subscribe"));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIPTION_CLIENT],
      });
    },
  });

  const query = useQuery({
    queryKey: [QUERY_KEYS.SUBSCRIPTION_CLIENT],
    queryFn: () =>
      backendActor?.get_client() ??
      new Promise<[]>((res) => {
        res([]);
      }),
  });

  const handleSubscribe = async () => {
    if (!profile?.principal || !backendActor) {
      toast.error("You must be authenticated to perform this action");
      return;
    }
    if (!subscriptionPackage) {
      toast.error("Subscription Package not found");
      return;
    }
    try {
      const amount = icpToE8s(subscriptionPackage.price ?? 1 / 11.06);
      const params: RequestTransferArgs = {
        to: process.env.NEXT_PUBLIC_APP_PRINCIPAL_ID ?? "",
        amount: amount > 0 ? amount : 0.000000001,
        memo: `${profile.principal.toString()} x ${uuid4()}`,
        opts: {
          created_at_time: {
            timestamp_nanos: new Date().getTime(),
          },
        },
      };

      console.log({ params });

      await requestTransfer(params);
      mutation.mutate();
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full border rounded-2xl shadow-md shadow-black/5">
      <div className="flex-1 border-b lg:border-b-0 lg:border-r flex flex-col gap-4 justify-between p-4">
        <p className="font-semibold text-primary">
          {subscriptionPackage?.name}
        </p>
        <p className="text-5xl md:text-6xl font-bold">
          ${subscriptionPackage?.price.toLocaleString()}
        </p>
        <Button
          onClick={handleSubscribe}
          variant="outline"
          className="rounded-lg"
          loading={mutation.isPending}
          disabled={
            mutation.isPending ||
            query.data?.at(0)?.active_subscription_uuid.at(0) ===
              subscriptionPackage?.uuid
          }
        >
          {query.data?.at(0)?.active_subscription_uuid.at(0) ===
          subscriptionPackage?.uuid
            ? "Active Plan"
            : "Select Plan"}
        </Button>
      </div>
      <div className="flex-1 p-4">
        <p className="font-semibold text-primary/70 mb-2">Features</p>
        <div className="flex mb-2 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <MaterialSymbolsCheckCircleOutlineRounded />
            </span>
            <span className="font-medium">Storage Capacity</span>
          </div>
          <span className="font-bold text-primary/80">
            {subscriptionPackage?.storage_capacity_mb.toLocaleString()} MB
          </span>
        </div>

        <div className="flex mb-2 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <MaterialSymbolsCheckCircleOutlineRounded />
            </span>
            <span className="font-medium">Monthly Requests</span>
          </div>
          <span className="font-bold text-primary/80">
            {subscriptionPackage?.monthly_requests.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <MaterialSymbolsCheckCircleOutlineRounded />
            </span>
            <span className="font-medium">Max Allowed Session</span>
          </div>
          <span className="font-bold text-primary/80">
            {subscriptionPackage?.max_allowed_sessions.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackageCard;
