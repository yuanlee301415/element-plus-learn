<template>
  <dl>
    <dt>Basic</dt>
    <dd>
      <LeTransfer v-model="value" :data="data" />
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import LeTransfer from "@/components/LeTransfer";

interface Option {
  key: string;
  label: string;
  disabled: boolean;
}

const generateData = () => {
  const data: Option[] = [];
  for (let i = 1; i <= 10; i++) {
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
</script>
