import type { AppRouteRecordRaw } from "@/router/types";

import { EXCEPTION_404, LAYOUT, PAGE_NOT_FOUND_NAME } from "@/router/constant";
import ABOUT_ROUTE from "@/router/routes/modules/about";
import TEST_ROUTE from "@/router/routes/modules/test";
// import NESTED_ROUTE from "@/router/routes/modules/nested";

export const ROOT_ROUTE: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: "/home",
  meta: {
    title: "Root",
    hiddenMenu: true,
  },
};

export const HOME_ROUTE: AppRouteRecordRaw = {
  path: "/home",
  name: "Home",
  redirect: "/home",
  component: LAYOUT,
  meta: {
    title: "首页",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "HomePage",
      component: () => import("@/views/Home.vue"),
      meta: {},
    },
  ],
};

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: PAGE_NOT_FOUND_NAME,
    hiddenMenu: true,
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_404,
      meta: {},
    },
  ],
};

export const basicRoutes = [
  ROOT_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  TEST_ROUTE,
  // NESTED_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
