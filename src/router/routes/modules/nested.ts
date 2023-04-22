import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const NESTED_ROUTE: AppRouteRecordRaw = {
  path: '/nested',
  name: 'Nested',
  component: LAYOUT,
  redirect: '/nested/a',
  meta: {
    title: 'Nested'
  },
  children: [
    {
      path: 'a',
      name: 'NestedA',
      meta: { title: 'NestedA' },
      redirect: '/nested/a/a1',
      children: [
        {
          path: 'a1',
          name: 'NestedA1',
          component: () => import('@/views/nested/a/a1/index.vue'),
          meta: {
            title: 'NestedA1'
          }
        },
        {
          path: 'a2',
          name: 'NestedA2',
          component: () => import('@/views/nested/a/a2/index.vue'),
          meta: {
            title: 'NestedA2'
          }
        }
      ]
    },

    {
      path: 'b',
      name: 'NestedB',
      meta: { title: 'NestedB' },
      redirect: '/nested/b/b1',
      children: [
        {
          path: 'b1',
          name: 'NestedB1',
          component: () => import('@/views/nested/b/b1/index.vue'),
          meta: {
            title: 'NestedB1'
          }
        },
        {
          path: 'b2',
          name: 'NestedB2',
          component: () => import('@/views/nested/b/b2/index.vue'),
          meta: {
            title: 'NestedB2'
          }
        }
      ]
    },

    {
      path: 'c',
      name: 'NestedC',
      meta: { title: 'NestedC' },
      redirect: '/nested/c/c1',
      children: [
        {
          path: 'c1',
          name: 'NestedC1',
          meta: {
            title: 'NestedC1'
          },
          redirect: '/nested/c/c1/1',
          children: [
            {
              path: '1',
              name: 'NestedC1-1',
              component: () => import('@/views/nested/c/c1/1/index.vue'),
              meta: {
                title: 'NestedC1-1'
              }
            },
            {
              path: '2',
              name: 'NestedC1-2',
              component: () => import('@/views/nested/c/c1/2/index.vue'),
              meta: {
                title: 'NestedC1-2'
              }
            }
          ]
        },
        {
          path: 'c2',
          name: 'NestedC2',
          component: () => import('@/views/nested/c/c2/index.vue'),
          meta: {
            title: 'NestedC2'
          }
        }
      ]
    }
  ]
}

export default NESTED_ROUTE
