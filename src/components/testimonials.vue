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
