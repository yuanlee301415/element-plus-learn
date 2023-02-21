import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ${upperNames[0]}_ROUTE: AppRouteRecordRaw = {
  path: "/${lowerNames[0]}",
  name: "${capitalNames[0]}",
  redirect: "/${lowerNames.join('/')}",
  component: LAYOUT,
  meta: {
    title: "${titles[0]}",
    hiddenChildrenInMenu: ${hiddenChildrenInMenu}
  },
  children: [
    {
      path: "${lowerNames[1] ?? ''}",
      name: "${capitalNames[1] ?? capitalNames[0]}Page",
      component: () => import("@/views/${lowerNames.join('/')}.vue"),
      meta: {
        title: "${titles[1] ?? titles[0]}"
      }
    }
  ]
};

export default ${upperNames[0]}_ROUTE;