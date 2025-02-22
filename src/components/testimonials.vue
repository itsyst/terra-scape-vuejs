<template>
	<section class="testimonials" :style="backgroundStyle">
		<header class="testimonials__header">
			<h2 class="testimonials__title">Vad våra kunder säger om oss</h2>
		</header>

		<Carousel :items="testimonials" :items-per-view="2" :auto-play="3000">
			<template #default="{ item }">
				<div class="testimonial-card">
					<div class="testimonial-card__content">
						<div class="testimonial-card__author">
							<figure class="testimonial-card__author-avatar">
								<img
									:src="item.src"
									loading="lazy"
									:alt="item.name"
									class="testimonial-card__author-avatar-img"
								/>
								<figcaption class="testimonial-card__author-caption">
									<span class="testimonial-card__author-caption--name">{{
										item.name
									}}</span>
									<span class="testimonial-card__author-caption--role">{{
										item.role
									}}</span>
								</figcaption>
							</figure>
						</div>
						<div class="testimonial-card__reflection">
							<h3 class="testimonial-card__reflection-header">{{
								item.header
							}}</h3>
							<p class="testimonial-card__reflection-description">
								❞{{ item.description }}❝
							</p>
						</div>
					</div>
				</div>
			</template>
		</Carousel>
	</section>
	<!-- Scroll Up Button -->
	<button class="testimonials__scroll-up" @click="scrollToHeader">
		<svg
			width="25"
			height="25"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-[2] relative"
		>
			<path d="M5 11L12 4M12 4L19 11M12 4V21" stroke="white"></path>
		</svg>
	</button>
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
		to right, 
        rgba(0, 50, 1, 0.5), 
        rgba(0, 50, 199, 0.5)), 
		url(${testimonialsImageUrl.value})`
	}));

	const scrollToHeader = () => {
		const header = document.getElementById('main-header');
		if (header) {
			header.scrollIntoView({ behavior: 'smooth' });
		}
	};
	onMounted(async () => {
		await loadTestimonials();
		await loadTestimonialsImage();
	});
</script>

<style scoped lang="scss">
	@use '@/sass/components/_testimonials';
</style>
