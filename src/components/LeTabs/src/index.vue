<template>
  <div :class="[tabTypeCls, tabPositionCls]" class="tabs">
    <div :class="positionCls" class="tabs__header">
      <div :class="positionCls" class="tabs__nav-wrap">
        <div class="tabs__nav-scroll">
          <div :class="positionCls" class="tabs__nav">
            <div
              v-for="tab of tabs"
              :key="tab.name"
              :class="{ 'is-active': activeName === tab.name }"
              @click="handleTab(tab.name, $event)"
              class="tabs__item"
            >
              {{ tab.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tab, TabName } from './typing'
import { tabsEmit, tabsProps } from './typing'

import { computed, provide, reactive, ref } from 'vue'
import { tabsContextKey } from '@/tokens/tabs'
import { UPDATE_MODEL_EVENT } from '@/constants/event'

const props = defineProps(tabsProps)
const emit = defineEmits(tabsEmit)
const tabs = reactive<Tab[]>([])
const activeName = ref<TabName>(props.modelValue)
const tabTypeCls = computed(() => ({
  [`tabs--${props.type}`]: props.type
}))
const tabPositionCls = computed(() => ({
  [`tabs--${props.tabPosition}`]: props.tabPosition
}))
const positionCls = computed(() => ({
  [`is-${props.tabPosition}`]: props.tabPosition
}))

provide(tabsContextKey, {
  activeName,
  regTab(tab: Tab) {
    tabs.push(tab)
  }
})

function handleTab(tabName: TabName, event: Event) {
  activeName.value = tabName
  emit(UPDATE_MODEL_EVENT, activeName.value)
  emit('tab-click', tabs.find((_) => _.name === activeName.value)!, event)
}
</script>

<style>
@import './style.css';
.tabs__item {
  border-bottom: 2px solid transparent;
}
.tabs__item.is-active {
  border-bottom: 2px solid #409eff;
}
</style>
