"use client";

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const ClientFiles = dynamic(
  () => import("@/components/organisms/o-client-files").then((mod) => mod),
  { ssr: false },
);

const FoldersPage = () => {
  useSearchParams();

  return <ClientFiles />;
};

export default FoldersPage;
