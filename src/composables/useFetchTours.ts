import { ref } from 'vue';
import { TOUR_CONFIG } from '../constants/tours';
import { useCloudinaryImage } from './useCloudinaryImage';
import type { Tour } from '../types/tours';

export function useFetchTours() {
	const tours = ref<Tour[]>([]);
	const { fetchImage } = useCloudinaryImage();

	const loadTours = async () => {
		try {
			// Generate image URLs for each tour
			const imagePromises = TOUR_CONFIG.map((tour) =>
				fetchImage(tour.type, {
					width: 800,
					height: 600,
					crop: 'scale',
				})
			);

			// Wait for all image URLs to be generated
			const images = await Promise.all(imagePromises);

			// Map configurations to tours with src URLs
			tours.value = TOUR_CONFIG.map((config, index) => ({
				...config,
				src: images[index],
			}));
		} catch (error) {
			console.error('Tour loading failed:', error);
			tours.value = [];
		}
	};

	return { tours, loadTours };
}