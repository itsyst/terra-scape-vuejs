<template>
  <header class="header" :style="{
    backgroundImage: `linear-gradient(to right bottom, 
    rgba(249, 83, 199, 0.80), rgb(0, 50, 0.8)), url(${headerImageUrl})`
  }">
    <HeroImage/>
    <HeroContent/>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storage } from "../appwrite/config";
import HeroImage from "./HeroImage.vue"; 
import HeroContent from "./HeroContent.vue"; 

const headerImageUrl = ref(""); 

onMounted(async () => {
  try {
    // Fetch the hero image URL
    const fileUrl = await storage.getFilePreview(
      import.meta.env.VITE_APPWRITE_BUCKET_ID,
      import.meta.env.VITE_APPWRITE_HERO_ID
    );
    headerImageUrl.value = fileUrl;
  } catch (error) {
    console.error("Error fetching hero image:", error);
    headerImageUrl.value = ""; // Fallback if hero image cannot be loaded
  }
});
</script>

<style scoped>
.header {
  height: 95vh;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>