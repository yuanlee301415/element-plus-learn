<template>
  <div class="breadcrumb">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { breadcrumbContextKey } from '@/tokens/breadcrumb'
import { breadcrumbProps } from './breadcrumb'
import { provide } from 'vue'
const props = defineProps(breadcrumbProps)

provide(breadcrumbContextKey, props)
</script>

<style>
@import './style.css';
</style>
