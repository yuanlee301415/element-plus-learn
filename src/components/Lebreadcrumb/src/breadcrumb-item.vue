<template>
  <span class="breadcrumb__item">
    <span
      :class="{ 'is-link': !!props.to }"
      class="breadcrumb__inner"
      @click="handleClick"
    >
      <slot />
    </span>
    <span class="breadcrumb__separator">
      {{ breadcrumbContext.separator }}
    </span>
  </span>
</template>

<script setup lang="ts">
import type { Router } from "vue-router";
import { getCurrentInstance, inject } from "vue";
import { breadcrumbContextKey } from "@/tokens/breadcrumb";
import { breadcrumbItemProps } from "./breadcrumb-item";

const breadcrumbContext = inject(breadcrumbContextKey, undefined)!;
const props = defineProps(breadcrumbItemProps);
const instance = getCurrentInstance()!;
const router = instance.appContext.config.globalProperties.$router as Router;

function handleClick() {
  if (!props.to || !router) return;
  props?.replace ? router.replace(props.to) : router.push(props.to);
}
</script>

<style scoped></style>
