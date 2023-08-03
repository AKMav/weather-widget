<template>
  <div class="weather-card">
    <header class="weather-card__header">
      <h2 class="weather-card__title">
        {{ `${item.city}, ${item.country.toUpperCase()}` }}
      </h2>
      <slot :id="item.id" name="close" />
    </header>
    <main class="weather-card__main">
      <div class="weather-card__row">
        <div class="weather-card__col">
          <p class="weather-card__temp">{{ item.temp }}℃</p>
        </div>
        <div class="weather-card__col"></div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from '../types'
defineProps<IProps>()
</script>

<style lang="scss">
@import './style.scss';
</style>
