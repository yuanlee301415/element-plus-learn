import type { ComponentSize } from "@/constants/size";

export const buttonTypes = ['', 'primary', 'success', 'warning', 'info', 'danger'] as const
export type ButtonType = typeof buttonTypes[number]
export type ButtonSize = ComponentSize