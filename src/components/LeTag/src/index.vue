<template>
  <span
    :class="cls"
    :style="{ backgroundColor: props.color }"
    class="tag"
    @click="handleClick"
  >
    <span class="tag__content">
      <slot />
    </span>
    <i
      v-if="props.closable"
      class="icon tag__close"
      @click="handleRemove($event)"
      ><Icon name="close"
    /></i>
  </span>
</template>

<script lang="ts" setup>
import { tagProps, tagEmit } from "./tag";
import { computed } from "vue";

const props = defineProps(tagProps);
const emit = defineEmits(tagEmit);

const cls = computed(() => ({
  "is-closable": props.closable,
  [`tag--${props.type}`]: props.type,
  [`tag--${props.effect}`]: props.effect,
  [`tag--${props.size}`]: props.size,
  [`is-round`]: props.round,
  [`is-hit`]: props.hit,
}));

function handleRemove(event: MouseEvent) {
  emit("close", event);
}

function handleClick(event: MouseEvent) {
  emit("click", event);
}
</script>

<style>
@import "./style.css";
</style>
