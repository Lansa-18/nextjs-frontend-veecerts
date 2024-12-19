import { Button } from "@/components/ui/button";
import { SubscriptionPackagesQuery } from "@/lib/services/graphql/generated";
import React from "react";
import MaterialSymbolsCheckCircleOutlineRounded from "~icons/material-symbols/check-circle-outline-rounded.jsx";

interface Props {
  subscriptionPackage?: SubscriptionPackagesQuery["subscriptionPackages"][0];
}

const SubscriptionPackageCard: React.FC<Props> = ({ subscriptionPackage }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full border rounded-2xl shadow-md shadow-black/5">
      <div className="flex-1 border-b lg:border-b-0 lg:border-r flex flex-col gap-4 justify-between p-4">
        <p className="font-semibold text-primary">
          {subscriptionPackage?.name}
        </p>
        <p className="text-5xl md:text-6xl font-bold">
          ${subscriptionPackage?.price.toLocaleString()}
        </p>
        <Button variant="outline" className="rounded-lg">
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
