<template>
  <button :class="cls" :disabled="disabled" class="button" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonType, ButtonSize, ButtonProps } from "./typing";

import { computed, inject, defineEmits } from "vue";
import { buttonGroupContextKey } from "@/tokens/button";
import { buttonProps, buttonEmit } from "./typing";

import {useButton} from "@/components/LeButton/src/useButton";


const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmit);
const {_size, _type, handleClick } = useButton(props, emit)

const cls = computed(() => ({
  [`button--${_type.value}`]: _type.value,
  [`button--${_size.value}`]: _size.value,
  [`is-plain`]: props.plain,
  [`is-round`]: props.round,
  [`is-disabled`]: props.disabled,
}));


defineExpose({
  ref: undefined,
  type: _type,
  size: _size
})
</script>

<style>
@import "./style.css";
</style>
