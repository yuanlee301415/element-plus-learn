<template>
  <i :style="style" class="icon">
    <svg>
      <use :href="'#icon-' + name" />
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { iconProps } from './typing'

const props = defineProps(iconProps)
const style = computed(() => ({
  '--color': props.color,
  'font-size': props.size && `${props.size}px`
}))
</script>

<style>
@import 'style.css';
</style>
