<template>
  <button class="weather-card__close-btn" @click="removeWeatherItem(id)">
    <TrashIcon />
  </button>
</template>

<script setup lang="ts">
import { useWeatherList } from '@/entities/WeatherList'
import TrashIcon from '@/shared/icons/TrashIcon'

const { removeWeatherItem } = useWeatherList()
defineProps<{ id: number }>()
</script>

<style lang="scss">
@import './style.scss';
</style>
