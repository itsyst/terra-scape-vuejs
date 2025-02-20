<!-- CustomCarousel.vue -->
<template>
	<div class="carousel">
		<div class="carousel__wrapper" ref="wrapper">
			<div
				class="carousel__inner"
				:style="{
					transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
					transition: isAnimating ? 'transform 0.5s ease' : 'none'
				}"
			>
				<div
					v-for="item in items"
					:key="item.id"
					class="carousel__item"
					:style="{ width: `${100 / itemsPerView}%` }"
				>
					<slot :item="item"></slot>
				</div>
			</div>
		</div>

		<button
			class="carousel__nav carousel__nav--prev"
			@click="prev"
			:disabled="currentIndex === 0"
		>
			&#10094;
		</button>
		<button
			class="carousel__nav carousel__nav--next"
			@click="next"
			:disabled="currentIndex >= items.length - itemsPerView"
		>
			&#10095;
		</button>

		<div class="carousel__dots">
			<span
				v-for="(_, index) in Math.ceil(items.length / itemsPerView)"
				:key="index"
				class="carousel__dot"
				:class="{
					'carousel__dot--active':
						index === Math.floor(currentIndex / itemsPerView)
				}"
				@click="goTo(index * itemsPerView)"
			></span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue';

	const props = defineProps<{
		items: any[];
		itemsPerView: number;
		autoPlay?: number;
	}>();

	const currentIndex = ref(0);
	const isAnimating = ref(false);
	let autoPlayInterval: number | null = null;

	const next = () => {
		const maxIndex = props.items.length - props.itemsPerView;
		isAnimating.value = true;
		if (currentIndex.value < maxIndex) {
			currentIndex.value += 1;
		} else {
			currentIndex.value = 0;
		}
		resetAnimation();
	};

	const prev = () => {
		if (currentIndex.value > 0) {
			isAnimating.value = true;
			currentIndex.value -= 1;
			resetAnimation();
		}
	};

	const goTo = (index: number) => {
		if (index >= 0 && index <= props.items.length - props.itemsPerView) {
			isAnimating.value = true;
			currentIndex.value = index;
			resetAnimation();
		}
	};

	const resetAnimation = () => {
		setTimeout(() => {
			isAnimating.value = false;
		}, 500);
	};

	const startAutoPlay = () => {
		stopAutoPlay();
		if (props.autoPlay && props.items.length > props.itemsPerView) {
			autoPlayInterval = setInterval(() => {
				if (currentIndex.value >= props.items.length - props.itemsPerView) {
					currentIndex.value = 0;
				} else {
					next();
				}
			}, props.autoPlay);
		}
	};

	const stopAutoPlay = () => {
		if (autoPlayInterval) {
			clearInterval(autoPlayInterval);
			autoPlayInterval = null;
		}
	};

	onMounted(() => startAutoPlay());
	onUnmounted(() => stopAutoPlay());
</script>

<style scoped lang="scss">
	@use '@/sass/components/_carousel';
</style>
