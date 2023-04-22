import type { AppRouteRecordRaw } from '@/router/types'
import { LAYOUT } from '@/router/constant'

const AVATAR_ROUTE: AppRouteRecordRaw = {
  path: '/avatar',
  name: 'Avatar',
  redirect: '/avatar',
  component: LAYOUT,
  meta: {
    title: 'Avatar 头像',
    hiddenChildrenInMenu: true
  },
  children: [
    {
      path: '',
      name: 'AvatarPage',
      component: () => import('@/views/avatar.vue'),
      meta: {}
    }
  ]
}

export default AVATAR_ROUTE
