<template>
  <span :class="cls" class="avatar">
    <img
        v-if="src && !hasLoadError"
        :src="src"
        :style="style"
        @error="handleError"
    >
    <slot v-else />
  </span>
</template>

<script setup lang="ts">
import type { ComponentSize } from "@/constants/size";
import {computed, ref} from "vue";

type Fit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export type Shape = 'circle' | 'square'

type Props = {
  src?: string
  size?: ComponentSize,
  alt?: string
  fit?: Fit,
  shape?: Shape
};

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  fit: 'cover',
  shape: 'circle'
})

const cls = computed(() => ({
  [`avatar--${props.shape}`]: !!props.shape,
  [`avatar--${props.size}`]: !!props.size
}))

const style = computed(() => ({
  objectFit: props.fit
}))

const emit = defineEmits(['error'])

const hasLoadError = ref(false)

function handleError(e: Event) {
  hasLoadError.value = true
  emit('error', e)
}
</script>

<style>
@import "style.css";
</style>
