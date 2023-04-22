import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const STATISTIC_ROUTE: AppRouteRecordRaw = {
  path: '/statistic',
  name: 'Statistic',
  redirect: '/statistic',
  component: LAYOUT,
  meta: {
    title: 'Statistic 统计组件',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'StatisticPage',
      component: () => import('@/views/statistic.vue'),
      meta: {}
    }
  ]
}

export default STATISTIC_ROUTE
