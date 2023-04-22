import LeBreadcrumb from './src/breadcrumb.vue'
import LeBreadcrumbItem from './src/breadcrumb-item.vue'

export type BreadcrumbInstance = InstanceType<typeof LeBreadcrumb>
export type BreadcrumbItemInstance = InstanceType<typeof LeBreadcrumbItem>

export * from './src/breadcrumb'
export { LeBreadcrumb, LeBreadcrumbItem }
