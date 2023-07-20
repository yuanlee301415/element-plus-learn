<template>
  <transition name="alert-fade">
    <div v-show="visible" :class="cls">
      <i v-if="showIcon" :class="{'is-big': description || $slots.default}" class="alert__icon">
        <Icon :name="icon"/>
      </i>
      <div class="alert__content">
        <span v-if="title || $slots.title" class="alert__title">
          <span class="alert__title">
            <slot name="title">{{ title }}</slot>
          </span>
        </span>
        <p v-if="description || $slots.default" class="alert__description">
          <slot>{{ description }}</slot>
        </p>
        <template v-if="closable">
          <div v-if="closeText" class="alert__close-btn is-customed" @click="handleClose">
            {{ closeText }}
          </div>
          <i v-else class="icon alert__close-btn" @click="handleClose">
            <Icon name="close"></Icon>
          </i>
        </template>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type {AlertProps} from "./typing";
import {computed, ref} from "vue";
import Icon from "@/components/Icon/src/index.vue";

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: true,
  center: false,
  showIcon: false,
  effect: 'light'
})
// console.log('props:', props)
const emit = defineEmits<{
  close: [e: MouseEvent]
}>()
const PREFIX = 'alert'
const cls = computed(() => [
  PREFIX,
  `${PREFIX}--${props.type}`,
  `is-${props.effect}`,
  {
    'is-center': props.center
  }
])
const visible = ref(true)
const icon = computed(() => (props.type === 'error' ? 'circle-close' : props.type) + '-filled')


function handleClose(event: MouseEvent) {
  visible.value = !visible.value
  emit('close', event)
}
</script>

<style>
@import './style.css';
</style>
