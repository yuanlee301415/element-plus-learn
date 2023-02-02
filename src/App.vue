<template>
  <RouterView />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

onMounted(() => {
  const leftStyle =
    "background-color:#2f353a;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0.2rem 0 0 0.2rem;";
  const rightStyle =
    "background-color:#17a2b8;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0 0.2rem 0.2rem 0;";
  console.log(`%c MODE %c ${import.meta.env.MODE}`, leftStyle, rightStyle);
  console.log(`%c VERSION %c ${__APP_VERSION__}`, leftStyle, rightStyle);
  console.log(`%c BUILD_TIME %c ${__APP_BUILD_TIME__}`, leftStyle, rightStyle);
  // console.log(`__APP_INFO__: ${JSON.stringify(__APP_INFO__, null, 2)}`)
});
</script>

<style scoped></style>
