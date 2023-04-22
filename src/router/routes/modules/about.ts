import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const ABOUT_ROUTE: AppRouteRecordRaw = {
  path: '/about',
  name: 'About',
  redirect: '/about',
  component: LAYOUT,
  meta: {
    title: '关于',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'AboutPage',
      component: () => import('@/views/About.vue'),
      meta: {}
    }
  ]
}

export default ABOUT_ROUTE
