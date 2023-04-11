<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeTag>Tag 1</LeTag>
      <LeTag>Tag 2</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Click</dt>
    <dd>
      <LeTag @click="handleClick">Tag 1</LeTag>
      <LeTag @click="handleClick">Tag 2</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>可移除</dt>
    <dd>
      <LeTag
        v-for="tag of tags"
        :key="tag.name"
        :type="tag.type"
        closable
        @close="handleClose(tag)"
        >{{ tag.name }}</LeTag
      >
    </dd>
  </dl>

  <dl class="demo">
    <dt>Type</dt>
    <dd>
      <LeTag type="success">Tag 1-success</LeTag>
      <LeTag type="info">Tag 2-info</LeTag>
      <LeTag type="warning">Tag 3-warning</LeTag>
      <LeTag type="danger">Tag 4-danger</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Round</dt>
    <dd>
      <LeTag round type="success">Tag 1-success</LeTag>
      <LeTag round type="info">Tag 2-info</LeTag>
      <LeTag round type="warning">Tag 3-warning</LeTag>
      <LeTag round type="danger">Tag 4-danger</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Hit</dt>
    <dd>
      <LeTag hit type="success">Tag 1-success</LeTag>
      <LeTag hit type="info">Tag 2-info</LeTag>
      <LeTag hit type="warning">Tag 3-warning</LeTag>
      <LeTag hit type="danger">Tag 4-danger</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Color</dt>
    <dd>
      <LeTag hit color="green">Tag 1-success</LeTag>
      <LeTag hit color="#c6c">Tag 2-info</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Size</dt>
    <dd>
      <LeTag size="large">Tag 1-large</LeTag>
      <LeTag>Tag 2-default</LeTag>
      <LeTag size="small">Tag 3-small</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Effect</dt>
    <dd>
      <LeTag type="success" effect="dark">Tag 1</LeTag>
      <LeTag type="info" effect="dark">Tag 2</LeTag>
      <LeTag type="warning" effect="dark">Tag 2</LeTag>
      <LeTag type="danger" effect="dark">Tag 2</LeTag>
    </dd>
    <dd>
      <LeTag type="success" effect="plain">Tag 1</LeTag>
      <LeTag type="info" effect="plain">Tag 2</LeTag>
      <LeTag type="warning" effect="plain">Tag 2</LeTag>
      <LeTag type="danger" effect="plain">Tag 2</LeTag>
    </dd>
  </dl>

  <dl class="demo">
    <dt>CheckTag</dt>
    <dd>
      <LeCheckTag checked>Checked</LeCheckTag>
      <LeCheckTag :checked="checked" @change="handleChange">Toggle</LeCheckTag>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import type { ComponentType } from "@/constants/type";

import { reactive, ref, watch } from "vue";
import LeTag from "@/components/LeTag";
import LeCheckTag from "@/components/LeCheckTag";

type Tag = { name: string; type: ComponentType };
const tags: Tag[] = reactive([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
]);

const checked = ref(false);
watch(checked, (value) => console.log("watch>checked:", value));

function handleChange(status: boolean) {
  checked.value = status;
}

function handleClose(tag: Tag) {
  console.log(tag);
  const idx = tags.indexOf(tag);
  console.log(idx);
  tags.splice(idx, 1);
}

function handleClick() {
  console.log("click>args:", arguments);
}
</script>
