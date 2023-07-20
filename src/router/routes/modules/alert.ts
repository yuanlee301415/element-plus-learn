import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const ALERT_ROUTE: AppRouteRecordRaw = {
  path: '/alert',
  name: 'Alert',
  redirect: '/alert',
  component: LAYOUT,
  meta: {
    title: 'Alert 提示',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'AlertPage',
      component: () => import('@/views/alert.vue'),
      meta: {}
    }
  ]
}

export default ALERT_ROUTE
