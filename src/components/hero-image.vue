<template>
	<div class="hero__logo">
		<Logo
			:color="logoColor"
			:fill="logoFill"
			:stroke="strokeColor"
			class="hero__image"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Logo from './logo.vue';

	// Define reactive variables for the logo's color and fill
	const logoColor = ref('white');
	const logoFill = ref('none');
	const strokeColor = ref('none');
</script>

<style scoped lang="scss">
	@use '@/sass/components/_hero';
</style>
