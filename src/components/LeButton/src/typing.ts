import type { ComponentSize } from "@/constants/size";
import type Button from "./index.vue";

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

export type ButtonInstance = InstanceType<typeof Button>;
