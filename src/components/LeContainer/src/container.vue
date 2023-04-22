<template>
  <section :class="['le-container', cls]">
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { Component, VNode } from 'vue'

import { computed, ref, useSlots } from 'vue'

import { HORIZONTAL, VERTICAL, HeaderName, FooterName } from './constants'

type Props = {
  direction?: typeof HORIZONTAL | typeof VERTICAL
}

const props = defineProps<Props>()

const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === VERTICAL) return true
  else if (props.direction === HORIZONTAL) return false

  if (!slots?.default) return false

  const vNodes: VNode[] = slots.default()
  return vNodes.some((vNode) => {
    const tag = (vNode.type as Component).name
    return HeaderName === tag || FooterName === tag
  })
})

const cls = ref({
  'is-vertical': isVertical
})
</script>

<style scoped>
@import 'style.css';
</style>
