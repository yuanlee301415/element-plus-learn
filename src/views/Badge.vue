<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeBadge ref="contentRef" value="5">
        <LeButton>Comments</LeButton>
      </LeBadge>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Type</dt>
    <dd>
      <LeBadge value="10" type="primary">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="10" type="success">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="10" type="warning">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="10" type="info">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="10" type="danger">
        <LeButton>Comments</LeButton>
      </LeBadge>
    </dd>
  </dl>

  <dl class="demo">
    <dt>自定义显示内容</dt>
    <dd>
      <LeBadge value="New">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge ref="contentRef2" value="Hot">
        <LeButton>Comments</LeButton>
      </LeBadge>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Max</dt>
    <dd>
      <LeBadge value="200" max="99">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="10" max="99">
        <LeButton>Comments</LeButton>
      </LeBadge>

      <LeBadge value="New" max="99">
        <LeButton>Comments</LeButton>
      </LeBadge>
    </dd>
  </dl>

  <dl class="demo">
    <dt>小红点</dt>
    <dd>
      <LeBadge value="100" max="99" is-dot> News </LeBadge>

      <LeBadge ref="contentRef3" value="new" max="99" is-dot>
        <LeButton>Comments</LeButton>
      </LeBadge>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import type { BadgeInstance } from '@/components/LeBadge'

import { onMounted, ref } from 'vue'
import LeBadge from '@/components/LeBadge'

const contentRef = ref<BadgeInstance>()
const contentRef2 = ref<BadgeInstance>()
const contentRef3 = ref<BadgeInstance>()

onMounted(() => {
  console.log('ref>content:', contentRef.value?.content)
  console.log('ref>content 2:', contentRef2.value?.content)
  console.log('ref>content 3:', contentRef3.value?.content)
})
</script>
