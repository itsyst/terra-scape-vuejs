<template>
    <div class="header-content">
      <h1 class="header-heading">
        <span class="header-heading-main">{{ main }}</span>
        <span class="header-heading-sub">{{ sub }}</span>
      </h1>
      <Button text="Explore Your Terra"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from "./Button.vue"; 

const main = ref("Boundless");
const sub = ref("Discover Your Natural Freedom");

</script>

<style scoped>

.header-content {
  text-align: center;
  color: #FFF;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.header-heading-main {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  text-transform: uppercase;
  animation: moveInRight 1s ease-out;
  back-face-visibility: hidden;
}

.header-heading-sub {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5rem;
  display: block;
  text-transform: uppercase;
  margin-bottom: 3rem;
  animation: moveInLeft 1s ease-out;
  back-face-visibility: hidden;
}

/* Animation adjustments */
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
    
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
    
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-heading-main {
    font-size: 2rem;
    letter-spacing: 0.8rem;
  }

  .header-heading-sub {
    font-size: 0.8rem;
    letter-spacing: 0.5rem;
  }
}
</style>

