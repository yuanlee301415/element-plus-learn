<template>
  <i :style="style" class="icon">
    <svg>
      <use :href="'#icon-' + name" />
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Props {
  name: string;
  color?: string;
  size?: string | number;
}

const props = defineProps<Props>();
const style = computed(() => ({
  "--color": props.color,
  "font-size": props.size && `${props.size}px`,
}));
</script>

<style>
@import "style.css";
</style>
