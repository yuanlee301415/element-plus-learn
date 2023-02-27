<template>
  <dl>
    <dt>Basic</dt>
    <dd>
      <LeCalendar v-model="date" ref="calender">
        <template #header="{ date }">
          <span>{{ date.getFullYear() }}年 {{ date.getMonth() + 1 }}月</span>
          <LeButtonGroup>
            <LeButton @click="selectedDate('prev-year')"
              >Previous Year</LeButton
            >
            <LeButton @click="selectedDate('prev-month')"
              >Previous Month</LeButton
            >
            <LeButton @click="selectedDate('today')">Today</LeButton>
            <LeButton @click="selectedDate('next-month')">Next Month</LeButton>
            <LeButton @click="selectedDate('next-year')">Next Year</LeButton>
          </LeButtonGroup>
        </template>
        <template #date-cell="{ date, day, type, isSelected }">
          {{ date.getMonth() + 1 }}-{{ date.getDate() }}
          {{ isSelected ? "✔️" : "" }}
          <p>{{ day }}</p>
          <p>{{ type }}</p>
        </template>
      </LeCalendar>
    </dd>
  </dl>
  <pre>Date: {{ date }}</pre>
</template>

<script lang="ts" setup>
import type { CalendarDateType } from "@/components/LeCalendar";

import { ref } from "vue";
import LeButtonGroup from "@/components/LeButtonGroup";
import LeButton from "@/components/LeButton";
import LeCalendar from "@/components/LeCalendar";

const date = ref(new Date(2023, 1, 1));
const calender = ref<InstanceType<typeof LeCalendar>>();

function selectedDate(type: CalendarDateType) {
  calender.value!.selectedDate(type);
}
</script>
