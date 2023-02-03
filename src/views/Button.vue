<template>
  <dl class="demo">
    <dt>Type</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton type="primary">Primary</LeButton>
      <LeButton type="success">Success</LeButton>
      <LeButton type="info">Info</LeButton>
      <LeButton type="warning">Warning</LeButton>
      <LeButton type="danger">Danger</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Size</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton size="small">Small</LeButton>
      <LeButton size="large">Large</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Plain</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton type="primary" plain>Primary</LeButton>
      <LeButton type="success" plain>Success</LeButton>
      <LeButton type="info" plain>Info</LeButton>
      <LeButton type="warning" plain>Warning</LeButton>
      <LeButton type="danger" plain>Danger</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Round</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton type="primary" round>Primary</LeButton>
      <LeButton type="success" round>Success</LeButton>
      <LeButton type="info" round>Info</LeButton>
      <LeButton type="warning" round>Warning</LeButton>
      <LeButton type="danger" round>Danger</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Disabled</dt>
    <dd>
      <LeButton disabled>Default</LeButton>
      <LeButton type="primary" disabled>Primary</LeButton>
      <LeButton type="success" disabled>Success</LeButton>
      <LeButton type="info" disabled>Info</LeButton>
      <LeButton type="warning" disabled>Warning</LeButton>
      <LeButton type="danger" disabled>Danger</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Group</dt>
    <dd>
       <LeButtonGroup>
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton>Delete</LeButton>
      </LeButtonGroup>

      <LeButtonGroup type="primary">
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton>Delete</LeButton>
      </LeButtonGroup>

      <LeButtonGroup type="success">
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton>Delete</LeButton>
      </LeButtonGroup>

      <LeButtonGroup size="large">
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton size="small">Delete</LeButton>
      </LeButtonGroup>
    </dd>

    <dd>
      <LeButtonGroup :type="type">
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton type="danger">Delete</LeButton>
      </LeButtonGroup>

      <select v-model="type">
        <option value="">--Change type--</option>
        <option value="primary">Primary</option>
        <option value="success">Success</option>
      </select>
    </dd>

    <dd>
      <LeButtonGroup :size="size">
        <LeButton>Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton>Delete</LeButton>
      </LeButtonGroup>

      <select v-model="size">
        <option value="">--Change size--</option>
        <option value="small">Small</option>
        <option value="large">Large</option>
      </select>
    </dd>

  </dl>

  <dl class="demo">
    <dt>Click</dt>
    <dd>
      <LeButton @click="handleClickA">Default</LeButton>
      <LeButton @click="handleClickB" type="primary">Primary</LeButton>
      <LeButton @click="handleClickC" type="success">Success</LeButton>
    </dd>
  </dl>

</template>

<script lang="ts" setup>
import type { ButtonType, ButtonSize } from "@/components/LeButton/button";

import {ref} from "vue";

import LeButton from "@/components/LeButton/index.vue";
import LeButtonGroup from "@/components/LeButtonGroup/index.vue";

const type = ref<ButtonType>('')
const size = ref<ButtonSize>('')

const handleClickA = () => console.log('ClickA!')
const handleClickB = () => console.log('ClickB!')
const handleClickC = () => console.log('ClickC!')
</script>