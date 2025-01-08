import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { getFileIcon } from "@/lib/utils/jsxElements";

interface Props {
  variant?: "Documents" | "Images" | "Videos" | "Audio" | "Others";
  value?: number;
  fetching?: boolean;
}

const FileStorageSummary: React.FC<Props> = ({ variant, value, fetching }) => {
  return (
    <div className="p-4 flex flex-col gap-2 rounded-md bg-black/5">
      <span className="font-medium">{variant}</span>
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-gray-400 text-3xl",
            variant === "Images" && "text-green-500",
            variant === "Documents" && "text-blue-400",
            variant === "Videos" && "text-teal-400",
            variant === "Audio" && "text-violet-400",
          )}
        >
          {getFileIcon(variant ?? "")}
        </span>
        {fetching ? (
          <Skeleton className="w-1/2 h-4" />
        ) : (
          <span>{value} files</span>
        )}
      </div>
    </div>
  );
};

export default FileStorageSummary;
