import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const CARD_ROUTE: AppRouteRecordRaw = {
  path: '/card',
  name: 'Card',
  redirect: '/card',
  component: LAYOUT,
  meta: {
    title: 'Card 卡片',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'CardPage',
      component: () => import('@/views/Card.vue'),
      meta: {}
    }
  ]
}

export default CARD_ROUTE
