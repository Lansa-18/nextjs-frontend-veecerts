import ClientFiles from "@/components/organisms/o-client-files";
import { Suspense } from "react";

const FoldersPage = () => {
  return (
    <Suspense>
      <ClientFiles />
    </Suspense>
  );
};

export default FoldersPage;
