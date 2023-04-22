import type { ExtractPropTypes, PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const breadcrumbItemProps = {
  to: [String, Object] as PropType<string | RouteLocationRaw>,
  replace: Boolean
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbItemProps>
