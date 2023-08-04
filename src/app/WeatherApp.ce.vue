<template>
  <div class="weather-app">
    <AppHeader :header-title="'Weather widget'">
      <LocationAdd />
    </AppHeader>
    <WeatherList v-if="weatherList.length">
      <template #default="{ item }">
        <WeatherItem :item="item">
          <template #close="{ id }">
            <RemoveLocationItem :id="id" />
          </template>
        </WeatherItem>
      </template>
    </WeatherList>
    <EmptyData v-else />
  </div>
</template>

<script setup lang="ts">
import LocationAdd from '@/features/LocationAdd'
import RemoveLocationItem from '@/features/RemoveLocationItem'
import WeatherList, { useWeatherList } from '@/entities/WeatherList'
import WeatherItem from '@/entities/WeatherItem'
import AppHeader from '@/shared/components/AppHeader'
import EmptyData from '@/shared/components/EmptyData'

const { weatherList } = useWeatherList()
</script>

<style lang="scss">
@import './style.scss';
</style>
