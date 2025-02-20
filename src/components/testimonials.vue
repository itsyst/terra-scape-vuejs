<template>
	<section class="testimonials" :style="backgroundStyle">
		<header class="testimonials__header">
			<h2 class="testimonials__title">Vad våra kunder säger om oss</h2>
		</header>

		<Carousel :items="testimonials" :items-per-view="2" :auto-play="3000">
			<template #default="{ item }">
				<div class="testimonial-card">
					<div class="testimonial-card__content">
						<p class="testimonial-card__text">"{{ item.text }}"</p>
						<div class="testimonial-card__author">
							<img
								:src="item.src"
								loading="lazy"
								:alt="item.name"
								class="testimonial-card__avatar"
							/>
							<div class="author-info">
								<span class="author-name">{{ item.name }}</span>
								<span class="author-role">{{ item.role }}</span>
							</div>
						</div>
					</div>
				</div>
			</template>
		</Carousel>
	</section>
</template>

<script setup lang="ts">
	import Carousel from './carousel.vue';
	import { computed, onMounted } from 'vue';
	import { useFetchTestimonials } from '../composables/useFetchTestimonials';
	import { useTestimonialsImage } from '../composables/useTestimonialsImage';

	const { testimonials, loadTestimonials } = useFetchTestimonials();

	// Feature image handling
	const { testimonialsImageUrl, loadTestimonialsImage } = useTestimonialsImage();

	const backgroundStyle = computed(() => ({
		backgroundImage: `linear-gradient(
		to right bottom, 
        rgba(0, 50, 1, 0.1), 
        rgba(0, 50, 199, 0.1)), 
		url(${testimonialsImageUrl.value})`
	}));

	onMounted(async () => {
		await loadTestimonials();
		await loadTestimonialsImage();
	});
</script>

<style scoped lang="scss">
	@use '@/sass/components/_testimonials';
</style>
