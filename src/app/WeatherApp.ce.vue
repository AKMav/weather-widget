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

// import { getWeatherByQuery } from '@/shared/api/GetWeatherByQuery'
// import type { IResponse } from '@/shared/types'

// const getLondon = async () => {
//   try {
//     const res = await getWeatherByQuery('')
//     if (res.ok) {
//       const data: IResponse = await res.json()
//       console.log(data)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
</script>

<style lang="scss">
@import './style.scss';
</style>
