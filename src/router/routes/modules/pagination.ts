import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const PAGINATION_ROUTE: AppRouteRecordRaw = {
  path: "/pagination",
  name: "Pagination",
  redirect: "/pagination",
  component: LAYOUT,
  meta: {
    title: "Pagination 分页",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "PaginationPage",
      component: () => import("@/views/pagination.vue"),
      meta: {},
    },
  ],
};

export default PAGINATION_ROUTE;
