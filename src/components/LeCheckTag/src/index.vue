<template>
  <span :class="{ 'is-checked': props.checked }" class="check-tag" @click="handleClick"
    ><slot
  /></span>
</template>

<script setup lang="ts">
import { CHANGE_EVENT } from '@/constants/event'
import { checkTagProps, checkTagEmit } from './checkTag'

const props = defineProps(checkTagProps)
const emit = defineEmits(checkTagEmit)

function handleClick() {
  const checked = !props.checked
  emit('update:checked', checked)
  emit(CHANGE_EVENT, checked)
}
</script>

<style>
@import './style.css';
</style>
