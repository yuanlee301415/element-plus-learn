import type { AppRouteRecordRaw } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const Button_ROUTE: AppRouteRecordRaw = {
  path: "/button",
  name: "Button",
  redirect: "/button",
  component: LAYOUT,
  meta: {
    title: "按钮",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "ButtonPage",
      component: () => import("@/views/Button.vue"),
      meta: {},
    },
  ],
};

export default Button_ROUTE;
