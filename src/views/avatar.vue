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
      <LeAvatar src="/logo.svg" @error="onError">
        <img src="/fallback.png" />
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
      <LeAvatar src="/vue.png" alt="undefined">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="" alt="''">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="small" alt="small">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="default" alt="default">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="xx" alt="xx">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="large" alt="large">Vue</LeAvatar>
      <LeAvatar src="/vue.png" size="100" alt="100">Vue</LeAvatar>
    </dd>
  </dl>
</template>

<script lang="ts" setup>
import LeAvatar from "@/components/LeAvatar";

function onError(e: Error) {
  console.log(e);
}
</script>
