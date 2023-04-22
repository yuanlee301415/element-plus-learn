<template>
  <section class="layout">
    <LayoutSideBar class="sideBar" />

    <main>
      <LayoutHeader />
      <LayoutContent />
    </main>
  </section>
</template>

<script lang="ts" setup>
import LayoutSideBar from './SideBar/index.vue'
import LayoutHeader from './Header/index.vue'
import LayoutContent from './Content/index.vue'
</script>

<style scoped lang="less">
@sideWidth: 210px;

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  .sideBar {
    position: fixed;
    width: @sideWidth;
    height: 100vh;
    background-color: #001529;
  }
  main {
    margin-left: @sideWidth;
    .container {
      padding: 10px;
    }
  }
}
</style>
