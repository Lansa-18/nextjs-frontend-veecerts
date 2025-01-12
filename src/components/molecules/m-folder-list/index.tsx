"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  InputMaybe,
  PaginatedFolderQueryOptions,
  useClientFoldersQuery,
} from "@/lib/services/graphql/generated";
import { buildIpfsURL } from "@/lib/utils/urls";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  variant?: "recent" | "oldest" | "favourite";
}

const FolderList: React.FC<Props> = ({ variant }) => {
  const router = useRouter();
  const opts = React.useMemo(() => {
    const opts: InputMaybe<PaginatedFolderQueryOptions> = {
      opts: {
        ordering: {
          dateAdded:
            variant === "oldest"
              ? false
              : variant === "recent"
                ? true
                : undefined,
          lastUpdated: variant === "favourite",
        },
      },
    };
    return opts;
  }, [variant]);

  const [{ fetching, data }] = useClientFoldersQuery({
    variables: { opts },
  });

  return (
    <div className="py-2">
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {data?.clientFolders.map((item) => (
          <div
            onDoubleClick={() => router.push(`/app/folders/${item.uuid}`)}
            className="w-full cursor-pointer"
            key={item.uuid}
          >
            <Card className="shadow-lg shadow-black/5 overflow-hidden">
              <div className="bg-foreground/5 p-4 w-full flex items-center justify-center">
                <Image
                  src={buildIpfsURL(item.logoHash)}
                  alt="thumbnail"
                  width={150}
                  height={110}
                />
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <p>{item.itemsCount} files</p>
                  <p>{item.totalSize} MB</p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
        {fetching &&
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
      {!fetching && (data?.clientFolders ?? []).length === 0 && (
        <EmptyList label={`No ${variant} folders found`} />
      )}
    </div>
  );
};

export default FolderList;
