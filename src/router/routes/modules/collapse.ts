import type { AppRouteRecordRaw } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const COLLAPSE_ROUTE: AppRouteRecordRaw = {
  path: "/collapse",
  name: "Collapse",
  redirect: "/collapse",
  component: LAYOUT,
  meta: {
    title: "Collapse 折叠面板",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "CollapsePage",
      component: () => import("@/views/Collapse.vue"),
      meta: {},
    },
  ],
};

export default COLLAPSE_ROUTE;
