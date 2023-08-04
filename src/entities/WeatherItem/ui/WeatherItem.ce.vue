<template>
  <div class="weather-card">
    <header class="weather-card__header">
      <h2 class="weather-card__title">
        {{ `${item.name}, ${item.sys.country.toUpperCase()}` }}
      </h2>
      <slot :id="item.id" name="close" />
    </header>
    <main class="weather-card__main">
      <div class="weather-card__row">
        <div class="weather-card__col display-col">
          <div class="weather-info">
            <img
              :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`"
              :alt="`${item.weather[0].icon} icon`"
              width="50"
              height="50"
            />
            <div>
              <h3 class="weather-info__title">{{ item.weather[0].main }}</h3>
              <h4 class="weather-info__subtitle">{{ item.weather[0].description }}</h4>
            </div>
          </div>
          <div class="weather-temp">
            <p class="weather-card__temp">{{ item.main.temp.toFixed(1) }} ℃</p>
          </div>
        </div>
        <div class="weather-card__col">
          <div class="weather-line">
            <h3 class="weather-line__title">Wind:</h3>
            <span class="weather-line__value">{{ item.wind.speed }} meter/sec</span>
          </div>
          <div class="weather-line">
            <h3 class="weather-line__title">Humidity:</h3>
            <span class="weather-line__value">{{ item.main.humidity }} %</span>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="weather-card__footer">
        <div class="weather-params">
          <span class="weather-params__info">
            Feels like: <em>{{ item.main.feels_like.toFixed(1) }} ℃</em>,
          </span>
          <span class="weather-params__info">
            Visibility: <em>{{ (item.visibility / 1000).toFixed(1) }} km</em>,
          </span>
          <span class="weather-params__info">
            Atmospheric pressure: <em>{{ item.main.pressure }} hPa</em>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from '../types'
defineProps<IProps>()
</script>

<style lang="scss">
@import './style.scss';
</style>
