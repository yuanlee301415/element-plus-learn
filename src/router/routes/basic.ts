import type { AppRouteModule } from "@/router/types";
import { PAGE_NOT_FOUND_NAME, LAYOUT, EXCEPTION_404 } from "@/router/constant";

export const HOME_ROUTE: AppRouteModule = {
  path: "/home",
  name: "Home",
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

export const PAGE_NOT_FOUND_ROUTE: AppRouteModule = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: PAGE_NOT_FOUND_NAME,
    hideMenu: true,
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
