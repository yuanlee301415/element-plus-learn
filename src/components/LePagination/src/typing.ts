import type { ExtractPropTypes, PropType } from "vue";
import type LePagination from "./index.vue";

enum LAYOUT_DEFAULT {
  PREV = "prev",
  PAGER = "pager",
  NEXT = "next",
  TOTAL = "total",
}

enum LAYOUT_OPTIONS {
  SIZES = "sizes",
  JUMPER = "jumper",
}

export enum LAYOUTS {
  TOTAL = LAYOUT_DEFAULT.TOTAL,
  SIZES = LAYOUT_OPTIONS.SIZES,

  PREV = LAYOUT_DEFAULT.PREV,
  PAGER = LAYOUT_DEFAULT.PAGER,
  NEXT = LAYOUT_DEFAULT.NEXT,

  JUMPER = LAYOUT_OPTIONS.JUMPER,
}

export const pageProps = {
  total: {
    type: Number,
    default: void 0,
  },
  pagerCount: {
    type: Number,
    default: 7,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: void 0,
  },
  background: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 50, 100],
  },
  defaultPageSize: {
    type: Number,
    default: 10,
  },
  layout: {
    type: String,
    default: Object.values(LAYOUT_DEFAULT).join(),
  },
};
export type PageProps = ExtractPropTypes<typeof pageProps>;

export const pageEmit = {
  ["update:currentPage"]: (page: number) => Number.isSafeInteger(page),
  ["update:pageSize"]: (size: number) => Number.isSafeInteger(size),
};

export type PageEmit = typeof pageEmit;

export type PageInstance = InstanceType<typeof LePagination>;
