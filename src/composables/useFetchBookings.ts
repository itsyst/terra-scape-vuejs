// src/composables/useFetchBookings.ts
import { ref } from 'vue';
import { useImageFetcher } from './useImageFetcher';
import type { Booking } from '../types/booking';
import { BOOKING_CONFIG } from '../constants/bookings';

export function useFetchBookings() {
	const bookings = ref<Booking[]>([]);
	const { fetchImage } = useImageFetcher();

	const loadBookings = async () => {
		try {
			const imageRequests = BOOKING_CONFIG.map((config) =>
				fetchImage(config.type)
			);

			const images = await Promise.all(imageRequests);

			bookings.value = BOOKING_CONFIG.map((config, index) => ({
				...config,
				src: images[index]
			}));
		} catch (error) {
			console.error('Booking loading failed:', error);
			bookings.value = [];
		}
	};

	return { bookings, loadBookings };
}
