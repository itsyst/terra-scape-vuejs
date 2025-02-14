// src/composables/useFetchTours.ts
import { ref } from 'vue';
import { TOUR_CONFIG } from '../constants/tours';
import type { Tour } from '../types/tours';
import { useImageFetcher } from './useImageFetcher';

export function useFetchTours() {
	const tours = ref<Tour[]>([]);
	const { fetchImage } = useImageFetcher();

	const loadTours = async () => {
		try {
			const imageRequests = TOUR_CONFIG.map((tour) => fetchImage(tour.type));

			const images = await Promise.all(imageRequests);

			tours.value = TOUR_CONFIG.map((config, index) => ({
				...config,
				src: images[index]
			}));
		} catch (error) {
			console.error('Tour loading failed:', error);
			tours.value = [];
		}
	};

	return { tours, loadTours };
}
