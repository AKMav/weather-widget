<template>
  <div class="search-location">
    <span class="search-location__wrapper">
      <SearchIcon class="search-location__icon"></SearchIcon>
      <input class="search-location__input" />
    </span>
    <LoaderUI v-if="false" />
    <button v-else class="search-location__apply-btn">Apply</button>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/shared/icons/SearchIcon'
import LoaderUI from '@/shared/components/LoaderUI'
</script>

<style lang="scss">
@import './style.scss';
</style>
