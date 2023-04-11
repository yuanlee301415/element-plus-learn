<template>
  <dl class="demo">
    <dt>Test>total</dt>
    <dd>
      <select v-model="total">
        <option :value="10">10</option>
        <option :value="20">20</option>
        <option :value="30">30</option>
      </select>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :pager-count="pagerCount"
        :total="total"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>
      pagerCount
      <select v-model="pagerCount">
        <option :value="3">3</option>
        <option :value="5">5</option>
        <option :value="7">7</option>
        <option :value="10">10</option>
      </select>
    </dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :pager-count="pagerCount"
      />
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :pager-count="pagerCount"
      />
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :pager-count="pagerCount"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>Jumper</dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :pager-count="pagerCount"
        :total="total"
        layout="prev,pager,next,total,jumper"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>
      Background
      <select v-model="background">
        <option :value="true">true</option>
        <option :value="false">false</option>
      </select>
    </dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :background="background"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>
      Small
      <select v-model="small">
        <option :value="true">true</option>
        <option :value="false">false</option>
      </select>
    </dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :small="small"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>
      Disabled
      <select v-model="disabled">
        <option :value="true">true</option>
        <option :value="false">false</option>
      </select>
    </dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :disabled="disabled"
      />
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        :disabled="disabled"
        background
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>page-sizes</dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :default-page-size="30"
        :total="total"
        :page-sizes="[10, 20, 30, 50]"
      />
    </dd>
  </dl>

  <dl class="demo">
    <dt>Layout</dt>
    <dd>
      <LePagination
        v-model:current-page="currentPage"
        :total="total"
        layout="prev,pager,next,jumper,total,sizes"
      />
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import LePagination from "@/components/LePagination";

const currentPage = ref(1);
const pageSize = ref(20);
const total = ref(30);
const pagerCount = ref(5);
const background = ref(true);
const small = ref(true);
const disabled = ref(true);

watch(currentPage, (val) => {
  console.log("Demo>watch>current:", val);
});

watch(pageSize, (val) => {
  console.log("Demo>watch>pageSize:", val);
});
</script>
