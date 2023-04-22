import type { Router } from 'vue-router'

import { useUserStoreWithOut } from '@/store/modules/user'

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut()
  router.beforeEach(async (to, from, next) => {
    if (!userStore.getUserInfo?.userName) {
      await userStore.getUserInfoAction()
    }
    next()
  })
}
