import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const INPUT_ROUTE: AppRouteRecordRaw = {
  path: "/input",
  name: "Input",
  redirect: "/input",
  component: LAYOUT,
  meta: {
    title: "输入框",
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "InputPage",
      component: () => import("@/views/input.vue"),
      meta: {
        title: "输入框"
      }
    }
  ]
};

export default INPUT_ROUTE;