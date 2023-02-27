<template>
  <footer class="le-footer" :style="style">
    <slot />
  </footer>
</template>

<script lang="ts">
import { FooterName } from "./constants";

export default {
  name: FooterName,
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
  props.height ? `--footer-height:${props.height}` : {}
);
</script>
