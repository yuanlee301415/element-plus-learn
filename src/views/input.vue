<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeInput v-model="valA"></LeInput>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Disabled</dt>
    <dd><LeButton @click="disabledA = !disabledA">Toggle</LeButton></dd>
    <dd>
      <LeInput v-model="valA" :disabled="disabledA"></LeInput>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";

const valA = ref('')
const disabledA = ref(true)
watch(valA, val => {
  console.log('valA:', val)
})
</script>
