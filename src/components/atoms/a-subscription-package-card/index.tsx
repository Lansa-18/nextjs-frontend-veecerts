"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/plug-wallet";
import {
  SubscriptionPackagesQuery,
  useCreateUpdateClientPackageSubscriptionMutation,
  useUserQuery,
} from "@/lib/services/graphql/generated";
import { icpToE8s } from "@/lib/utils/currency";
import React from "react";
import toast from "react-hot-toast";
import MaterialSymbolsCheckCircleOutlineRounded from "~icons/material-symbols/check-circle-outline-rounded.jsx";
import { v4 as uuid4 } from "uuid";
import { RequestTransferArgs } from "@/hooks/plug-wallet/types";

interface Props {
  subscriptionPackage?: SubscriptionPackagesQuery["subscriptionPackages"][0];
}

const SubscriptionPackageCard: React.FC<Props> = ({ subscriptionPackage }) => {
  const { requestTransfer } = useWallet();
  const [{ data }] = useUserQuery();
  const [{ fetching }, mutate] =
    useCreateUpdateClientPackageSubscriptionMutation();

  const handleSubscribe = async () => {
    if (!data?.user) {
      toast.error("You must be authenticated to perform this action");
      return;
    }
    if (!subscriptionPackage) {
      toast.error("Subscription Package not found");
      return;
    }
    const amount = icpToE8s(subscriptionPackage.price / 11.06);
    const params: RequestTransferArgs = {
      to: process.env.NEXT_PUBLIC_APP_PRINCIPAL_ID ?? "",
      amount: amount > 0 ? amount : 0.000000001,
      memo: `${data.user.id} x ${uuid4()}`,
      opts: {
        created_at_time: {
          timestamp_nanos: new Date().getTime(),
        },
      },
    };

    const res = await requestTransfer(params);
    console.log({ res });
    const subRes = await mutate({
      input: {
        subscriptionPackageUuid: subscriptionPackage.uuid,
      },
    });
    if (subRes.data?.createUpdateClientPackageSubscription) {
      toast.success("Subscription success");
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
          loading={fetching}
          disabled={fetching}
        >
          Select Plan
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
            {subscriptionPackage?.storageCapacityMb.toLocaleString()} MB
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
            {subscriptionPackage?.monthlyRequests.toLocaleString()}
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
            {subscriptionPackage?.maxAllowedSessions.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackageCard;
