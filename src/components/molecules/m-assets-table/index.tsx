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
import {
  useClientFolderAssetsQuery,
  useClientAssetsQuery,
} from "@/lib/services/graphql/generated";
import { getFileIcon } from "@/lib/utils/jsxElements";
import React from "react";

interface Props {
  folderUuid?: string;
}

const AssetsTable: React.FC<Props> = ({ folderUuid }) => {
  const [{ data: faData, fetching: faFetching }] = useClientFolderAssetsQuery({
    pause: !folderUuid,
    variables: {
      folderId: folderUuid ?? "",
    },
  });

  const [{ data: aData, fetching: aFetching }] = useClientAssetsQuery({
    pause: !!folderUuid,
  });

  const assets = faData?.clientFolderAssets ?? aData?.clientAssets ?? [];
  const fetching = faFetching || aFetching;

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
          {assets.map((asset) => (
            <TableRow key={asset.uuid}>
              <TableCell>
                <div className="flex items-center font-medium gap-2">
                  <span className="text-lg">
                    {getFileIcon(asset.contentType)}
                  </span>
                  <span>{asset.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span>{asset.sizeMb.toFixed(2)} MB</span>
              </TableCell>
              <TableCell>
                <span>{asset.contentType}</span>
              </TableCell>
              <TableCell>
                <span>{new Date(asset.dateAdded).toLocaleDateString()}</span>
              </TableCell>
              <TableCell>
                <span>{new Date(asset.lastUpdated).toLocaleDateString()}</span>
              </TableCell>
            </TableRow>
          ))}
          {fetching && Array.from({ length: 10 }).map((_, index) => (
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
      {!fetching && assets.length === 0 && (
        <EmptyList className="border-none" label="No files found" />
      )}
    </div>
  );
};

export default AssetsTable;
