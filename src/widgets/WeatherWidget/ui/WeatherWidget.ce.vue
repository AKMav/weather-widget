<template>
  <AppHeader header-title="Weather widget" @on-settings-open="openSetting">
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
</template>

<script setup lang="ts">
import LocationAdd from '@/features/LocationAdd'
import RemoveLocationItem from '@/features/RemoveLocationItem'
import WeatherList, { useWeatherList } from '@/entities/WeatherList'
import WeatherItem from '@/entities/WeatherItem'
import AppHeader from '@/shared/components/AppHeader'
import EmptyData from '@/shared/components/EmptyData'

const { weatherList } = useWeatherList()
const openSetting = () => console.log('open settings')
</script>
