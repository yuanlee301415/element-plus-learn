<template>
  <div class="transfer">
    <TransferPanel />
    <div class="transfer__buttons">
      <button class="transfer__button">&lt;</button>
      <button class="transfer__button">&gt;</button>
    </div>
    <TransferPanel />
  </div>
</template>

<script setup lang="ts">
import TransferPanel from "./transfer-panel.vue";
</script>

<style>
@import "style.css";
</style>
