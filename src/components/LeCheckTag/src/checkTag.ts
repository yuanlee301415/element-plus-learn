import type { ExtractPropTypes } from "vue";
import { CHANGE_EVENT } from "@/constants/event";

export const checkTagProps = {
  checked: Boolean,
};
export type CheckTagProps = ExtractPropTypes<typeof checkTagProps>;

export const checkTagEmit = {
  "update:checked": (checked: boolean) => typeof checked === "boolean",
  [CHANGE_EVENT]: (checked: boolean) => typeof checked === "boolean",
};

export type CheckTagEmit = typeof checkTagEmit;
