<template>
  <div class="button-group">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import type { ButtonType, ButtonSize } from "@/components/LeButton/button";

import { provide, reactive, toRef } from "vue";

import { buttonGroupContextKey } from "@/components/tokens/button";

export interface Props {
  type?: ButtonType
  size?: ButtonSize
}

const props = defineProps<Props>()
// console.log('group props:', props)

provide(buttonGroupContextKey, reactive({
  type: toRef(props, 'type'),
  size: toRef(props, 'size')
}))

</script>
