<template>
  <LeStatistic :value="displayValue" :formatter="countdown">
    <template v-for="(_, name) of $slots" #[name]>
      <slot :name="name" />
    </template>
  </LeStatistic>
</template>

<script setup lang="ts">
import LeStatistic from "@/components/LeStatistic";
import {
  countdownProps,
  countdownEmit,
} from "@/components/LeCountdown/src/typing";
import { useCountdown } from "@/components/LeCountdown/src/useCountdown";
import { countdown } from "@/utils";

const props = defineProps(countdownProps);
const emit = defineEmits(countdownEmit);
const { displayValue } = useCountdown(props, emit);
</script>

<style scoped></style>
