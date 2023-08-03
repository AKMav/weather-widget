<template>
  <div class="weather-app">
    <AppHeader :header-title="'Weather widget'">
      <SearchLocation />
    </AppHeader>
    <WeatherList :list="[]">
      <template #default="{ title }">
        <WeatherCard :title="title" />
      </template>
    </WeatherList>
    <EmptyData v-if="true" />
  </div>
</template>

<script setup lang="ts">
import WeatherList from '@/entities/WeatherList'
import WeatherCard from '@/shared/components/WeatherCard'
import AppHeader from '@/shared/components/AppHeader'
import SearchLocation from '@/features/SearchLocation'
import EmptyData from '@/shared/components/EmptyData'
</script>

<style lang="scss">
@import './style.scss';
</style>
