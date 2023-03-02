<template>
  <dl class="demo">
    <dt>Basic</dt>
    <dd>
      <LeAvatar>User</LeAvatar>
      <LeAvatar src="/vue.png">Vue</LeAvatar>
      <LeAvatar src="/react.png">React</LeAvatar>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Error</dt>
    <dd>
      <LeAvatar src="/logo.svg" @error="() => {}">User</LeAvatar>
      <LeAvatar src="/logo.svg">User2</LeAvatar>
      <LeAvatar src="/logo.svg" @error="() => {}">
        <img src="/fallback.png">
      </LeAvatar>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Fit</dt>
    <dd>
      <LeAvatar src="/vue.png" fit="scale-down">Vue</LeAvatar>
      <LeAvatar src="/react.png" fit="fill">React</LeAvatar>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Square</dt>
    <dd>
      <LeAvatar src="/vue.png" shape="square">Vue</LeAvatar>
      <LeAvatar shape="square">User</LeAvatar>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Size</dt>
    <dd>
      <LeAvatar src="/vue.png" size="large">Vue</LeAvatar>
      <LeAvatar size="80">User</LeAvatar>
    </dd>
  </dl>

</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import LeAvatar from "@/components/LeAvatar";
</script>
