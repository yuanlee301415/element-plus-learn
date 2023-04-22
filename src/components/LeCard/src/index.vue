<template>
  <div :class="cls" class="card">
    <div v-if="$slots.header || header" class="card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :style="bodyStyle" class="card__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'

import { computed } from 'vue'

export interface Props {
  header?: string
  bodyStyle?: CSSProperties
  shadow?: 'always' | 'never' | 'hover'
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'always'
})

const cls = computed(() => ({
  [`is-always-shadow`]: props.shadow === 'always',
  [`is-hover-shadow`]: props.shadow === 'hover'
}))
</script>

<style>
@import './style.css';
</style>
