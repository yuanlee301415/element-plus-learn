import type { SetupContext } from "vue";
import type { CalendarEmit, CalendarProps, CalendarDateType } from "./typing";

import { computed } from "vue";
import { UPDATE_MODEL_EVENT } from "@/constants/event";
import { DAYS_IN_WEEK, MILLISECONDS_IN_DAY } from "./typing";

export const useCalendar = (
  props: CalendarProps,
  emit: SetupContext<CalendarEmit>["emit"]
) => {
  const today = new Date();
  const date = computed(() => new Date(props.modelValue ?? Date.now()));
  const year = computed(() => date.value.getFullYear());
  const month = computed(() => date.value.getMonth());
  const firstDay = computed(() => new Date(year.value, month.value, 1));
  const lastDay = computed(() => new Date(year.value, month.value + 1, 0));
  const dates = computed<Date[]>(() => {
    let dates = calcDates(firstDay.value, lastDay.value);

    const preDates = calcStepDates(
      firstDay.value,
      -1,
      firstDay.value.getDay() % DAYS_IN_WEEK.length
    );
    dates = preDates.concat(dates);

    const nextDates = calcStepDates(
      lastDay.value,
      1,
      DAYS_IN_WEEK.length - lastDay.value.getDay() - 1
    );
    dates = dates.concat(nextDates);

    return dates;
  });

  function handleChooseDate(value: Date) {
    emit(UPDATE_MODEL_EVENT, value);
  }

  function selectedDate(type: CalendarDateType) {
    const dateMap = {
      "prev-month": new Date(year.value, month.value - 1, 1),
      "next-month": new Date(year.value, month.value + 1, 1),
      "prev-year": new Date(year.value - 1, month.value, 1),
      "next-year": new Date(year.value + 1, month.value, 1),
      today: today,
    };
    emit(UPDATE_MODEL_EVENT, dateMap[type] ?? today);
  }

  function getCellDate(row: number, col: number): Date {
    return dates.value[DAYS_IN_WEEK.length * (row - 1) + col - 1]!;
  }

  return {
    date,
    year,
    month,
    dates,
    today,
    firstDay,
    lastDay,
    handleChooseDate,
    selectedDate,
    getCellDate,
  };
};

function calcDates(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  const startTime = startDate?.getTime?.();
  const endTime = endDate?.getTime?.();
  if (!startTime || !endTime) return dates;

  let currTime = startTime;
  while (currTime <= endTime) {
    dates.push(new Date(currTime));
    currTime += MILLISECONDS_IN_DAY;
  }
  return dates;
}

function calcStepDates(startDate: Date, dir: -1 | 1, steps: number): Date[] {
  const dates: Date[] = [];
  const startTime = (startDate as Date)?.getTime?.();
  if (!startTime) return dates;

  while (steps) {
    dates.push(new Date(startTime + dir * MILLISECONDS_IN_DAY * steps));
    steps--;
  }

  if (dir === 1) {
    dates.reverse();
  }

  return dates;
}
