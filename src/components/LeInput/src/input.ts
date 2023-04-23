import type { ExtractPropTypes } from 'vue'

import { UPDATE_MODEL_EVENT } from '@/constants/event'

export const inputProps = {
  modelValue: String,
  disabled: Boolean,
  clearable: Boolean,
  prefixIcon: String,
  suffixIcon: String,
}
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmit = {
  [UPDATE_MODEL_EVENT]: (val: string) => typeof val === 'string'
}

export type InputEmit = typeof inputEmit
