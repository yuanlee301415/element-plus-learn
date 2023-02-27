<template>
  <header class="le-header" :style="style">
    <slot />
  </header>
</template>

<script lang="ts">
import { HeaderName } from "./constants";

export default {
  name: HeaderName,
};
</script>

<script setup lang="ts">
import type { CSSProperties } from "vue";

import { computed } from "vue";

const props = defineProps({
  height: {
    type: String,
  },
});

const style = computed<CSSProperties>(() =>
  props.height ? `--header-height:${props.height}` : {}
);
</script>
