import React from "react";

export interface NavType {
  type: "single";
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface NavGroup {
  type: "group";
  title?: string;
  icon?: React.ReactNode;
  navs: NavType[];
}

export interface SidebarGroup {
  header?: string;
  navs: (NavType | NavGroup)[];
}
