<template>
  <div class="setting-list__wrapper">
    <header class="setting-list__header">
      <h2 class="setting-list__title">Settings</h2>
      <button class="setting-list__close-btn" @click="emits('onClose')">
        <CrossIcon />
      </button>
    </header>
    <draggable
      tag="ul"
      :list="weatherList"
      class="setting-list"
      handle=".handle"
      item-key="id"
      @update="setDataToStorage(weatherList)"
    >
      <template #item="{ element }">
        <li class="setting-list__item">
          <BurgerIcon class="handle setting-list__burger-icon" />
          <span class="setting-list__text">{{ `${element.name}, ${element.sys.country}` }} </span>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { useWeatherList } from '@/entities/WeatherList'
import BurgerIcon from '@/shared/icons/BurgerIcon'
import CrossIcon from '@/shared/icons/CrossIcon'
import { setDataToStorage } from '@/shared/utils/useStorage'
const { weatherList } = useWeatherList()
const emits = defineEmits(['onClose'])
</script>

<style lang="scss">
@import './style.scss';
</style>
