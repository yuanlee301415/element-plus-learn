import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@/components/Lebreadcrumb/src/breadcrumb'

export const breadcrumbContextKey: InjectionKey<BreadcrumbProps> = Symbol('breadcrumb')
