<template>
  <div class="calendar">
    <div class="calendar__header">
      <slot name="header" :date="date">
        <div class="calendar__title">{{ year }} / {{ month + 1 }}</div>
        <div class="calendar__button-group">
          <LeButtonGroup>
            <LeButton @click="selectedDate('prev-month')"
              >Previous Month</LeButton
            >
            <LeButton @click="selectedDate('today')">Today</LeButton>
            <LeButton @click="selectedDate('next-month')">Next Month</LeButton>
          </LeButtonGroup>
        </div>
      </slot>
    </div>
    <div class="calendar__body">
      <table class="calendar-table" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th v-for="day of DAYS_IN_WEEK" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIdx) of Math.ceil(
              dates.length / DAYS_IN_WEEK.length
            )"
            :key="firstDay.getTime() + rowIdx"
            class="calendar-table__row"
          >
            <CellDate
              v-for="(col, colIdx) of DAYS_IN_WEEK.length"
              :key="lastDay.getTime() + colIdx"
              :cell-date="getCellDate(row, col)"
              :value="date"
              :today="today"
              :first-day="firstDay"
              :last-day="lastDay"
              @choose-date="handleChooseDate"
            >
              <template v-slot="{ date, day, isSelected, type }">
                <slot
                  name="date-cell"
                  :date="date"
                  :day="day"
                  :is-selected="isSelected"
                  :type="type"
                />
              </template>
            </CellDate>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeButtonGroup from "@/components/LeButtonGroup";
import LeButton from "@/components/LeButton";

import { calendarProps, calendarEmit, DAYS_IN_WEEK } from "./typing";
import { useCalendar } from "./useCalendar";
import CellDate from "./CellDate.vue";

const props = defineProps(calendarProps);
const emit = defineEmits(calendarEmit);
const {
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
} = useCalendar(props, emit);

defineExpose({
  selectedDate,
});
</script>

<style>
@import "./style.css";
</style>
