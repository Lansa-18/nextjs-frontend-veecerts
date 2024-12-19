import AppLayout from "@/components/layouts/l-app-layout";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <AppLayout variant="admin">{children}</AppLayout>;
};

export default Layout;
