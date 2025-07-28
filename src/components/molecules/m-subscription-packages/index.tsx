"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import SubscriptionPackageCard from "@/components/atoms/a-subscription-package-card";
import { Skeleton } from "@/components/ui/skeleton";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

const SubscriptionPackages = () => {
  const store = useAtomValue(agentAtom);
  const query = useQuery({
    queryKey: [QUERY_KEYS.SUBSCRIPTION_PACKAGES],
    queryFn: () =>
      store.backendActor?.subscription_packages() ??
      new Promise<[]>((res) => {
        res([]);
      }),
  });

  return (
    <div>
      <ul className="grid 2xl:grid-cols-2 gap-4">
        {query.data?.map((item) => (
          <SubscriptionPackageCard key={item.uuid} subscriptionPackage={item} />
        ))}
        {query.isFetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full aspect-[9/7] rounded-2xl lg:aspect-[16/5]"
            />
          ))}
      </ul>
      {!query.isFetching && (query.data ?? []).length === 0 && (
        <EmptyList label="No subscription packages" />
      )}
    </div>
  );
};

export default SubscriptionPackages;
