<template>
  <div class="main-page">
    <ListSetting v-if="isVisible" class="list-setting" @on-close="close" />
    <WeatherWidget @on-toggle-setting="toggle" />
  </div>
</template>

<script setup lang="ts">
import ListSetting from '@/widgets/ListSetting'
import WeatherWidget from '@/widgets/WeatherWidget'
import { useVisibility } from '../model/useVisibility'
const { isVisible, toggle, close } = useVisibility()
</script>

<style lang="scss">
@import './style.scss';
</style>
