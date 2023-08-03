<template>
  <div class="weather-card">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import type { IProps } from '../types'
defineProps<IProps>()
</script>

<style lang="scss">
@import './style.scss';
</style>
