export const componentType = ['', 'success', 'info', 'warning', 'danger'] as const

export type ComponentType = (typeof componentType)[number]
