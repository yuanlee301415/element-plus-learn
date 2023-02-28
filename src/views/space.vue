<template>
  <dl>
    <dt>Basic</dt>
    <dd>
      <LeSpace>
        <LeCard header="Card-1" style="width: 250px">
          <ol>
            <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
          </ol>
        </LeCard>

        <LeCard header="Card-2" style="width: 250px">
          <ol>
            <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
          </ol>
        </LeCard>

        <LeCard header="Card-3" style="width: 250px">
          <ol>
            <li v-for="n of [1, 2, 3]" :key="n">Item-{{ n }}</li>
          </ol>
        </LeCard>
      </LeSpace>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import LeSpace from "@/components/LeSpace";
import LeCard from "@/components/LeCard";
</script>
