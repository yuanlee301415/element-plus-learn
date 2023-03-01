<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeCollapse v-model="names" @change="handleChange">
        <LeCollapseItem title="Home" name="home">
          <template #title>自定义 Title&nbsp;<Icon name="star" /></template>
          <ol>
            <li>Home content.</li>
            <li>Home content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="News" name="news">
          <ol>
            <li>News content.</li>
            <li>News content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="About" name="about">
          <ol>
            <li>About content.</li>
            <li>About content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="Disabled" name="disabled" disabled>
          <ol>
            <li>Disabled content.</li>
            <li>Disabled content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>

  <dl class="demo">
    <dt>手风琴模式</dt>
    <dd>
      <LeCollapse v-model="name" accordion @change="handleChange">
        <LeCollapseItem title="Home" name="home">
          <ol>
            <li>Home content.</li>
            <li>Home content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="News" name="news">
          <ol>
            <li>News content.</li>
            <li>News content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="About" name="about">
          <ol>
            <li>About content.</li>
            <li>About content.</li>
          </ol>
        </LeCollapseItem>

        <LeCollapseItem title="Disabled" name="disabled" disabled>
          <ol>
            <li>Disabled content.</li>
            <li>Disabled content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Dyna</dt>
    <dd>
      <LeCollapse v-model="names2" @change="handleChange">
        <LeCollapseItem
          v-for="item of items"
          :key="item.name"
          :title="item.title"
          :name="item.name"
          :disabled="item.disabled"
        >
          <ol>
            <li>{{ item.title }} content.</li>
            <li>{{ item.title }} content.</li>
          </ol>
        </LeCollapseItem>
      </LeCollapse>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { LeCollapse, LeCollapseItem } from "@/components/LeCollapse";

const names = ref(["home"]);

const name = ref("disabled");

function handleChange() {
  console.log("handleChange>args:", arguments);
}

const items = ref([
  { title: "Home", name: "home" },
  { title: "News", name: "news" },
  { title: "About", name: "about" },
  { title: "Disabled", name: "disabled", disabled: true },
]);
const names2 = ref(["home"]);
setTimeout(() => {
  names2.value = ["about"];
  setTimeout(() => {
    names2.value[1] = "news";
  }, 2000);
}, 2000);
</script>
