"use client";

import React from "react";
import dynamic from "next/dynamic";

const AppLayout = dynamic(
  () => import("@/components/layouts/l-app-layout").then((mod) => mod),
  { ssr: false },
);

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
