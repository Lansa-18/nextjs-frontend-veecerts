"use client";

import EmptyList from "@/components/atoms/a-empty-list";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useFolderAssetsQuery } from "@/lib/services/graphql/generated";
import React from "react";

interface Props {
  folderUuid: string;
}

const FolderAssetsTable: React.FC<Props> = ({ folderUuid }) => {
  const [{ data, fetching }] = useFolderAssetsQuery({
    variables: {
      folderId: folderUuid,
    },
  });

  return (
    <div className="border rounded-2xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-foreground/[0.03]">
            <TableHead>File Name</TableHead>
            <TableHead>Date Upload</TableHead>
            <TableHead>Last Update</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead>Content Type</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      {!fetching && (data?.folderAssets ?? []).length === 0 && (
        <EmptyList className="border-none" label="No files found" />
      )}
    </div>
  );
};

export default FolderAssetsTable;
