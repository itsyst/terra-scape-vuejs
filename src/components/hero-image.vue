<template>
    <div class="header__logo">
      <Logo :color="logoColor" :fill="logoFill" :stroke="strokeColor" class="logo-image" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logo from './logo.vue';   

// Define reactive variables for the logo's color and fill
const logoColor = ref("white"); 
const logoFill = ref("none");    
const strokeColor = ref("none"); 
</script>
   
<style scoped>
.header__logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.header-logo:hover {
  transform: scale(1.2);
}

.logo-image {
  height: 12rem;
  width: auto;
}
</style>

