import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const CONTAINER_ROUTE: AppRouteRecordRaw = {
  path: "/container",
  name: "Container",
  redirect: "/container",
  component: LAYOUT,
  meta: {
    title: "Container 布局容器",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "ContainerPage",
      component: () => import("@/views/container.vue"),
      meta: {
        title: "布局容器",
      },
    },
  ],
};

export default CONTAINER_ROUTE;
