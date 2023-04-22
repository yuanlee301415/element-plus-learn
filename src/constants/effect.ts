export const componentEffect = ['', 'dark', 'info', 'light', 'plain'] as const

export type ComponentEffect = (typeof componentEffect)[number]
