import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const AVATAR_ROUTE: AppRouteRecordRaw = {
  path: "/avatar",
  name: "Avatar",
  redirect: "/avatar",
  component: LAYOUT,
  meta: {
    title: "头像",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "AvatarPage",
      component: () => import("@/views/avatar.vue"),
      meta: {
        title: "头像",
      },
    },
  ],
};

export default AVATAR_ROUTE;
