<template>
  <dl>
    <dt>Basic</dt>
    <dd>
      <LeButton @click="addMonth">setDate: Month + 1</LeButton>
      <LeButton @click="addYear">setDate: Year + 1</LeButton>
      <LeCalendar v-model="date" ref="calender">
        <template #header="{ date }">
          <span>{{ date.getFullYear() }}年 {{ date.getMonth() + 1 }}月</span>
          <LeButtonGroup>
            <LeButton @click="selectedDate('prev-year')">Previous Year</LeButton>
            <LeButton @click="selectedDate('prev-month')">Previous Month</LeButton>
            <LeButton @click="selectedDate('today')">Today</LeButton>
            <LeButton @click="selectedDate('next-month')">Next Month</LeButton>
            <LeButton @click="selectedDate('next-year')">Next Year</LeButton>
          </LeButtonGroup>
        </template>
        <template #date-cell="{ date, day, type, isSelected }">
          {{ date.getMonth() + 1 }}-{{ date.getDate() }}
          {{ isSelected ? '✔️' : '' }}
          <p>{{ day }}</p>
          <p>{{ type }}</p>
        </template>
      </LeCalendar>
    </dd>
  </dl>
  <pre>Date: {{ date }}</pre>
</template>

<script lang="ts" setup>
import type { CalendarDateType } from '@/components/LeCalendar'

import { ref } from 'vue'
import LeCalendar from '@/components/LeCalendar'

const date = ref(new Date(2023, 2, 1))

const calender = ref<InstanceType<typeof LeCalendar>>()

function selectedDate(type: CalendarDateType) {
  calender.value!.selectedDate(type)
}

function addMonth() {
  date.value = new Date(date.value.setMonth(date.value.getMonth() + 1))
}

function addYear() {
  date.value = new Date(date.value.setFullYear(date.value.getFullYear() + 1))
}
</script>
