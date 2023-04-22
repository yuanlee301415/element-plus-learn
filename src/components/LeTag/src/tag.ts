import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentType } from '@/constants/type'
import type { ComponentEffect } from '@/constants/effect'
import type { ComponentSize } from '@/constants/size'

export const tagProps = {
  type: String as PropType<ComponentType>,
  closable: Boolean,
  hit: Boolean,
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default'
  },
  effect: {
    type: String as PropType<ComponentEffect>,
    default: 'light'
  },
  round: Boolean,
  color: String
}
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmit = {
  ['click']: (event: MouseEvent) => event instanceof MouseEvent,
  ['close']: (event: MouseEvent) => event instanceof MouseEvent
}

export type TagEmit = typeof tagEmit
