<template>
  <div class="greetings">
    <h3>
      App
      <button @click="onClick">Click</button>
    </h3>
  </div>
</template>

<script setup lang="ts">
console.log('Setup')
const onClick = () => {
  console.log('click btn')
}
</script>

<style lang="scss">
  @import './style.scss'
</style>
