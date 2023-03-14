import type { ExtractPropTypes, PropType } from "vue";
import { UPDATE_MODEL_EVENT } from "@/constants/event";

export const enum Direction {
  Left = "left",
  Right = "right",
}

export type TransferKey = string | number;

export type TransferDataItem = {
  key: TransferKey;
  label: TransferKey;
  disabled: boolean;
};

export const transferProps = {
  modelValue: {
    type: Array as PropType<TransferKey[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<TransferDataItem[]>,
  },
  titles: {
    type: Array as PropType<string[]>,
    default: () => ["List 1", "List 2"],
  },
  buttonTexts: {
    type: Array as PropType<string[]>,
    default: () => ["", ""],
  },
  leftDefaultChecked: {
    type: Array as PropType<TransferKey[]>,
    default: () => []
  },
  rightDefaultChecked: {
    type: Array as PropType<TransferKey[]>,
    default: () => []
  }
};

export type TransferProps = ExtractPropTypes<typeof transferProps>;

export const transferEmit = {
  [UPDATE_MODEL_EVENT]: (keys: TransferKey[]) => Array.isArray(keys),
  change: (
    currentKeys: TransferKey[],
    dir: Direction,
    targetKeys: TransferKey[]
  ) =>
    currentKeys &&
    targetKeys &&
    [Direction.Left, Direction.Right].includes(dir),
};

export type TransferEmit = typeof transferEmit;

export const panelProps = {
  modelValue: {
    type: Array as PropType<TransferKey[]>,
    default: () => [],
  },
  items: Array as PropType<TransferDataItem[]>,
  title: String,
  filterable: Boolean,
  filterPlaceholder: {
    type: String,
    default: "Enter keyword",
  },
  filterMethod: Function,
};

export type PanelProps = ExtractPropTypes<typeof panelProps>;

export const panelEmit = {
  [UPDATE_MODEL_EVENT]: (keys: TransferKey[]) => Array.isArray(keys),
};

export type PanelEmit = typeof panelEmit;
