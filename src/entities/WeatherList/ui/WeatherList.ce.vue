<template>
  <TransitionGroup name="list" tag="ul" class="weather-list">
    <CardUI>
      <template #default>
        <slot default :title="'WeatherCard'" />
      </template>
    </CardUI>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { IProps } from '../types'
import CardUI from '@/shared/components/CardUI'
defineProps<IProps>()
</script>

<style lang="scss">
@import './style.scss';
</style>
