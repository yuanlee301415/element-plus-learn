<template>
  <div class="transfer-panel">
    <div class="transfer-panel__header">
      <label class="checkbox">
        <span class="checkbox__input">
          <input type="checkbox" :checked="selectedAll" @change="changeAll($event)"/>
        </span>
        <span class="checkbox__label">
          {{ title }}
          <span>{{ keys.length }}/{{ items.length }}</span>
        </span>
      </label>
    </div>
    <div class="transfer-panel__body">
      <div v-show="!isEmpty" class="transfer-panel__list">
        <label v-for="item of items" :key="item.key" class="transfer-panel__item">
          <input type="checkbox" :checked="keys?.includes(item.key)" @change="change(item.key, $event)"/>
          {{ item.label }}
        </label>
      </div>
      <div v-show="isEmpty" class="transfer-panel__empty">No data</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { TransferKey } from "@/components/LeTransfer/src/typing";
import { UPDATE_MODEL_EVENT } from "@/constants/event";
import { panelProps, panelEmit } from "@/components/LeTransfer/src/typing";
import { usePanel } from "@/components/LeTransfer/src/usePanel";

const props = defineProps(panelProps)
console.log('Panel>props:', props)

const emit = defineEmits(panelEmit)
const {keys, isEmpty, change, selectedAll, changeAll} = usePanel(props, emit)

</script>

<style scoped></style>
