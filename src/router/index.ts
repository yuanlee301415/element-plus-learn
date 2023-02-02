import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "@/router/routes";
import { setupRouterGuard } from "@/router/guard";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: basicRoutes as unknown as RouteRecordRaw[],
});

export function setupRouter(app: App<Element>) {
  setupRouterGuard(router);
  app.use(router);
}
