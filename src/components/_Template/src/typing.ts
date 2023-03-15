import type { ExtractPropTypes } from "vue";
import type Temp from "./index.vue";

import { UPDATE_MODEL_EVENT } from "@/constants/event";

export const tempProps = {};
export type TempProps = ExtractPropTypes<typeof tempProps>;

export const tempEmit = {
  [UPDATE_MODEL_EVENT]: () => true,
};

export type TempEmit = typeof tempEmit;

export type TempInstance = InstanceType<typeof Temp>;
