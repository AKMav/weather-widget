<template>
  <div class="search-location">
    <div class="search-location__container">
      <span class="search-location__wrapper">
        <SearchIcon v-if="!isInputFocused" class="search-location__icon" />
        <input
          v-model.trim="query"
          class="search-location__input"
          :class="{ danger: error && isInputFocused }"
          @focus="isInputFocused = true"
          @blur="isInputFocused = false"
        />
      </span>
      <LoaderUI v-if="loading" class="search-location__loader" />
      <button
        v-else-if="!loading && weatherItemData"
        class="search-location__apply-btn"
        @click="addFetchedItem(weatherItemData)"
      >
        Add location
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGeolocation } from '@vueuse/core'
import { watchDebounced } from '@vueuse/core'
import SearchIcon from '@/shared/icons/SearchIcon'
import LoaderUI from '@/shared/components/LoaderUI'
import type { ICoordinate } from '@/shared/types'
import { useSearchLocation } from '../model'

const isInputFocused = ref(false)
const { query, weatherItemData, loading, error, fetchWeather, addFetchedItem } = useSearchLocation()

watchDebounced(
  query,
  (newQuery) => {
    fetchWeather({ query: newQuery })
  },
  { debounce: 750 }
)

onMounted(async () => {
  const { coords: userCoordinates } = useGeolocation()

  // value of longitude and latitude is may have an Infinity type
  if (
    userCoordinates.value.longitude &&
    isFinite(userCoordinates.value.longitude) &&
    userCoordinates.value.latitude &&
    isFinite(userCoordinates.value.latitude)
  ) {
    const payload: ICoordinate = {
      lon: userCoordinates.value.longitude,
      lat: userCoordinates.value.latitude
    }
    await fetchWeather({ coordinate: payload })
    addFetchedItem(weatherItemData.value)
  }
})
</script>

<style lang="scss">
@import './style.scss';
</style>
