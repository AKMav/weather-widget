<template>
  <TransitionGroup name="list" tag="ul" class="weather-list">
    <slot default :title="'WeatherCard'" />
  </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './style.scss';
</style>
