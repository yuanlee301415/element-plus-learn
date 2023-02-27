<template>
  <aside class="le-aside" :style="style">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

import { computed } from "vue";

const props = defineProps({
  width: {
    type: String,
  },
});

const style = computed<CSSProperties>(() =>
  props.width ? `--aside-width: ${props.width}` : {}
);
</script>
