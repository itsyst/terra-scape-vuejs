<template>
	<div class="header__content">
		<span class="header__main header__main--animation">{{ main }}</span>
		<span class="header__sub header__sub--animation">{{ sub }}</span>
		<Button
			class="header__button"
			:animate="true"
			text="Utforska Din Terra"
			@click="scrollToTours"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useRouter, useRoute } from 'vue-router'; // Add routing utilities
	import Button from './button.vue';

	const main = ref('Gränslös');
	const sub = ref('Upptäck Din Naturliga Frihet');
	const router = useRouter(); // For navigation
	const route = useRoute(); // To check current route

	const scrollToTours = () => {
		if (route.path !== '/') {
			// If not on home, navigate to home first
			router.push('/');
			// Scroll after navigation completes
			router.afterEach(() => {
				setTimeout(() => {
					const tourSection = document.getElementById('tour-section');
					if (tourSection) {
						tourSection.scrollIntoView({ behavior: 'smooth' });
					}
				}, 100); // Small delay to ensure the DOM is ready
			});
		} else {
			// If already on home, scroll directly
			const tourSection = document.getElementById('tour-section');
			if (tourSection) {
				tourSection.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};
</script>

<style scoped lang="scss">
	@use '@/sass/components/_header';
</style>
