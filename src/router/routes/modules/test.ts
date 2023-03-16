import type { AppRouteRecordRaw } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const TEST_ROUTE: AppRouteRecordRaw = {
  path: "/test",
  name: "Test",
  component: LAYOUT,
  redirect: "/test/a",
  meta: {
    title: "Test",
  },
  children: [
    {
      path: "a",
      name: "TestA",
      component: () => import("@/views/test/A.vue"),
      meta: {
        title: "TestA",
      },
    },
    {
      path: "b",
      name: "TestB",
      component: () => import("@/views/test/B.vue"),
      meta: {
        title: "TestB",
      },
    },
    {
      path: "test-expose",
      name: "TestExpose",
      component: () => import("@/views/test/TestExpose.vue"),
      meta: {
        title: "TestExpose",
      },
    },
  ],
};

export default TEST_ROUTE;
