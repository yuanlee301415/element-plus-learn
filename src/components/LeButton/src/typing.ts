import type { ComponentSize } from "@/constants/size";
import type Button from "./index.vue";
import type {ExtractPropTypes, PropType} from "vue";

export const buttonTypes = [
  "",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
] as const;

export type ButtonType = typeof buttonTypes[number];

export type ButtonSize = ComponentSize;

export const buttonProps = {
  /*按钮主题颜色*/
  type: {
    type: String as PropType<ButtonType>
  },

  /*按钮尺寸*/
  size: {
    type: String as PropType<ButtonSize>
  },

  /*是否为朴素按钮*/
  plain: Boolean,

  /*是否为圆角*/
  round: Boolean,

  /*是否禁用*/
  disabled: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmit = {
  click: null
}

export type ButtonEmit = typeof buttonEmit


export type ButtonInstance = InstanceType<typeof Button>;
