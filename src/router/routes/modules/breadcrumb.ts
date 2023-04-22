import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const BREADCRUMB_ROUTE: AppRouteRecordRaw = {
  path: '/breadcrumb',
  name: 'Breadcrumb',
  redirect: '/breadcrumb',
  component: LAYOUT,
  meta: {
    title: 'breadcrumb 面包屑',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'BreadcrumbPage',
      component: () => import('@/views/breadcrumb.vue'),
      meta: {}
    }
  ]
}

export default BREADCRUMB_ROUTE
