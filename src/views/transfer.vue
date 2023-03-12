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
      />
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import type { TransferDataItem } from "@/components/LeTransfer/src/typing";
import {ref, watch} from "vue";
import LeTransfer from "@/components/LeTransfer";

interface Option {
  key: string;
  label: string;
  disabled: boolean;
}

const generateData = () => {
  const data: Option[] = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      key: `Option-${i}`,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref<Option[]>(generateData());
const value = ref([]);

watch(value, (val) => {
  console.log('Transfer>modelValue:', val)
})

function filterMethod(query: string, item: TransferDataItem) {
  console.log('filterMethod:', { query, item  })
  return String(item.label).toLowerCase().includes(query.toLowerCase())
}
</script>
