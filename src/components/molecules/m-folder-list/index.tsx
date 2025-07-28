"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { USR_STATE_KEYS } from "@/constants/urlState";
import { Paginated_1 } from "@/lib/services/icp/declarations/backend.did";
import { useUrlState } from "@/lib/utils/urlState";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  variant?: "recent" | "oldest" | "favourite";
}

const FolderList: React.FC<Props> = ({ variant }) => {
  const router = useRouter();
  const store = useAtomValue(agentAtom);
  const [opts, setOpts] = useUrlState<[] | [Paginated_1]>(
    USR_STATE_KEYS.FORLDER_OPTS,
    [],
  );

  React.useEffect(() => {
    setOpts([
      {
        opts: [
          {
            ordering: [
              {
                last_updated: [variant === "recent" ? true : false],
                date_added: [],
              },
            ],
            filter: [],
          },
        ],
        offset: [BigInt(0)],
        limit: [BigInt(0)],
      },
    ]);
  }, [variant, setOpts]);

  const query = useQuery({
    queryKey: [QUERY_KEYS.CLIENT_FOLDERS, store.profile?.principal.toString()],
    queryFn: () =>
      store.backendActor?.client_folders(
        store.profile?.principal.toString() ?? "",
        opts,
      ) ??
      new Promise<[]>((res) => {
        res([]);
      }),
  });

  console.log(query.data)

  return (
    <div className="py-2">
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {query.data?.map((item) => (
          <div
            onDoubleClick={() => router.push(`/app/folders/${item.uuid}`)}
            className="w-full cursor-pointer"
            key={item.uuid}
          >
            <Card className="shadow-lg shadow-black/5 overflow-hidden">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        ))}
        {query.isFetching &&
          Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className="shadow-lg shadow-black/5 overflow-hidden animate-pulse"
            >
              <Skeleton className="w-full aspect-[16/5.5] rounded-none" />
              <CardHeader>
                <Skeleton className="h-6 w-full max-w-48" />
                <Skeleton className="h-4 w-full max-w-32" />
              </CardHeader>
            </Card>
          ))}
      </ul>
      {!query.isFetching && (query.data ?? []).length === 0 && (
        <EmptyList label={`No ${variant} folders found`} />
      )}
    </div>
  );
};

export default FolderList;
