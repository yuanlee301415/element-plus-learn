<template>
  <button
    ref="_ref"
    :class="cls"
    :disabled="_disabled"
    class="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { buttonProps, buttonEmit } from "./typing";
import { useButton } from "@/components/LeButton/src/useButton";

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmit);
const { _size, _type, _disabled, _ref, handleClick } = useButton(props, emit);

const cls = computed(() => ({
  [`button--${_type.value}`]: _type.value,
  [`button--${_size.value}`]: _size.value,
  [`is-disabled`]: _disabled.value,
  [`is-plain`]: props.plain,
  [`is-round`]: props.round,
}));

defineExpose({
  ref: _ref,
  type: _type,
  size: _size,
  disabled: _disabled,
});
</script>

<style>
@import "./style.css";
</style>
