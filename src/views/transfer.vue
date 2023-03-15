<template>
  <dl>
    <dt>Basic</dt>
    <dd>
      <LeTransfer
        v-model="value"
        :data="data"
        :titles="['Source', 'Target']"
        :button-texts="['ToLeft', 'ToRight']"
        :filter-method="filterMethod"
        filter-placeholder="Type keyword"
        :left-default-checked="leftChecked"
        :right-default-checked="rightChecked"
        filterable
        @change="handleChange"
      >
        <template #default="{ option }">
          {{ option.key }}-{{ option.label }}
        </template>

        <template #left-footer>
          <LeButton size="small">Left Option</LeButton>
        </template>

        <template #right-footer>
          <LeButton size="small">Right Option</LeButton>
        </template>
      </LeTransfer>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import type {
  TransferDataItem,
  TransferKey,
} from "@/components/LeTransfer/src/typing";

import { ref, watch } from "vue";
import LeTransfer, { Direction } from "@/components/LeTransfer";

const generateData = () => {
  const data: TransferDataItem[] = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: `option-${i}`,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref<TransferDataItem[]>(generateData());
const value = ref([
  data.value[0].key,
  data.value[1].key,
  data.value[2].key,
  data.value[3].key,
]);

const leftChecked = ref([data.value[4].key, data.value[7].key]);
const rightChecked = ref([value.value[2], value.value[3]]);

watch(value, (val) => {
  console.log("Transfer>modelValue:", val);
});

function filterMethod(query: string, item: TransferDataItem) {
  return String(item.label).toLowerCase().includes(query.toLowerCase());
}

function handleChange(
  currentKeys: TransferKey[],
  dir: Direction,
  targetKeys: TransferKey[]
) {
  console.log("handleChange:", { currentKeys, dir, targetKeys });
}
</script>
