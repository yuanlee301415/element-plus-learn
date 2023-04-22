<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeButton @click="handleBasicSetActiveNames">setActiveNames(['news', 'about'])</LeButton>
      <LeCollapse ref="basieRef" v-model="basicNames" @change="handleChange">
        <LeCollapseItem title="Home" name="home">
          <template #title>自定义 Title&nbsp;<Icon name="star" /></template>
          <ol>
            <li>Home content.</li>
            <li>Home content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="News" name="news">
          <ol>
            <li>News content.</li>
            <li>News content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="About" name="about">
          <ol>
            <li>About content.</li>
            <li>About content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="Disabled" name="disabled" disabled>
          <ol>
            <li>Disabled content.</li>
            <li>Disabled content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>

  <dl class="demo">
    <dt>手风琴模式</dt>
    <dd>
      <LeButton @click="handleAccordionSetActiveNames">setActiveNames(['news', 'home'])</LeButton>
      <LeCollapse ref="accordionRef" v-model="accordionName" accordion @change="handleChange">
        <LeCollapseItem title="Home" name="home">
          <ol>
            <li>Home content.</li>
            <li>Home content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="News" name="news">
          <ol>
            <li>News content.</li>
            <li>News content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="About" name="about">
          <ol>
            <li>About content.</li>
            <li>About content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="Disabled" name="disabled" disabled>
          <ol>
            <li>Disabled content.</li>
            <li>Disabled content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Dyna</dt>
    <dd>
      <LeCollapse v-model="dynaNames" @change="handleChange">
        <LeCollapseItem
          v-for="item of items"
          :key="item.name"
          :title="item.title"
          :name="item.name"
          :disabled="item.disabled"
        >
          <ol>
            <li>{{ item.title }} content.</li>
            <li>{{ item.title }} content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import type { CollapseInstance } from '@/components/LeCollapse'
import { ref } from 'vue'
import { LeCollapse, LeCollapseItem } from '@/components/LeCollapse'

const basicNames = ref(['home'])

const accordionName = ref('disabled')

function handleChange() {
  console.log('handleChange>args:', arguments)
}

const items = ref([
  { title: 'Home', name: 'home' },
  { title: 'News', name: 'news' },
  { title: 'About', name: 'about' },
  { title: 'Disabled', name: 'disabled', disabled: true }
])

/**
 * 动态更新
 */
const dynaNames = ref(['home'])
setTimeout(() => {
  dynaNames.value = ['about']
  setTimeout(() => {
    dynaNames.value[1] = 'news'
  }, 2000)
}, 2000)

/**
 * 调用组件暴露的方法
 */
const basieRef = ref<CollapseInstance>()
function handleBasicSetActiveNames() {
  basieRef.value?.setActiveNames(['news', 'about'])
}

const accordionRef = ref<CollapseInstance>()
function handleAccordionSetActiveNames() {
  accordionRef.value?.setActiveNames(['home', 'news'])
}
</script>
