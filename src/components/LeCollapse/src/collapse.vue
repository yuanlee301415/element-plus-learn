<template>
  <div class="collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { collapseProps, collapseEmits } from "./typing";
import { useCollapse } from "./use-collapse";

const props = defineProps(collapseProps);

const emit = defineEmits(collapseEmits);

const { activeNames, setActiveNames } = useCollapse(props, emit);

defineExpose({
  activeNames,
  setActiveNames,
});
</script>

<style>
@import "style.css";
</style>
