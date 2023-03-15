import type Icon from "./index.vue";
import type { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  name: {
    type: String,
    required: true,
  },
  color: String,
  size: [String, Number] as PropType<string | number>,
};

export type IconProps = ExtractPropTypes<typeof iconProps>;

export type IconInstance = InstanceType<typeof Icon>;
