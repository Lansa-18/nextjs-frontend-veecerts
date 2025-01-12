"use client";

import FileStorageSummary from "@/components/atoms/a-file-storage-summary";
import UsedStorageChartBreakdown from "@/components/atoms/a-used-storage-breakdown-chart";
import UsedStorageChart from "@/components/atoms/a-used-storage-chart";
import FolderAssetsTable from "@/components/molecules/m-assets-table";
import { H4 } from "@/components/ui/typography";
import { useClientQuery } from "@/lib/services/graphql/generated";
import Link from "next/link";

const AppDashboard = () => {
  const [{ fetching, data }] = useClientQuery();
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <UsedStorageChart
          free={
            data?.client?.activeSubscription?.subscriptionPackage
              .storageCapacityMb ?? 1
          }
          used={data?.client?.usage?.usedStorageMb ?? 1}
        />
        <UsedStorageChartBreakdown
          documents={data?.client?.fileStorageSummary.documents.totalSize ?? 1}
          videos={data?.client?.fileStorageSummary.videos.totalSize ?? 1}
          other={data?.client?.fileStorageSummary.others.totalSize ?? 1}
          audio={data?.client?.fileStorageSummary.audios.totalSize ?? 1}
          images={data?.client?.fileStorageSummary.images.totalSize ?? 1}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        <FileStorageSummary
          variant="Documents"
          value={data?.client?.fileStorageSummary.documents.count ?? 0}
          fetching={fetching}
        />
        <FileStorageSummary
          variant="Images"
          value={data?.client?.fileStorageSummary.images.count ?? 0}
          fetching={fetching}
        />
        <FileStorageSummary
          variant="Videos"
          value={data?.client?.fileStorageSummary.videos.count ?? 0}
          fetching={fetching}
        />
        <FileStorageSummary
          variant="Audio"
          value={data?.client?.fileStorageSummary.audios.count ?? 0}
          fetching={fetching}
        />
        <FileStorageSummary
          variant="Others"
          value={data?.client?.fileStorageSummary.others.count ?? 0}
          fetching={fetching}
        />
      </div>
      <div>
        <div className="flex items-center justify-between p-2">
          <H4 className="text-foreground/60">Files</H4>
          <Link
            href="/app/files"
            className="text-blue-500 hover:text-blue-500/60 hover:underline transition-all"
          >
            View All
          </Link>
        </div>
        <FolderAssetsTable />
      </div>
    </div>
  );
};

export default AppDashboard;
