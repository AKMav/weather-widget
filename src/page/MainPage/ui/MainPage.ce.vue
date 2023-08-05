<template>
  <div class="main-page">
    <WeatherWidget />
    <ListSetting />
  </div>
</template>

<script setup lang="ts">
import ListSetting from '@/widgets/ListSetting'
import WeatherWidget from '@/widgets/WeatherWidget'
</script>

<style lang="scss">
@import './style.scss';
</style>
