<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <le-empty description="description"></le-empty>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Image prop</dt>
    <dd>
      <le-empty image="/vue.png">
        <template #image>
          <div style="border: 10px solid #fff">
            <img src="/fallback.png" alt="" />
          </div>
        </template>
      </le-empty>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Image slot</dt>
    <dd>
      <le-empty>
        <template #image>
          <div style="border: 10px solid #fff">
            <img src="/fallback.png" alt="" />
          </div>
        </template>
      </le-empty>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Image size</dt>
    <dd>
      <le-empty image-size="300">
        <template #image>
          <div style="border: 10px solid #fff">
            <img src="/fallback.png" alt="" />
          </div>
        </template>
      </le-empty>
    </dd>
  </dl>

  <dl class="demo">
    <dt>底部内容</dt>
    <dd>
      <le-empty>
        <template #image>
          <div style="border: 10px solid #fff">
            <img src="/fallback.png" alt="" />
          </div>
        </template>
        <LeButton type="primary">Refresh</LeButton>
      </le-empty>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Description slot</dt>
    <dd>
      <le-empty description="No data...">
        <template #description>
          <h2>暂无数据</h2>
          <h3>没有数据</h3>
          <h4>空状态</h4>
        </template>
        <LeButton type="primary">Refresh</LeButton>
      </le-empty>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import LeEmpty from "@/components/LeEmpty";
</script>
