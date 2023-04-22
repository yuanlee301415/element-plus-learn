import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const BADGE_ROUTE: AppRouteRecordRaw = {
  path: '/badge',
  name: 'Badge',
  redirect: '/badge',
  component: LAYOUT,
  meta: {
    title: 'Badge 徽章',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'BadgePage',
      component: () => import('@/views/Badge.vue'),
      meta: {}
    }
  ]
}

export default BADGE_ROUTE
