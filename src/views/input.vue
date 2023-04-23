<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeInput v-model="valA"></LeInput>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Disabled <LeButton @click="disabledA = !disabledA">Toggle</LeButton></dt>
    <dd>
      <LeInput v-model="valA" :disabled="disabledA"></LeInput>
    </dd>
  </dl>

  <dl class="demo">
    <dt>带图标的输入框
    Prefix: <select v-model="prefixIcon">
        <option value="circle-close">circle-close</option>
        <option value="edit">edit</option>
        <option value="male">male</option>
      </select>
      Suffix:
      <select v-model="suffixIcon">
        <option value="circle-close">circle-close</option>
        <option value="edit">edit</option>
        <option value="male">male</option>
      </select>
    </dt>
    <dd>
      <LeInput v-model="valA" :prefix-icon="prefixIcon">
        <template #prefix>aa</template>
      </LeInput>
      <LeInput v-model="valA" :suffix-icon="suffixIcon">
        <template #suffix>bb</template>
      </LeInput>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Clearable <LeButton @click="clearableA = !clearableA">Toggle</LeButton></dt>
    <dd>
      <LeInput v-model="valA" :clearable="clearableA"></LeInput>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";

const valA = ref('')
const disabledA = ref(true)
const clearableA = ref(true)
const prefixIcon = ref('edit')
const suffixIcon = ref('male')

watch(valA, val => {
  console.log('valA:', val)
})
</script>
