<template>
	<header class="header" :style="headerStyle">
        <HeroLogo />
        <HeroContent />
	</header>
</template>

<script setup lang="ts">
	import { computed, onMounted } from 'vue';
	import HeroLogo from './hero-logo.vue';
	import HeroContent from './hero-content.vue';
	import { useHeroImage } from '../composables/useHeroImage';
     
	const { headerImageUrl, loadHeroImage } = useHeroImage();

	const headerStyle = computed(() => ({
		backgroundImage: `linear-gradient(
	    to right bottom, 
	    rgba(249, 83, 199, 0.80), 
	    rgb(0, 50, 0.8)),
		url(${headerImageUrl.value})`
	}));

	onMounted(async () => {
		await loadHeroImage();
	});
</script>

<style scoped lang="scss">
	@use '@/sass/components/_header';
</style>
