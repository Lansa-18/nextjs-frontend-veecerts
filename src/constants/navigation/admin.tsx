import { SidebarGroup } from "./types";
import MageDashboard2 from "~icons/mage/dashboard-2.jsx";
import PhPackageDuotone from "~icons/ph/package-duotone.jsx";
import MageUsers from "~icons/mage/users.jsx";
import SolarLogout2Outline from "~icons/solar/logout-2-outline.jsx";
import FluentAppFolder28Filled from '~icons/fluent/app-folder-28-filled.jsx';

export const ADMIN_NAVIGATION: SidebarGroup[] = [
  {
    header: "Admin",
    navs: [
      {
        type: "single",
        name: "Dashboard",
        url: "/admin",
        icon: <MageDashboard2 />,
      },
      {
        type: "single",
        name: "Packages",
        url: "/admin/packages",
        icon: <PhPackageDuotone />,
      },
      {
        type: "single",
        name: "App",
        url: "/app",
        icon: <FluentAppFolder28Filled />,
      },
      {
        type: "single",
        name: "Staff",
        url: "/admin/staff",
        icon: <MageUsers />,
      },
      {
        type: "single",
        name: "Logout",
        url: "/signout",
        icon: <SolarLogout2Outline />,
      },
    ],
  },
];
