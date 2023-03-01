// statistic

import type { ExtractPropTypes, PropType, StyleValue } from "vue";

export const statisticProps = {
  value: {
    type: Number,
    default: 0,
  },
  formatter: Function,
  groupSeparator: {
    type: String,
    default: ",",
  },
  precision: {
    type: Number,
    default: 0,
  },
  prefix: String,
  suffix: String,
  title: String,
  valueStyle: [String, Object] as PropType<StyleValue>,
};

export type StatisticProps = ExtractPropTypes<typeof statisticProps>;
