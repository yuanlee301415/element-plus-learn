<template>
  <div
    :class="{
      'is-background': props.background,
      'pagination--small': props.small
    }"
    class="pagination"
  >
    <span v-if="layout.total" :disabled="props.disabled" class="pagination__total"
      >Total {{ props.total }}</span
    >

    <div v-if="layout.sizes" class="pagination__sizes">
      <select
        v-model="currentPageSize"
        :disabled="props.disabled"
        @change="handleChangePageSize($event)"
      >
        <option v-for="size of props.pageSizes" :key="size" :value="size">{{ size }}/page</option>
      </select>
    </div>

    <button
      v-if="layout.prev"
      :disabled="page.first === currentPage || props.disabled"
      class="btn-prev"
      @click="handlePrev"
    >
      &lt;
    </button>

    <ul v-if="layout.pager" class="pager">
      <li
        v-if="page.first"
        :class="{
          'is-active': page.first === currentPage,
          'is-disabled': props.disabled
        }"
        @click="handlePage(page.first)"
      >
        {{ page.first }}
      </li>

      <li
        v-show="page.prev"
        :class="{ 'is-disabled': props.disabled }"
        class="more"
        @click="handlePrev"
      >
        <span class="dot">...</span>
        <span class="btn">&lt;&lt;</span>
      </li>

      <li
        v-for="n of page.pages"
        :key="n"
        :class="{
          'is-active': n === currentPage,
          'is-disabled': props.disabled
        }"
        @click="handlePage(n)"
      >
        {{ n }}
      </li>

      <li
        v-show="page.next"
        :class="{ 'is-disabled': props.disabled }"
        class="more"
        @click="handleNext"
      >
        <div class="dot">...</div>
        <div class="btn">&gt;&gt;</div>
      </li>

      <li
        v-if="page.last"
        :class="{
          'is-active': page.last === currentPage,
          'is-disabled': props.disabled
        }"
        @click="handlePage(page.last)"
      >
        {{ page.last }}
      </li>
    </ul>

    <button
      v-if="layout.next"
      :disabled="page.last === currentPage || props.disabled"
      class="btn-next"
      @click="handleNext"
    >
      &gt;
    </button>

    <span v-if="layout.jumper" :class="{ 'is-disabled': props.disabled }" class="pagination__jump">
      <span class="pagination__goto">Go to</span>
      <div class="pagination__editor">
        <input
          type="text"
          v-model="jumper"
          :disabled="props.disabled"
          @input="handleJumper($event)"
        />
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { pageProps, pageEmit } from './typing'
import { usePage } from './userPage'

const props = defineProps(pageProps)
const emit = defineEmits(pageEmit)
const {
  page,
  currentPage,
  currentPageSize,
  handlePage,
  handlePrev,
  handleNext,
  handleChangePageSize,
  layout,
  jumper,
  handleJumper
} = usePage(props, emit)
</script>

<style>
@import './style.css';

.more {
  cursor: pointer;
}

.more .btn {
  display: none;
}

.more:not(.is-disabled):hover .dot {
  display: none;
}

.more:not(.is-disabled):hover .btn {
  display: block;
}

.pagination__editor {
  width: 50px;
}

.pagination__editor input {
  width: 100%;
  padding: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
