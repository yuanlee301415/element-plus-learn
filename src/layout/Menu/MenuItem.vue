<template>
  <dl
    v-if="item.meta && item.meta.hiddenMenu !== true"
    :class="{ open: open }"
    :style="{ textIndent: depth + 'em' }"
  >
    <template v-if="item.children && item.meta.hiddenChildrenInMenu !== true">
      <dt @click="handleToggleOpen">
        <span>{{ item.meta.title }}</span
        ><i />
      </dt>
      <dd>
        <MenuItem
          v-for="child of item.children"
          :key="child.name"
          :item="child"
          :depth="depth + 1"
          :fullPath="[fullPath, child.path].join('/')"
        />
      </dd>
    </template>
    <template v-else>
      <dt>
        <router-link :to="{ name: item.name }">{{ item.meta.title }}</router-link>
      </dt>
    </template>
  </dl>
</template>

<script lang="ts" setup>
import type { AppRouteRecordRaw } from '@/router/types'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  item: AppRouteRecordRaw
  depth: number
  fullPath?: string
}>()

const route = useRoute()
const open = ref<boolean>()

watch(
  () => route.name,
  () => {
    open.value = initOpen()
  },
  {
    immediate: true
  }
)

function initOpen(): boolean {
  if (!props.item.children || !props.item.children.length) return false

  const routeFullPathList = route.fullPath.split('/')
  const fullPathList = props.fullPath?.split('/') || []
  for (let i = 0; i < fullPathList.length; i++) {
    if (fullPathList[i] !== routeFullPathList[i]) return false
  }
  return true
}

function handleToggleOpen(): void {
  open.value = !open.value
}
</script>

<style scoped lang="less">
@import './MenuItem.less';
</style>
