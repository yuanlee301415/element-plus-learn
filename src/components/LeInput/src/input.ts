import type { ExtractPropTypes } from 'vue'

import { UPDATE_MODEL_EVENT } from '@/constants/event'

export const inputProps = {
  modelValue: String
}
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmit = {
  [UPDATE_MODEL_EVENT]: (val: string) => typeof val === 'string'
}

export type InputEmit = typeof inputEmit
