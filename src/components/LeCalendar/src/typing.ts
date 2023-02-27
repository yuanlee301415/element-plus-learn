import type { ExtractPropTypes, PropType } from "vue";
import { UPDATE_MODEL_EVENT } from "@/constants/event";

export type CalendarValue = Date | string | number;
export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
export type CalendarEmit = typeof calendarEmit;
export type CalendarDateType =
  | "prev-month"
  | "next-month"
  | "prev-year"
  | "next-year"
  | "today";

export type CalendarCellDateProps = ExtractPropTypes<
  typeof calendarCellDateProps
>;
export type CalendarCellDateEmit = typeof calendarCellDateEmit;

export const MILLISECONDS_IN_DAY = 1000 * 3600 * 24;
export const DAYS_IN_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const CALENDAR_CHOOSE_EVENT = "choose-date";

export const calendarProps = {
  modelValue: {
    type: [Date, Number, String] as PropType<CalendarValue>,
  },
};

export const calendarEmit = {
  [UPDATE_MODEL_EVENT]: (value: Date) => !!value.getTime(),
};

export const calendarCellDateProps = {
  cellDate: {
    type: Date,
  },
  value: {
    type: Date,
  },
  today: {
    type: Date,
  },
  firstDay: {
    type: Date,
  },
  lastDay: {
    type: Date,
  },
};

export const calendarCellDateEmit = {
  [CALENDAR_CHOOSE_EVENT]: (value: Date) => !!new Date(value).getTime(),
};
