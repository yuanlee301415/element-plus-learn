<template>
  <div>
    {{ time }}
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const time = ref(new Date())
const timer = setInterval(() => {
  time.value = new Date()
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})

defineExpose({
  time
})
</script>

<style scoped></style>
