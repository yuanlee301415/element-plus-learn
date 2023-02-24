<template>
  <div :class="itemKls" class="collapse-item">
    <div role="tab">
      <div
        role="button"
        :id="scopedHeadId"
        :class="buttonKls"
        class="collapse-item__header"
        @click="handleItemClick"
      >
        <slot name="title">{{ title }}</slot>
        <Icon
          :class="iconKls"
          name="arrow-right"
          class="collapse-item__arrow"
        />
      </div>
    </div>

    <div
      v-show="isActive"
      :id="scopedContentId"
      class="collapse-item__wrap"
      role="tabpanel"
    >
      <div class="collapse-item__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collapseItemProps } from "./typing";
import { useCollapseItem, useCollapseItemDOM } from "./use-collapse-item";

const props = defineProps(collapseItemProps);

const { id, isActive, handleItemClick } = useCollapseItem(props);
const { itemKls, buttonKls, iconKls, scopedHeadId, scopedContentId } =
  useCollapseItemDOM(props, { id, isActive });
</script>
