<template>
  <div class="transfer-panel">
    <div class="transfer-panel__header">
      <label class="checkbox">
        <span class="checkbox__input">
          <input type="checkbox" v-model="selectedAll" @change="changeAll($event)" />
        </span>
        <span class="checkbox__label">
          {{ title }}
          <span>{{ keys.length }}/{{ items?.length }}</span>
        </span>
      </label>
    </div>
    <div class="transfer-panel__body">
      <div
        v-if="filterable"
        class="input input--default input--prefix input--suffix transfer-panel__filter"
      >
        <div class="input__wrapper">
          <input
            v-model="query"
            :placeholder="filterPlaceholder"
            class="input__inner"
            type="text"
            autocomplete="off"
            tabindex="0"
          />
        </div>
      </div>
      <div v-show="!isEmpty" :class="[{ 'is-filterable': filterable }, 'transfer-panel__list']">
        <label
          v-for="(item, idx) of filteredItems"
          :key="item.key"
          :class="[{ 'is-disabled': item.disabled }, 'transfer-panel__item']"
        >
          <input
            type="checkbox"
            :disabled="item.disabled"
            :checked="modelValue?.includes(item.key)"
            @change="change(item.key, $event)"
          />
          <span style="padding-left: 6px">
            <slot name="option" :option="{ idx, ...item }">{{ item.label }}</slot>
          </span>
        </label>
      </div>
      <div v-show="isEmpty" class="transfer-panel__empty">No data</div>
    </div>

    <div v-if="$slots.footer" class="transfer-panel__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { panelProps, panelEmit } from './typing'
import { usePanel } from './usePanel'

const props = defineProps(panelProps)
console.log('Panel>props:', props)

const emit = defineEmits(panelEmit)
const { keys, isEmpty, change, selectedAll, changeAll, query, filteredItems } = usePanel(
  props,
  emit
)

defineExpose({
  keys
})
</script>

<style scoped></style>
