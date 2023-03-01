<template>
  <LeAvatar>User</LeAvatar>
  <LeAvatar src="/logo2.svg">User</LeAvatar>
  <LeAvatar src="/logo3.svg" @error="() => {}">User</LeAvatar>
  <LeAvatar src="/logo4.svg" @error="() => {}">
    <img src="/logo.svg">
  </LeAvatar>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import LeAvatar from "@/components/LeAvatar";
</script>
