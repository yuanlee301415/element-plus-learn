<template>
  <div>
    <TimeExpose ref="timeRef" />
    <button @click="getTime">实时获取子组件暴露的数据</button>
  </div>
</template>

<script setup lang="ts">
import TimeExpose from "@/views/test/TimeExpose.vue";
import { ref } from "vue";

const timeRef = ref();

function getTime() {
  console.log(timeRef.value.time);
}
</script>

<style scoped></style>
