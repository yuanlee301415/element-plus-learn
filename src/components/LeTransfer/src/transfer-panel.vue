<template>
  <div class="transfer-panel">
    <div class="transfer-panel__header">
      <label class="checkbox">
        <span class="checkbox__input">
          <input type="checkbox"/>
        </span>
        <span class="checkbox__label">
          List 1
          <span>0/15</span>
        </span>
      </label>
    </div>
    <div class="transfer-panel__body">
      <label v-for="item of items" :key="item.key" class="transfer-panel__item">
        <input type="checkbox" @change="change(item.key, $event)"/>
        {{ item.label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TransferKey } from "@/components/LeTransfer/src/typing";
import { UPDATE_MODEL_EVENT } from "@/constants/event";
import { panelProps, panelEmit } from "@/components/LeTransfer/src/typing";
import { usePanel } from "@/components/LeTransfer/src/usePanel";

const props = defineProps(panelProps)
const emit = defineEmits(panelEmit)
const {keys, change} = usePanel(props, emit)

</script>

<style scoped></style>
