"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import SubscriptionPackageCard from "@/components/atoms/a-subscription-package-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSubscriptionPackagesQuery } from "@/lib/services/graphql/generated";

const SubscriptionPackages = () => {
  const [{ fetching, data }] = useSubscriptionPackagesQuery();
  return (
    <div>
      <ul className="grid 2xl:grid-cols-2 gap-4">
        {data?.subscriptionPackages.map((item) => (
          <SubscriptionPackageCard key={item.uuid} subscriptionPackage={item} />
        ))}
        {fetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full aspect-[9/7] rounded-2xl lg:aspect-video"
            />
          ))}
        {!fetching && (data?.subscriptionPackages ?? []).length === 0 && (
          <EmptyList label="No subscription packages" />
        )}
      </ul>
    </div>
  );
};

export default SubscriptionPackages;
