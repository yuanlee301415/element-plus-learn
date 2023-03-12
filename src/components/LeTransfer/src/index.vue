<template>
  <div class="transfer">
    <TransferPanel v-model="leftSelectedKeysModelValue" :items="leftItems" :title="titles[0]" />
    <div class="transfer__buttons">
      <button class="transfer__button" @click="toLeft">&lt;</button>
      <button class="transfer__button" @click="toRight">&gt;</button>
    </div>
    <TransferPanel v-model="rightSelectedKeysModelValue" :items="rightItems" :title="titles[1]" />
  </div>

</template>

<script setup lang="ts">
import type { TransferKey } from "@/components/LeTransfer/src/typing";
import TransferPanel from "./transfer-panel.vue";
import { transferProps, transferEmit } from "@/components/LeTransfer/src/typing";
import {computed, ref} from "vue";
import { useTransfer } from "@/components/LeTransfer/src/useTransfer";

const props = defineProps(transferProps)
console.log('Transfer>props:', props)

const emit = defineEmits(transferEmit)
const { leftItems, rightItems, leftSelectedKeysModelValue, rightSelectedKeysModelValue, toRight, toLeft } = useTransfer(props, emit)

</script>

<style>
@import "style.css";
</style>
