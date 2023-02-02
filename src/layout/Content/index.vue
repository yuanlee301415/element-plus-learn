<template>
  <RouterView v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in">
      <div class="container">
        <component :is="Component" :key="route.path" />
      </div>
    </transition>
  </RouterView>
</template>
