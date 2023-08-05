<template>
  <header class="weather-app-header">
    <div class="weather-app-header__top">
      <h1 class="weather-app-header__title">
        {{ headerTitle }}
      </h1>
      <button class="weather-app-header__btn" @click="emits('onSettingsOpen')">
        <GearIcon />
      </button>
    </div>

    <slot></slot>
  </header>
</template>

<script setup lang="ts">
import GearIcon from '@/shared/icons/GearIcon'
defineProps<{ headerTitle: string }>()
const emits = defineEmits(['onSettingsOpen'])
</script>

<style lang="scss">
@import './style.scss';
</style>
