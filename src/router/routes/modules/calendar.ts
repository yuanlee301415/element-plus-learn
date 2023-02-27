import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const CALENDAR_ROUTE: AppRouteRecordRaw = {
  path: "/calendar",
  name: "Calendar",
  redirect: "/calendar",
  component: LAYOUT,
  meta: {
    title: "日历",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "CalendarPage",
      component: () => import("@/views/Calendar.vue"),
      meta: {
        title: "日历",
      },
    },
  ],
};

export default CALENDAR_ROUTE;
