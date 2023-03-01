<template>
  <div class="statistic">
    <div v-if="$slots.title || title" class="statistic__head">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="statistic__content">
      <span v-if="$slots.prefix || prefix" class="statistic__prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <span :style="valueStyle" class="statistic__number">{{
        displayValue
      }}</span>
      <span v-if="$slots.suffix || suffix" class="statistic__suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statisticProps } from "@/components/LeStatistic/src/typing";
import { useStatistic } from "@/components/LeStatistic/src/useStatistic";

const props = defineProps(statisticProps);
const { displayValue } = useStatistic(props);

defineExpose({
  displayValue,
});
</script>

<style>
@import "style.css";
</style>
