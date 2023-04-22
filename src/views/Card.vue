<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeCard>
        <template #header> Card Name </template>
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Header</dt>
    <dd>
      <LeCard header="Prop:Card Name 2">
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>

      <LeCard header="Prop:Card Name 2">
        <template #header> Slot: Card Name 2 </template>
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>

      <LeCard>
        No header.
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Shadow</dt>
    <dd>
      <LeCard shadow="hover">
        <template #header> Hover </template>
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>

      <LeCard shadow="never">
        <template #header> Never </template>
        <ol>
          <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
        </ol>
      </LeCard>
    </dd>
  </dl>

  <dl class="demo">
    <dt>BodyStyle</dt>
    <dd>
      <LeCard :body-style="{ padding: 0 }">
        <img src="@/assets/logo.svg" width="200" />
        <time>{{ time }}</time>
      </LeCard>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LeCard from '@/components/LeCard'

const time = ref<Date>(new Date())
</script>
