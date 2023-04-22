<template>
  <div class="tab-pane" v-show="tabs?.activeName.value === props.name">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { tabsContextKey } from '@/tokens/tabs'
import { tabPaneProps } from './typing'

const props = defineProps(tabPaneProps)
const tabs = inject(tabsContextKey)

tabs?.regTab({ name: props.name, label: props.label })
</script>

<style scoped></style>
