import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const TABS_ROUTE: AppRouteRecordRaw = {
  path: "/tabs",
  name: "Tabs",
  redirect: "/tabs",
  component: LAYOUT,
  meta: {
    title: "Tabs 标签页",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "TabsPage",
      component: () => import("@/views/tabs.vue"),
      meta: {},
    },
  ],
};

export default TABS_ROUTE;
