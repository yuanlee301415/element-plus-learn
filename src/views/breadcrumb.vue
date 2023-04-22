<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeBreadcrumb>
        <LeBreadcrumbItem>Home</LeBreadcrumbItem>
        <LeBreadcrumbItem><a href="">News</a></LeBreadcrumbItem>
        <LeBreadcrumbItem>About</LeBreadcrumbItem>
      </LeBreadcrumb>
    </dd>
  </dl>

  <dl class="demo">
    <dt>separator</dt>
    <dd>
      <LeBreadcrumb separator=">>">
        <LeBreadcrumbItem>Home</LeBreadcrumbItem>
        <LeBreadcrumbItem><a href="">News</a></LeBreadcrumbItem>
        <LeBreadcrumbItem>About</LeBreadcrumbItem>
      </LeBreadcrumb>
    </dd>
  </dl>

  <dl class="demo">
    <dt>to</dt>
    <dd>
      <LeBreadcrumb separator=">>">
        <LeBreadcrumbItem :to="{ path: '/' }">Home</LeBreadcrumbItem>
        <LeBreadcrumbItem><a href="/#/news">News</a></LeBreadcrumbItem>
        <LeBreadcrumbItem>About</LeBreadcrumbItem>
      </LeBreadcrumb>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import { LeBreadcrumb, LeBreadcrumbItem } from '@/components/Lebreadcrumb'
</script>
