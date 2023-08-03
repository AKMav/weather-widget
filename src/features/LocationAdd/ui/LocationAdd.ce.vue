<template>
  <div class="search-location">
    <div class="search-location__container">
      <span class="search-location__wrapper">
        <SearchIcon class="search-location__icon"></SearchIcon>
        <input v-model.trim="query" class="search-location__input" />
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
import { watchDebounced } from '@vueuse/core'
import SearchIcon from '@/shared/icons/SearchIcon'
import LoaderUI from '@/shared/components/LoaderUI'
import { useSearchLocation } from '../model'

const { query, weatherItemData, loading, fetchWeather, addFetchedItem } = useSearchLocation()

watchDebounced(
  query,
  (newQuery) => {
    fetchWeather(newQuery)
  },
  { debounce: 750 }
)
</script>

<style lang="scss">
@import './style.scss';
</style>
