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
      >
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
import type { TransferDataItem } from "@/components/LeTransfer/src/typing";
import {ref, watch} from "vue";
import LeTransfer from "@/components/LeTransfer";
import LeButton from "@/components/LeButton/src/index.vue";

const generateData = () => {
  const data: TransferDataItem[] = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      key: `Option-${i}`,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref<TransferDataItem[]>(generateData());
const value = ref([]);

watch(value, (val) => {
  console.log('Transfer>modelValue:', val)
})

function filterMethod(query: string, item: TransferDataItem) {
  return String(item.label).toLowerCase().includes(query.toLowerCase())
}
</script>
