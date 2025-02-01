<template>
  <div class="header__content">
      <span class="header__main header__main--animation">{{ main }}</span>
      <span class="header__sub header__sub--animation">{{ sub }}</span>
      <Button class="header__button" text="Explore Your Terra"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from "./button.vue"; 

const main = ref("Boundless");
const sub = ref("Discover Your Natural Freedom");
</script>

<style scoped>
.header__content {
  text-align: center;
  margin: 0 auto;
  color: #FFF;
  max-width: 120rem;
  padding: 2rem;
 }
 
.header__main {
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: 3.5rem;
  display: block;
  margin-bottom: 1rem;
}

.header__main--animation {
  text-transform: uppercase;
  animation: moveInRight 1s ease-out;
  backface-visibility: hidden;
}

.header__sub {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: .8rem;
  display: block;
  text-transform: uppercase;
  margin-bottom: 6rem;
}

.header__main--animation {
  animation: moveInLeft 1s ease-out;
  backface-visibility: hidden;
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
@media (max-width: 57.6rem) {
  .header__main {
    font-size: 2rem;
    letter-spacing: 2.5rem;
  }
  .header__sub {
    font-size: 0.8rem;
    letter-spacing: 0.5rem;
  }
}
</style>

