<template>
  <div>
    <Header />
    <router-view /> 
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';
 </script>