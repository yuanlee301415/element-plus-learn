<template>
  <div class="badge">
    <slot />
    <sup v-text="content" :class="cls" class="badge__content is-fixed" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Props {
  type?: "primary" | "success" | "warning" | "danger" | "info";
  value?: string | number;
  isDot?: boolean;
  max?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  type: "danger",
  value: "",
});

const cls = computed(() => ({
  [`badge__content--${props.type}`]: props.type,
  "is-dot": props.isDot,
}));

const content = computed(() => {
  if (props.isDot) return "";

  const max = Number(props.max);
  const value = Number(props.value);

  if (Number.isFinite(max) && Number.isFinite(value)) {
    return value <= max ? value : `${max}+`;
  }

  return props.value;
});

defineExpose({
  content,
});
</script>

<style>
@import "./style.css";
</style>
