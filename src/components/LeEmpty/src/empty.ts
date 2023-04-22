import type { ExtractPropTypes, PropType } from 'vue'

export const emptyProps = {
  image: {
    type: String,
    default: ''
  },
  imageSize: {
    type: [Number, String] as PropType<number | string>,
    default: void 0
  },
  description: {
    type: String,
    default: ''
  } as const
}

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
