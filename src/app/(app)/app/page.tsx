import CardButton from "@/components/atoms/a-card-button";
import IconParkOutlinePlus from "~icons/icon-park-outline/plus.jsx";
import BiFolderPlus from "~icons/bi/folder-plus.jsx";
import { H4 } from "@/components/ui/typography";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AssetForm from "@/components/molecules/m-asset-form";

const AppDashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger>
            <CardButton icon={<IconParkOutlinePlus />}>New Document</CardButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload File</DialogTitle>
            </DialogHeader>
            <AssetForm />
          </DialogContent>
        </Dialog>
        <CardButton icon={<BiFolderPlus />}>New Folder</CardButton>
      </div>
      <div className="flex flex-col gap-2">
        <H4>All Folders</H4>
        <Tabs>
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="favourite">Favourite</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default AppDashboard;
