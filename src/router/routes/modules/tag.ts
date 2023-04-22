import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const TAG_ROUTE: AppRouteRecordRaw = {
  path: '/tag',
  name: 'Tag',
  redirect: '/tag',
  component: LAYOUT,
  meta: {
    title: 'Tag 标签',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'TagPage',
      component: () => import('@/views/tag.vue'),
      meta: {}
    }
  ]
}

export default TAG_ROUTE
