 // src/composables/useFetchBookings.ts
import { ref } from 'vue';
import { BOOKING_CONFIG } from '../constants/bookings';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import type { Booking } from '../types/booking';
 
// Initialize Cloudinary with cloud name from environment variables
const cld = new Cloudinary({
	cloud: {
		cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
	},
	url: {
		secure: true, // Force HTTPS
	},
});

export function useFetchBookings() {
	const bookings = ref<Booking[]>([]);
	const fallbackImage = import.meta.env.VITE_FALLBACK_IMAGE_URL;
 
	const loadBookings = async () => {
		try {
// Generate image URLs for each tour
			const imagePromises = BOOKING_CONFIG.map(async (booking) => {
				try {
					// Map tour.type to the corresponding .env variable
					const envKey = `VITE_CLOUDINARY_${booking.type}_ID`;
					const publicId = import.meta.env[envKey];

					if (!publicId) {
						throw new Error(`Public ID not found for ${booking.type}`);
					}

					// Generate Cloudinary URL with proper transformations
					const image = cld
						.image(publicId)
						.resize(scale().width(800).height(600)) // Fixed size for tour images
						.quality('auto') // Auto-optimize quality (q_auto)
						.format('auto'); // Auto-select format (f_auto)

					const imageUrl = image.toURL();

					// Verify image existence and get corrected URL
					const response = await fetch(imageUrl, { method: 'HEAD' });
					if (!response.ok) {
						throw new Error(`Image not found for ${publicId}`);
					}

					return response.url || imageUrl;
				} catch (error) {
					console.error(`Failed to load image for ${booking.type}:`, error);
					return fallbackImage;
				}
			});

			// Wait for all image URLs to be generated
			const images = await Promise.all(imagePromises);

			// Map configurations to bookings with src URLs
			bookings.value = BOOKING_CONFIG.map((config, index) => ({
				...config,
				src: images[index],
			}));
		} catch (error) {
			console.error('Booking loading failed:', error);
			bookings.value = [];
		}
	};

	return { bookings, loadBookings };
}
