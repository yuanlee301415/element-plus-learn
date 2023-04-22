import type { ExtractPropTypes, PropType, StyleValue } from 'vue'
import type CountDown from './index.vue'

export const countdownProps = {
  value: {
    type: Number
  },
  formatter: Function,
  prefix: String,
  suffix: String,
  title: String,
  valueStyle: [String, Object] as PropType<StyleValue>
}

export const countdownEmit = {
  change: (value: number) => !!new Date(value).getTime(),
  finish: null
}

export type CountdownProps = ExtractPropTypes<typeof countdownProps>
export type CountdownEmit = typeof countdownEmit
export type CountDownInstance = InstanceType<typeof CountDown>
