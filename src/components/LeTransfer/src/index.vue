<!--
// Todo: 如何自动复制属性到子组件

-->
<template>
  <div class="transfer">
    <TransferPanel v-model="leftSelectedKeysModelValue" :items="leftItems" :title="titles[0]" v-bind="$attrs">
      <template #option="{option}">
        <slot :option="option"></slot>
      </template>

      <template v-if="$slots['left-footer']" #footer>
        <slot name="left-footer"/>
      </template>
    </TransferPanel>

    <div class="transfer__buttons">
      <LeButton :class="{'is-with-texts': buttonTexts[0]}" type="primary" class="transfer__button" @click="toLeft">
        <span>&lt;<span>{{ buttonTexts[0] }}</span></span>
      </LeButton>
      <LeButton :class="{'is-with-texts': buttonTexts[1]}" type="primary" class="transfer__button" @click="toRight">
        <span><span>{{ buttonTexts[1] }}</span>&gt;</span>
      </LeButton>
    </div>

    <TransferPanel v-model="rightSelectedKeysModelValue" :items="rightItems" :title="titles[1]" v-bind="$attrs">
      <template #option="{option}">
        <slot :option="option"></slot>
      </template>

      <template v-if="$slots['right-footer']" #footer>
        <slot  name="right-footer"/>
      </template>
    </TransferPanel>
  </div>


</template>

<script setup lang="ts">
import type { TransferKey } from "@/components/LeTransfer/src/typing";
import TransferPanel from "./transfer-panel.vue";
import { transferProps, transferEmit } from "@/components/LeTransfer/src/typing";
import {computed, ref, useSlots} from "vue";
import { useTransfer } from "@/components/LeTransfer/src/useTransfer";

const props = defineProps(transferProps)
console.log('Transfer>props:', props)

const emit = defineEmits(transferEmit)
const { leftItems, rightItems, leftSelectedKeysModelValue, rightSelectedKeysModelValue, toRight, toLeft } = useTransfer(props, emit)

</script>

<style>
@import "style.css";
</style>
