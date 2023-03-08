<template>
  <div class="transfer-panel">
    <div class="transfer-panel__header">
      <label v-for="item of items" class="checkbox">
        <span class="checkbox__input">
          <input type="checkbox" @change="handleChange(item.key, $event)"/>
        </span>
        <span class="checkbox__label">
          List 1
          <span>0/15</span>
        </span>
      </label>
    </div>
    <div class="transfer-panel__body">
      <label class="transfer-panel__item">
        <input type="checkbox" />
        label
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UPDATE_MODEL_EVENT } from "@/constants/event";
import { usePanel } from "@/components/LeTransfer/src/usePanel";

const props = defineProps({
  modelValue: Array,
  items: Array
})
const emit = defineEmits()
const {keys, setKeys} = usePanel(props, emit)

function handleChange(key, event) {
  setKeys(key, event.target.checked)
  emit(UPDATE_MODEL_EVENT, keys)
}
</script>

<style scoped></style>
