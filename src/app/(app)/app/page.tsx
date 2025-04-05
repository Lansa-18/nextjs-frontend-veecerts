"use client";

import Avatar from "@/components/avatar";
import Image from "next/image";
import TabsComponent from "@/components/tabs";
import SearchBar from "@/components/search";
import ChartCard from "@/components/card/chart_card";

const AppDashboard = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex flex-col gap-2 xl:flex-row items-center md:items-start p-6 pb-3 justify-between">
        <div>
          <h1 className="font-bold text-4xl">Dashboard</h1>
        </div>

        <div className="flex flex-col justify-between w-full xl:w-fit lg:flex-row gap-6 mt-4 md:mt-0">
          <SearchBar />
          <div className="flex flex-row-reverse justify-between md:flex-row px-4 gap-4 items-center">
            <div className="relative mt-3 md:mt-0">
              <Image
                src="/Union.svg"
                alt="Notification"
                width={24}
                height={24}
              />
              <span className="top-0 left-4 absolute w-1.5 h-1.5 bg-red-400 rounded-full"></span>
            </div>
            <Avatar />
          </div>
        </div>
      </div>

      <div className="p-10 pt-2">
        <div className="bg-white p-7 pt-6">
          <div className="flex gap-5 p-3">
            <Image src="/file icon.svg" alt="" width={30} height={31.77} />
            <span className="font-normal text-2xl">All folders</span>
          </div>

          <div className="w-full py-4">
            <hr className="w-full m-0" />
          </div>
          <div className="px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
            <ChartCard
              title={"Documents"}
              count={684}
              colors={["rgba(108, 93, 211, 1)", "rgba(228, 232, 239, 1)"]}
              data={[190, 70]}
            />
            <ChartCard
              title={"Images"}
              count={546}
              colors={["rgba(253, 133, 57, 1)", "rgba(228, 232, 239, 1)"]}
              data={[190, 50]}
            />
            <ChartCard
              title={"Videos"}
              count={5732}
              colors={["rgba(46, 212, 128, 1)", "rgba(228, 232, 239, 1)"]}
              data={[190, 30]}
            />
            <ChartCard
              title={"Others"}
              count={90}
              colors={["rgb(254, 109, 142, 1)", "rgba(228, 232, 239, 1)"]}
              data={[190, 40]}
            />
          </div>

          <div>
            <TabsComponent />
          </div>
        </div>
      </div>
    </div>
    // <div className="p-4 flex flex-col gap-4">
    //   <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
    //     <UsedStorageChart
    //       free={
    //         data?.client?.activeSubscription?.subscriptionPackage
    //           .storageCapacityMb ?? 1
    //       }
    //       used={data?.client?.usage?.usedStorageMb ?? 1}
    //     />
    //     <UsedStorageChartBreakdown
    //       documents={data?.client?.fileStorageSummary.documents.totalSize ?? 1}
    //       videos={data?.client?.fileStorageSummary.videos.totalSize ?? 1}
    //       other={data?.client?.fileStorageSummary.others.totalSize ?? 1}
    //       audio={data?.client?.fileStorageSummary.audios.totalSize ?? 1}
    //       images={data?.client?.fileStorageSummary.images.totalSize ?? 1}
    //     />
    //   </div>
    //   <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
    //     <FileStorageSummary
    //       variant="Documents"
    //       value={data?.client?.fileStorageSummary.documents.count ?? 0}
    //       fetching={fetching}
    //     />
    //     <FileStorageSummary
    //       variant="Images"
    //       value={data?.client?.fileStorageSummary.images.count ?? 0}
    //       fetching={fetching}
    //     />
    //     <FileStorageSummary
    //       variant="Videos"
    //       value={data?.client?.fileStorageSummary.videos.count ?? 0}
    //       fetching={fetching}
    //     />
    //     <FileStorageSummary
    //       variant="Audio"
    //       value={data?.client?.fileStorageSummary.audios.count ?? 0}
    //       fetching={fetching}
    //     />
    //     <FileStorageSummary
    //       variant="Others"
    //       value={data?.client?.fileStorageSummary.others.count ?? 0}
    //       fetching={fetching}
    //     />
    //   </div>
    //   <div>
    //     <div className="flex items-center justify-between p-2">
    //       <H4 className="text-foreground/60">Files</H4>
    //       <Link
    //         href="/app/files"
    //         className="text-blue-500 hover:text-blue-500/60 hover:underline transition-all"
    //       >
    //         View All
    //       </Link>
    //     </div>
    //     <FolderAssetsTable />
    //   </div>
    // </div>
  );
};

export default AppDashboard;
