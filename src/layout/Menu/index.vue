<template>
  <MenuItem
    v-for="item of basicRoutes"
    :key="item.name"
    :item="item"
    :depth="1"
    :fullPath="item.path"
  />
</template>

<script lang="ts" setup>
import { basicRoutes } from "@/router/routes";
import MenuItem from "@/layout/Menu/MenuItem.vue";
// console.log('basicRoutes:', basicRoutes)
</script>
