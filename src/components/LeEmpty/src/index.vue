<template>
  <div class="empty">
    <div :style="`width: ${props.imageSize}px`" class="empty__image">
      <img v-if="props.image" :src="props.image" />
      <slot v-else name="image">
        <img :src="emptyImg" alt="" />
      </slot>
    </div>
    <div class="empty__description">
      <p>
        <slot name="description">{{ props.description }}</slot>
      </p>
    </div>
    <div class="empty__bottom">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { emptyProps } from "./empty";
import emptyImg from "./empty.png";

const props = defineProps(emptyProps);
</script>

<style>
@import "./style.css";
</style>
