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
	import Button from './button.vue';

	const main = ref('Gränslös');
	const sub = ref('Upptäck Din Naturliga Frihet');

	const scrollToTours = () => {
		const tourSection = document.getElementById('tour-section');
		if (tourSection) {
			tourSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<style scoped lang="scss">
	@use '@/sass/components/_header';
</style>
