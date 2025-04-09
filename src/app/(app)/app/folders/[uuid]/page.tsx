"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { H2 } from "@/components/ui/typography";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AssetForm from "@/components/molecules/m-asset-form";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useAtomValue } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";

interface Props {
  params: Promise<{
    uuid: string;
  }>;
}

const FolderDetailsPage: React.FC<Props> = ({ params }) => {
  const { uuid } = React.use(params);
  const [formOpen, setFormOpen] = React.useState(false);
  const { backendActor, profile } = useAtomValue(agentAtom);

  const query = useQuery({
    queryKey: [QUERY_KEYS.CLIENT_FOLDER, profile?.principal.toString()],
    queryFn: () =>
      backendActor?.client_folder(profile?.principal.toString() ?? "", uuid) ??
      new Promise<[]>((res) => {
        res([]);
      }),
  });

  return (
    <div>
      <H2 className="flex items-center justify-between p-2 px-4">
        {query.isFetching ? (
          <Skeleton className="h-8 w-full max-w-52" />
        ) : (
          <div className="flex items-center gap-4">
            <span>{query.data?.at(0)?.name}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-base">
                  <LucideInfo />
                  <span className="sr-only">Info</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[300px]">
                    {query.data?.at(0)?.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        <Dialog open={formOpen} onOpenChange={setFormOpen}>
          <DialogTrigger>
            <Button className="flex gap-1">
              <LineMdUploadLoop />
              <span>Upload File</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AssetForm onSuccess={() => setFormOpen(false)} folderUuid={uuid} />
          </DialogContent>
        </Dialog>
      </H2>
      <div className="mt-8 p-4">
        <AssetTables folderUuid={uuid} />
      </div>
    </div>
  );
};

export default FolderDetailsPage;
