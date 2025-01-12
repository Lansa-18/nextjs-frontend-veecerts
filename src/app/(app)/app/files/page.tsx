import AssetsTable from "@/components/molecules/m-assets-table";
import { H3 } from "@/components/ui/typography";

const FilesPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <H3>All Files</H3>
      <AssetsTable />
    </div>
  );
};

export default FilesPage;
