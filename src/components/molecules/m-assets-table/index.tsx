"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { USR_STATE_KEYS } from "@/constants/urlState";
import { Paginated } from "@/lib/services/icp/declarations/backend.did";
import { useUrlState } from "@/lib/utils/urlState";
import { agentAtom } from "@/stores/atoms/icp-agents";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import React from "react";

interface Props {
  folderUuid?: string;
}

const AssetsTable: React.FC<Props> = ({ folderUuid }) => {
  const store = useAtomValue(agentAtom);
  const [opts, setOpts] = useUrlState<[] | [Paginated]>(
    USR_STATE_KEYS.ASSET_OPTS,
    [],
  );

  React.useEffect(() => {
    setOpts([
      {
        opts: [
          {
            ordering: [
              {
                last_updated: [true],
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
  }, [setOpts]);

  const query = useQuery({
    queryKey: [QUERY_KEYS.CLIENT_ASSETS, store.profile?.principal.toString()],
    queryFn: () =>
      store.backendActor?.client_folder_assets(
        store.profile?.principal.toString() ?? "",
        folderUuid ?? "",
        opts,
      ) ??
      new Promise<[]>((res) => {
        res([]);
      }),
  });

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-foreground/[0.03]">
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Content Type</TableHead>
            <TableHead>Date Uploaded</TableHead>
            <TableHead>Last Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {query.data?.map((asset) => (
            <TableRow key={asset.uuid}>
              <TableCell>
                <div className="flex items-center font-medium gap-2">
                  <span>{asset.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span>{asset.size_mb.toFixed(2)} MB</span>
              </TableCell>
              <TableCell>
                <span>{new Date(asset.date_added).toLocaleDateString()}</span>
              </TableCell>
              <TableCell>
                <span>{new Date(asset.last_updated).toLocaleDateString()}</span>
              </TableCell>
            </TableRow>
          ))}
          {query.isFetching &&
            Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-6 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {!query.isFetching && (query.data ?? []).length === 0 && (
        <EmptyList className="border-none" label="No files found" />
      )}
    </div>
  );
};

export default AssetsTable;
