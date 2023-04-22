import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const EMPTY_ROUTE: AppRouteRecordRaw = {
  path: '/empty',
  name: 'Empty',
  redirect: '/empty',
  component: LAYOUT,
  meta: {
    title: 'Empty 空状态',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'EmptyPage',
      component: () => import('@/views/empty.vue'),
      meta: {}
    }
  ]
}

export default EMPTY_ROUTE
