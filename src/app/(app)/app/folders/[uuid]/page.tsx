"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { H2 } from "@/components/ui/typography";
import { useClientFolderQuery } from "@/lib/services/graphql/generated";
import React from "react";
import LucideInfo from "~icons/lucide/info.jsx";
import LineMdUploadLoop from "~icons/line-md/upload-loop.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AssetTables from "@/components/molecules/m-assets-table";

interface Props {
  params: Promise<{
    uuid: string;
  }>;
}

const FolderDetailsPage: React.FC<Props> = ({ params }) => {
  const { uuid } = React.use(params);
  const [{ data, fetching }] = useClientFolderQuery({
    variables: {
      folderId: uuid,
    },
  });

  return (
    <div>
      <H2 className="flex items-center justify-between p-2 px-4">
        {fetching ? (
          <Skeleton className="h-8 w-full max-w-52" />
        ) : (
          <div className="flex items-center gap-4">
            <span>{data?.clientFolder.name}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-base">
                  <LucideInfo />
                  <span className="sr-only">Info</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[300px]">{data?.clientFolder.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        <Button className="flex gap-1">
          <LineMdUploadLoop />
          <span>Upload File</span>
        </Button>
      </H2>
      <div className="mt-8 p-4">
        <AssetTables folderUuid={uuid} />
      </div>
    </div>
  );
};

export default FolderDetailsPage;
