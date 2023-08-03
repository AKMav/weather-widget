<template>
  <TransitionGroup name="list" tag="ul" class="weather-list">
    <CardUI v-for="item in list" :key="item.id">
      <template #default>
        <slot default :title="item.city" />
      </template>
    </CardUI>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { IProps } from '../types'
import CardUI from '@/shared/components/CardUI'
const props = defineProps<IProps>()
</script>

<style lang="scss">
@import './style.scss';
</style>
