<template>
  <div :class="inputCls" class="input">
    <div :class="wrapperCls" class="input__wrapper">

      <input
          :disabled="props.disabled"
          type="text"
          class="input__inner"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
      >

    </div>
  </div>
</template>

<script setup lang="ts">
import { inputProps, inputEmit } from "./input";
import {useInput} from "@/components/LeInput/src/useInput";
import {computed, reactive, ref} from "vue";

const props = defineProps(inputProps)
const emit = defineEmits(inputEmit)

const { handleInput } = useInput(props, emit)
const inputCls = computed(() => ({
  'is-disabled': props.disabled
}))

const wrapperCls = reactive({
  'is-focus': false
})

function handleFocus() {
  wrapperCls["is-focus"] = true
}
function handleBlur() {
  wrapperCls["is-focus"] = false
}

</script>

<style>
@import './style.css';
</style>
