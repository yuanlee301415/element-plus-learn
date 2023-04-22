<template>
  <td
    :class="{
      'is-today': isToday,
      'is-selected': isSelected,
      prev: isPrev,
      next: !isCurrent && !isPrev
    }"
    @click="handleClickDate"
  >
    <div class="calendar-day">
      <slot
        :date="cellDate"
        :day="formatDate(cellDate, formatDate.FORMAT_DATE_TYPE__ONLY_DATE)"
        :type="type"
        :is-selected="isSelected"
        ><span>{{ cellDate.getDate() }}</span></slot
      >
    </div>
  </td>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils'

import { calendarCellDateProps, calendarCellDateEmit } from './typing'
import { useCellDate } from './useCellDate'

const props = defineProps(calendarCellDateProps)
const emit = defineEmits(calendarCellDateEmit)
const { cellDate, isToday, isCurrent, isPrev, isSelected, type, handleClickDate } = useCellDate(
  props,
  emit
)
</script>

<style scoped></style>
