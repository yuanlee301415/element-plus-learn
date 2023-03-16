<template>
  <dl class="demo">
    <dt>Type</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton ref="typeBtnRef" type="primary">Primary</LeButton>
      <LeButton ref="_refRef" type="success">Success</LeButton>
      <LeButton type="info">Info</LeButton>
      <LeButton type="warning">Warning</LeButton>
      <LeButton type="danger">Danger</LeButton>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Size</dt>
    <dd>
      <LeButton>Default</LeButton>
      <LeButton ref="sizeBtnRef" size="small">Small</LeButton>
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
      <LeButton ref="disBtnRef" disabled>Default</LeButton>
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
        <LeButton ref="groupTypeBtnRef">Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton type="danger">Delete</LeButton>
      </LeButtonGroup>

      <select v-model="type" @change="onChangeType">
        <option value="">--Change type--</option>
        <option value="primary">Primary</option>
        <option value="success">Success</option>
      </select>
    </dd>

    <dd>
      <LeButtonGroup :size="size">
        <LeButton ref="groupSizeBtnRef">Add</LeButton>
        <LeButton>Edit</LeButton>
        <LeButton>Delete</LeButton>
      </LeButtonGroup>

      <select v-model="size" @change="onChangeSize">
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
import type { ButtonType, ButtonSize, ButtonInstance } from "@/components/LeButton";

import {nextTick, onMounted, ref} from "vue";

import LeButton from "@/components/LeButton";
import LeButtonGroup from "@/components/LeButtonGroup";

const type = ref<ButtonType>("primary");
const size = ref<ButtonSize>("small");

const handleClickA = (e: Event) => console.log("ClickA>evt:", e);
const handleClickB = (e: Event) => console.log("ClickB>evt:", e);
const handleClickC = (e: Event) => console.log("ClickC>evt:", e);

const typeBtnRef = ref<ButtonInstance>()
const sizeBtnRef = ref<ButtonInstance>()

const groupTypeBtnRef = ref<ButtonInstance>()
const groupSizeBtnRef = ref<ButtonInstance>()

const _refRef = ref<ButtonInstance>()
const disBtnRef = ref<ButtonInstance>()

onMounted(() => {
  console.log('onMounted>ref:', _refRef.value.ref)
  _refRef.value.ref.disabled = true

  console.log('onMounted>disabled:', disBtnRef.value.disabled)

  console.log('onMounted>type:', typeBtnRef.value.type)
  console.log('onMounted>size:', sizeBtnRef.value.size)

  console.log('onMounted>group type:', groupTypeBtnRef.value.type)
  console.log('onMounted>group size:', groupSizeBtnRef.value.size)
})

function onChangeType() {
  nextTick(() => {
    console.log('onChangeType>group type:', groupTypeBtnRef.value.type)
  })
}

function onChangeSize() {
  nextTick(() => {
    console.log('onChangeSize>group size:', groupSizeBtnRef.value.size)
  })
}
</script>
