import type { SetupContext } from "vue";
import type { CalendarCellDateProps, CalendarCellDateEmit } from "./typing";

import { formatDate } from "@/utils";
import { computed } from "vue";
import { CALENDAR_CHOOSE_EVENT } from "./typing";

const formatDateType = formatDate.FORMAT_DATE_TYPE__ONLY_DATE;

export const useCellDate = (
  props: CalendarCellDateProps,
  emit: SetupContext<CalendarCellDateEmit>["emit"]
) => {
  const valueStr = computed(() => formatDate(props.value!, formatDateType));
  const isToday = computed(
    () =>
      formatDate(props.cellDate!, formatDateType) ===
      formatDate(props.today!, formatDateType)
  );
  const isCurrent = computed(
    () =>
      props.cellDate!.getTime() >= props.firstDay!.getTime() &&
      props.cellDate!.getTime() <= props.lastDay!.getTime()
  );
  const isPrev = computed(
    () =>
      !isCurrent.value && props.cellDate!.getTime() < props.firstDay!.getTime()
  );
  const isSelected = computed(
    () => formatDate(props.cellDate!, formatDateType) === valueStr.value
  );
  const type = computed(() =>
    isCurrent.value
      ? "current-month"
      : isPrev.value
      ? "prev-month"
      : "next-month"
  );
  function handleClickDate() {
    emit(CALENDAR_CHOOSE_EVENT, props.cellDate!);
  }

  return {
    cellDate: props.cellDate!,
    isToday,
    isCurrent,
    isPrev,
    isSelected,
    type,
    handleClickDate,
  };
};
