<template>
  <TransitionGroup name="list" tag="ul" class="weather-list">
    <CardUI v-for="item in weatherList" :key="item.id">
      <template #default>
        <slot default :item="item" />
      </template>
    </CardUI>
  </TransitionGroup>
</template>

<script setup lang="ts">
import CardUI from '@/shared/components/CardUI'
import { useWeatherList } from '../model/list'

const { weatherList } = useWeatherList()
</script>

<style lang="scss">
@import './style.scss';
</style>
