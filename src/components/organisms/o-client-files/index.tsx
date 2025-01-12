"use client";

import CardButton from "@/components/atoms/a-card-button";
import BiFolderPlus from "~icons/bi/folder-plus.jsx";
import { H4 } from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FolderList from "@/components/molecules/m-folder-list";
import FolderForm from "@/components/atoms/a-folder-form";
import React from "react";
import { useSearchParams } from "next/navigation";

const ClientFiles = () => {
  const [folderFormOpen, setFolderFormOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const tab = React.useMemo(() => searchParams.get("tab"), [searchParams]);

  return (
    <div className="p-4 flex flex-col gap-10">
      <div className="flex items-center max-w-[500px] gap-4">
        <Dialog open={folderFormOpen} onOpenChange={setFolderFormOpen}>
          <DialogTrigger asChild className="w-full max-w-[200px]">
            <CardButton
              onClick={() => setFolderFormOpen((c) => !c)}
              icon={<BiFolderPlus />}
            >
              New Folder
            </CardButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Folder</DialogTitle>
            </DialogHeader>
            <FolderForm onSuccess={() => setFolderFormOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2">
        <H4>All Folders</H4>
        <Tabs defaultValue={tab ?? "recent"}>
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="oldest">Oldest</TabsTrigger>
            <TabsTrigger value="favourite">Favourite</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <FolderList variant="recent" />
          </TabsContent>
          <TabsContent value="oldest">
            <FolderList variant="oldest" />
          </TabsContent>
          <TabsContent value="favourite">
            <FolderList variant="favourite" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientFiles;
