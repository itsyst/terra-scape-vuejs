<!-- src/components/FeatureSection.vue -->
<template>
	<section class="feature" :style="backgroundStyle">
		<div class="feature__cards">
			<div
				v-for="(feature, index) in features"
				:key="index"
				class="feature__card"
			>
				<div class="feature__card--content">
					<OhVueIcon
						:name="feature.icon"
						:fill="feature.fill"
						:scale="feature.scale"
					/>
					<p class="feature__card--description">{{ feature.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { onMounted, computed, ref } from 'vue';
	import { OhVueIcon } from 'oh-vue-icons';
	import { getFeaturesConfig  } from '../constants/features';
	import { useIcons } from '../composables/useIcons';
	import { useFeatureImage } from '../composables/useFeatureImage';

	// Reactive color source
	const colorFill = ref('#f953c7');

	// Initialize icons
	const { featureIcons } = useIcons();
	featureIcons();

	// Feature image handling
	const { featureImageUrl, loadFeatureImage } = useFeatureImage();

	// Features data - Computed features with dynamic color
	const features = computed(() => getFeaturesConfig(colorFill.value));

	// Background style
	const backgroundStyle = computed(() => ({
		backgroundImage: `linear-gradient(
		to right bottom, 
        rgba(249, 83, 199, 0.5), 
        rgba(0, 50, 1, 0.8)), 
		url(${featureImageUrl.value})`
	}));

	// Initialize component
	onMounted(async () => {
		await loadFeatureImage();
	});

</script>

<style lang="scss" scoped>
	@use '@/sass/components/_features';
</style>
