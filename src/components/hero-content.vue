<template>
  <div class="header__content">
      <span class="header__main header__main--animation">{{ main }}</span>
      <span class="header__sub header__sub--animation">{{ sub }}</span>
      <Button class="header__button"  :animate="true"  text="Utforska Din Terra"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from "./button.vue"; 

const main = ref("Gränslös");
const sub = ref("Upptäck Din Naturliga Frihet");
</script>

<style scoped lang="scss">
@use '@/sass/components/_header';
</style>

