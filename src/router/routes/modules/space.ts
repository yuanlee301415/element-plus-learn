import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const SPACE_ROUTE: AppRouteRecordRaw = {
  path: '/space',
  name: 'Space',
  redirect: '/space',
  component: LAYOUT,
  meta: {
    title: 'Space 间距',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'SpacePage',
      component: () => import('@/views/space.vue'),
      meta: {}
    }
  ]
}

export default SPACE_ROUTE
