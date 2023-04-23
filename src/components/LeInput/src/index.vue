<template>
  <div :class="inputCls" class="input" @mouseenter="handleEnter" @mouseleave="handleLeave">
    <div :class="wrapperCls" class="input__wrapper">

      <span v-if="props.prefixIcon" class="input__prefix">
        <span class="input__prefix-inner">
          <slot name="prefix"/>
          <Icon :name="props.prefixIcon" class="input__icon"/>
        </span>
      </span>

      <input
          ref="inputRef"
          type="text"
          class="input__inner"
          :disabled="props.disabled"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
      >
      <span v-if="props.suffixIcon || props.clearable" class="input__suffix">
        <span class="input__suffix-inner">
          <slot name="suffix"/>
          <Icon v-if="props.suffixIcon" :name="props.suffixIcon" class="input__icon"/>
          <Icon v-if="props.clearable" v-show="clearIconVisible" name="circle-close" class="input__icon input__clear" @click="handleClear" @mousedown.prevent/>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inputEmit, inputProps} from "./input";
import {computed, nextTick, reactive, ref, watch} from "vue";
import {CHANGE_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT} from "@/constants/event";

const props = defineProps(inputProps)
const emit = defineEmits(inputEmit)

const inputRef = ref<HTMLInputElement>()
const inputCls = computed(() => ({
  'is-disabled': props.disabled
}))
const wrapperCls = reactive({
  'is-focus': false
})
const clearIconVisible = ref(false)
const nativeInputValue = computed(() => props.modelValue ? String(props.modelValue) : '')

async function handleInput (event: Event){
  const { value }= event.target as HTMLInputElement
  clearIconVisible.value = true
  emit(UPDATE_MODEL_EVENT, value)
  emit(INPUT_EVENT, value)
  await nextTick()
  setNativeInputValue()
}
function handleChange(event: Event) {
  const { value } = event.target as HTMLInputElement
  emit(CHANGE_EVENT, value)
}
function setNativeInputValue() {
  inputRef.value!.value = nativeInputValue.value
}
function handleFocus() {
  wrapperCls["is-focus"] = true
}
function handleBlur() {
  clearIconVisible.value = false
  wrapperCls["is-focus"] = false
}
function handleEnter() {
  if (!props.modelValue) return
  clearIconVisible.value = true
}
function handleLeave() {
  clearIconVisible.value = false
}
function handleClear() {
  clearIconVisible.value = false
  emit(UPDATE_MODEL_EVENT, '')
  emit(INPUT_EVENT, '')
  emit(CHANGE_EVENT, '')
}

watch(nativeInputValue, () => setNativeInputValue())
</script>

<style>
@import './style.css';
</style>
