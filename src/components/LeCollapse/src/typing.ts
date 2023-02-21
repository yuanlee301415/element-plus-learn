import type { PropType, ExtractPropTypes } from "vue";

import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from "@/constants/event";
import { generateId } from "@/utils";

export type CollapseActiveName = string | number;
export type CollapseModelValue = Arrayable<CollapseActiveName>;

export const collapseProps = {
  accordion: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Array, String, Number] as PropType<CollapseModelValue>,
    default: () => [] as const,
  },
} as const;

export const emitChangeFn = (value: CollapseModelValue) =>
  typeof value === "string" ||
  typeof value === "number" ||
  Array.isArray(value);

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

export type CollapseEmits = typeof collapseEmits;

export const collapseItemProps = {
  name: {
    type: [String, Number] as PropType<CollapseActiveName>,
    default: () => generateId(),
  },
  title: String as PropType<string>,
  disabled: Boolean,
} as const;

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
