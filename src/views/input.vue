<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeInput v-model="valA"></LeInput>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";
const valA = ref('')
watch(valA, val => {
  console.log('valA:', val)
})
</script>
