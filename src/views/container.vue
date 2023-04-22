<template>
  <h1>Basic</h1>
  <LeContainer>
    <LeHeader>Header</LeHeader>
    <LeContainer>
      <LeAside>Aside</LeAside>
      <LeContainer>
        <LeMain>Main</LeMain>
        <LeFooter>Footer</LeFooter>
      </LeContainer>
    </LeContainer>
  </LeContainer>

  <h1>Direction</h1>
  <LeContainer direction="horizontal">
    <LeHeader>Header</LeHeader>
    <LeContainer>
      <LeAside>Aside</LeAside>
      <LeContainer>
        <LeMain>Main</LeMain>
        <LeFooter>Footer</LeFooter>
      </LeContainer>
    </LeContainer>
  </LeContainer>

  <h1>Height / Width</h1>
  <LeContainer>
    <LeHeader height="100px">Header</LeHeader>
    <LeContainer>
      <LeAside width="400px">Aside</LeAside>
      <LeContainer>
        <LeMain>Main</LeMain>
        <LeFooter height="100px">Footer</LeFooter>
      </LeContainer>
    </LeContainer>
  </LeContainer>
</template>

<script lang="ts" setup>
import { LeContainer, LeHeader, LeAside, LeMain, LeFooter } from '@/components/LeContainer'
</script>

<style scoped>
:deep(.le-header),
:deep(.le-footer) {
  background-color: #c6e2ff;
  border: 1px solid #969;
}
:deep(.le-aside) {
  background-color: #d9ecff;
  border: 1px solid #969;
}
:deep(.le-main) {
  background-color: #ecf5ff;
  border: 1px solid #969;
}
</style>
