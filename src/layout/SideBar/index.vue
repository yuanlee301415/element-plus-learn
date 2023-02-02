<template>
  <aside>
    <div class="logo" @click="$router.push(ROOT_ROUTE)">
      <img src="@/assets/logo.svg" alt="Logo" width="32" height="32" />
      <h2>{{ VITE_APP_TITLE }}</h2>
    </div>
    <nav>
      <Menu />
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import Menu from "../Menu/index.vue";
import { ROOT_ROUTE } from "@/router/routes";
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;
</script>

<style scoped lang="less">
@logoHeight: 48px;

.logo {
  display: flex;
  align-items: center;
  height: @logoHeight;
  padding: 10px 0 10px 10px;
  cursor: pointer;
  h2 {
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    line-height: normal;
    margin-left: 0.5rem;
  }
}
nav {
  height: calc(100% - @logoHeight);
  overflow-y: auto;
  user-select: none;
}
</style>
