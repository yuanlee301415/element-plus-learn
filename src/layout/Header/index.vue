<template>
  <div class="header">
    <div class="headerLeft">
      <div v-if="matched" class="breadcrumbs">
        <template v-for="(item, idx) of matched" :key="item.name">
          <dl
            v-if="
              item.meta.hiddenChildrenInMenu !== true &&
              idx < matched.length - 1
            "
          >
            <dt>
              <router-link :to="{ name: item.name }">{{
                item.meta?.title
              }}</router-link
              ><span>/</span>
            </dt>
            <dd>
              <router-link
                v-for="child of item.children"
                :key="child.name"
                :to="{ name: child.name }"
                >{{ child.meta?.title }}</router-link
              >
            </dd>
          </dl>
          <span v-else>{{ item.meta?.title }}</span>
        </template>
      </div>
    </div>

    <div class="headerRight">
      <span v-if="userInfo.userName"
        >{{ userInfo.userName }}({{ userInfo.realName }})</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RouteRecordNormalized } from "vue-router";

import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import { useUserStore } from "@/store/modules/user";

const route = useRoute();
const matched = ref<RouteRecordNormalized[]>();
const userStore = useUserStore();
const userInfo = computed(() => userStore.getUserInfo);

watch(
  () => route.name,
  () => {
    matched.value = route.matched;
  },
  { immediate: true }
);
</script>

<style scoped lang="less">
.header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  background-color: white;
  border-bottom: 1px solid #eee;
  .breadcrumbs {
    dl {
      display: inline-block;
      position: relative;
      dt {
        a {
          cursor: pointer;
        }
        span {
          margin: 0 8px;
        }
      }
      dd {
        display: none;
        width: 100px;
        padding: 5px 0;
        background-color: #fbfbfb;
        border-radius: 5px;
        position: absolute;
        top: 40px;
        a {
          display: block;
          line-height: 26px;
          text-indent: 10px;
          text-decoration: none;
          &:hover {
            background-color: #eee;
          }
        }
      }
      &:hover {
        dd {
          display: block;
        }
      }
    }
  }
}
</style>
