<!-- src/components/TourSection.vue -->
<template>
  <section class="tour">
    <h2 class="tour__heading">Äventyrs-hajk för de som vågar!</h2>
    <div class="tour__cards">
      <div v-for="(tour, index) in tours" :key="index" class="tour__card">
        <div class="tour__card">
          <img
            :src="tour.src"
            loading="lazy"
            class="tour__card--image"
            :alt="tour.alt"
          />
          <div class="tour__card--content">
            <h2 class="tour__card--title">{{ tour.title }}</h2>
            <p class="tour__card--description">{{ tour.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
 import { onMounted } from 'vue';
 import { useFetchTours } from '../composables/useFetchTours';

const { tours, loadTours } = useFetchTours();

onMounted(() => {
  loadTours();
});
</script>

<style scoped lang="scss">
@use '@/sass/components/_tours';
</style>