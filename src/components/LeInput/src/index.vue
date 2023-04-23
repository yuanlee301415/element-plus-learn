<template>
  <div class="input">
    <div class="input__wrapper">

      <input type="text" class="input__inner" @input="handleInput">

    </div>
  </div>
</template>

<script setup lang="ts">
import { inputProps, inputEmit } from "./input";
import {useInput} from "@/components/LeInput/src/useInput";
const props = defineProps(inputProps)
const emit = defineEmits(inputEmit)

const { handleInput } = useInput(props, emit)
</script>

<style>
@import './style.css';
</style>
