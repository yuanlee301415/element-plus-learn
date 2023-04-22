<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeTabs v-model="activeName" @tab-click="handleClick">
        <LeTabPane label="User" name="first">User Content.</LeTabPane>
        <LeTabPane label="Config" name="second">Config Content.</LeTabPane>
        <LeTabPane label="Role" name="third">Role Content.</LeTabPane>
        <LeTabPane label="Task" name="fourth">Task Content.</LeTabPane>
      </LeTabs>
    </dd>
  </dl>

  <dl class="demo">
    <dt>卡片风格</dt>
    <dd>
      <LeTabs v-model="activeName" type="card" @tab-click="handleClick">
        <LeTabPane label="User" name="first">User Content.</LeTabPane>
        <LeTabPane label="Config" name="second">Config Content.</LeTabPane>
        <LeTabPane label="Role" name="third">Role Content.</LeTabPane>
        <LeTabPane label="Task" name="fourth">Task Content.</LeTabPane>
      </LeTabs>
      <LeTabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <LeTabPane label="User" name="first">User Content.</LeTabPane>
        <LeTabPane label="Config" name="second">Config Content.</LeTabPane>
        <LeTabPane label="Role" name="third">Role Content.</LeTabPane>
        <LeTabPane label="Task" name="fourth">Task Content.</LeTabPane>
      </LeTabs>
    </dd>
  </dl>

  <dl class="demo">
    <dt>
      标签位置
      <select v-model="position">
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
    </dt>
    <dd>
      <LeTabs v-model="activeName" tab-position="xx" @tab-click="handleClick">
        <LeTabPane label="User" name="first">User Content.</LeTabPane>
        <LeTabPane label="Config" name="second">Config Content.</LeTabPane>
        <LeTabPane label="Role" name="third">Role Content.</LeTabPane>
        <LeTabPane label="Task" name="fourth">Task Content.</LeTabPane>
      </LeTabs>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { LeTabs, LeTabPane } from '@/components/LeTabs'

const activeName = ref('second')
const position = ref('left')
const handleClick = (tab: any, event: Event) => {
  console.log('Demo>handleClick:', { tab, event })
}
</script>
