<template>
  <button :class="cls" class="button" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonType, ButtonSize } from "@/components/LeButton/button";

import { computed, inject, defineEmits } from "vue";

import { buttonGroupContextKey } from "@/tokens/button";

export interface Props {
  /*按钮主题颜色*/
  type?: ButtonType;

  /*按钮尺寸*/
  size?: ButtonSize;

  /*是否为朴素按钮*/
  plain?: boolean;

  /*是否为圆角*/
  round?: boolean;

  /*是否禁用*/
  disabled?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["click"]);

const buttonGroupCtx: Props | void = inject(buttonGroupContextKey);

const _type = computed(() => props.type || buttonGroupCtx?.type);

const _size = computed(() => props.size || buttonGroupCtx?.size);

const cls = computed(() => ({
  [`button--${_type.value}`]: _type.value,
  [`button--${_size.value}`]: _size.value,
  [`is-plain`]: props.plain,
  [`is-round`]: props.round,
  [`is-disabled`]: props.disabled,
}));

const handleClick = (e: Event) => emit("click", e);
</script>

<style>
@import "style.css";
</style>
