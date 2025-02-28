<template>
	<nav class="navigation">
		<button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
			<OhVueIcon
				:name="menuConfig[0].icon"
				:fill="menuConfig[0].fill"
				:scale="menuConfig[0].scale"
			/>
		</button>
<div class="menu" :class="{ 'is-open': isOpen }">
			<router-link :to="{ path: '/', hash: '#main-header' }" @click="closeMenu">
				Hem
			</router-link>
			<router-link :to="{ path: '/about', hash: '#page-about' }" @click="closeMenu">
				Om oss
			</router-link>
			<router-link :to="{ path: '/contact', hash: '#page-contact' }" @click="closeMenu">
				Kontakta oss
			</router-link>
			<router-link :to="{ path: '/policy', hash: '#page-policy' }" @click="closeMenu">
				Sekretesspolicy
			</router-link>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
 	import { OhVueIcon } from 'oh-vue-icons';
	import { useIcons } from '../composables/useIcons';
	import { getMenuConfig } from '../constants/menu-hamburger';

	// Initialize menu icon
	const { menuIcon } = useIcons();
	menuIcon(); // Adds GiHamburgerMenu

	// Define reactive colorFill (default to 'white')
	const colorFill = ref('white');

	// Compute menu configuration based on colorFill
	const menuConfig = computed(() => getMenuConfig(colorFill.value));

	// Menu toggle state
	const isOpen = ref(false);
 
	// Toggle menu without scrolling (hamburger button only)
	const toggleMenu = () => {
		isOpen.value = !isOpen.value;
	};

	// Close menu and scroll to section after navigation
	const closeMenu = () => {
		isOpen.value = false;
	};
</script>

<style lang="scss" scoped>
	@use '@/sass/components/_navigation.scss';
</style>
