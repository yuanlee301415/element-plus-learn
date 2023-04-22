<template>
  <span :class="cls" :style="sizeStyle" class="avatar">
    <img v-if="src && !hasLoadError" :src="src" :style="fitStyle" :alt="alt" @error="handleError" />
    <slot v-else />
  </span>
</template>

<script setup lang="ts">
import type { ComponentSize } from '@/constants/size'
import { computed, ref, watch } from 'vue'
import { componentSizes } from '@/constants/size'

type Fit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
type Shape = 'circle' | 'square'

type Props = {
  src?: string
  size?: ComponentSize | string
  alt?: string
  fit?: Fit
  shape?: Shape
}

const props = withDefaults(defineProps<Props>(), {
  fit: 'cover',
  shape: 'circle'
})

const cls = computed(() => ({
  [`avatar--${props.shape}`]: !!props.shape,
  [`avatar--${props.size}`]:
    props.size && (componentSizes as unknown as string[]).includes(props.size)
}))

const fitStyle = computed(() => ({
  objectFit: props.fit
}))

const sizeStyle = computed(() => ({
  '--avatar-size':
    props.size && !(componentSizes as unknown as string[]).includes(props.size)
      ? `${props.size}px`
      : void 0
}))

const emit = defineEmits(['error'])

const hasLoadError = ref(false)

watch(
  () => props.src,
  () => {
    hasLoadError.value = false
  }
)

function handleError(e: Event) {
  hasLoadError.value = true
  emit('error', e)
}
</script>

<style>
@import 'style.css';
</style>
