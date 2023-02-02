import type { Router } from "vue-router";

import { createPermissionGuard } from "@/router/guard/permission";

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
}
