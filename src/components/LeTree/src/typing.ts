import type { ExtractPropTypes } from "vue";
import type Tree from "./index.vue";

import { UPDATE_MODEL_EVENT } from "@/constants/event";

export const treeProps = {};
export type TreeProps = ExtractPropTypes<typeof treeProps>;

export const treeEmit = {
  [UPDATE_MODEL_EVENT]: () => true,
};

export type TreeEmit = typeof treeEmit;

export type TreeInstance = InstanceType<typeof Tree>;
