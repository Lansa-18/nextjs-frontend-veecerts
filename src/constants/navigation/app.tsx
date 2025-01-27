import { SidebarGroup } from "./types";
import AkarIconsPerson from '~icons/akar-icons/person?width=24px&height=24px';
import LucideCreditCard from '~icons/lucide/credit-card?width=24px&height=24px';
import IcOutlineFolderCopy from '~icons/ic/outline-folder-copy?width=24px&height=24px';
import CilPeople from '~icons/cil/people?width=512px&height=512px';
import MaterialSymbolsHomeOutlineRounded from '~icons/material-symbols/home-outline-rounded?width=24px&height=24px';

export const APP_NAVIGATION: SidebarGroup[] = [
  {
    header: "",
    navs: [
      {
        type: "single",
        name: "Dashboard",
        url: "/app",
        icon: <MaterialSymbolsHomeOutlineRounded />,
      },
      {
        type: "group",
        title: "Folders",
        icon: <IcOutlineFolderCopy />,
        navs: [
          {
            name: "View All",
            url: "/app/folders",
            type: "single",
          },
          {
            name: "Recent",
            url: "/app/folders?tab=recent",
            type: "single",
          },
          {
            name: "Favourite",
            url: "/app/folders?tab=favourite",
            type: "single",
          },
          {
            name: "Shared",
            url: "/app/folders?tab=shared",
            type: "single",
          },
        ],
      },
      // {
      //   type: "single",
      //   name: "All Files",
      //   url: "/app/files",
      //   icon: <BiFilesAlt />,
      // },
    ],
  },
  {
    header: "Users",
    navs: [
      {
        type: "single",
        name: "Team members",
        url: "/app/billing",
        icon: <CilPeople />,
      },
      {
        type: "single",
        name: "Billing",
        url: "/app/billing",
        icon: <LucideCreditCard />,
      },
      {
        type: "single",
        name: "Profile",
        url: "/app/billing",
        icon: <AkarIconsPerson />,
      },
    ],
  },
];
