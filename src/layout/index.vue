<template>
  <section class="layout">
    <LayoutSideBar class="sideBar" />

    <section class="main">
      <LayoutHeader />
      <LayoutContent />
    </section>
  </section>
</template>

<script lang="ts" setup>
import LayoutSideBar from "./SideBar/index.vue";
import LayoutHeader from "./Header/index.vue";
import LayoutContent from "./Content/index.vue";
</script>

<style scoped lang="less">
@sideWidth: 210px;

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  .sideBar {
    position: fixed;
    width: @sideWidth;
    height: 100vh;
    background-color: #001529;
  }
  .main {
    margin-left: @sideWidth + 2px;
  }
}
</style>
