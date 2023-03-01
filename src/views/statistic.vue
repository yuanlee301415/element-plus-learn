<template>
  <h2>Basic</h2>
  <LeStatistic
    :value="value"
    :precision="2"
    title="价格："
    prefix="￥"
    suffix="圆"
    :value-style="{ color: 'red' }"
  />

  <LeCountdown :value="value2" @change="change" @finish="finish">
    <template #title><h1>倒计时</h1></template>
    <template #prefix>剩余：</template>
    <template #suffix>秒</template>
  </LeCountdown>

  <LeButton @click="reset(60)">Reset(+1 min)</LeButton>
  <LeButton @click="reset(3600)">Reset(+1 hour)</LeButton>
  <LeButton @click="reset(3600 * 24)">Reset(+1 day)</LeButton>
  <LeButton @click="reset2">Reset(+1 month)</LeButton>
  <LeButton @click="reset3">Reset(+1 year)</LeButton>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import LeStatistic from "@/components/LeStatistic";
import LeCountdown from "@/components/LeCountdown";

const value = ref(10);

const date = new Date();

const value2 = ref(
  new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes() + 1,
    0
  ).getTime()
);

function reset(min: number) {
  value2.value = Date.now() + 1000 * min;
}

function reset2() {
  value2.value = new Date().setMonth(new Date().getMonth() + 1);
}

function reset3() {
  value2.value = new Date().setFullYear(new Date().getFullYear() + 1);
}

function change(time: number) {
  console.log("change>time:", time);
}

function finish() {
  console.log("finish");
}
</script>
