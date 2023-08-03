<template>
  <div class="weather-app">
    <AppHeader :header-title="'Weather widget'">
      <div>1</div>
    </AppHeader>
    <WeatherList>
      <template #default="{ title }">
        <WeatherCard :title="title" />
      </template>
    </WeatherList>
  </div>
</template>

<script setup lang="ts">
import WeatherList from '@/shared/components/WeatherList'
import WeatherCard from '@/shared/components/WeatherCard'
import AppHeader from '@/shared/components/AppHeader'

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
