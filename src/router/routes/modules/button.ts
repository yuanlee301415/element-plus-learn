import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const BUTTON_ROUTE: AppRouteRecordRaw = {
  path: '/button',
  name: 'Button',
  redirect: '/button',
  component: LAYOUT,
  meta: {
    title: 'Button 按钮',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'ButtonPage',
      component: () => import('@/views/Button.vue'),
      meta: {}
    }
  ]
}

export default BUTTON_ROUTE
