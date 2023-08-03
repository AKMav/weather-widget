<template>
  <header class="weather-app-header">
    <h1 class="weather-app-header__title">
      {{ headerTitle }}
    </h1>
    <slot></slot>
  </header>
</template>

<script setup lang="ts">
defineProps<{ headerTitle: string }>()
</script>

<style lang="scss">
@import './style.scss';
</style>
