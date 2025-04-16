// src/composables/useHeroImage.ts
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { ref } from 'vue';
import type { FormImageType } from '../types/form';
// Initialize Cloudinary with cloud name from environment variables
const cld = new Cloudinary({
	cloud: {
		cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
	},
	url: {
		secure: true // Force HTTPS
	}
});

export function useFormImage() {
	const formImageUrl = ref<string>('');
	const fallbackImage = import.meta.env.VITE_FALLBACK_IMAGE_URL;

	const loadFormImage = async (type: FormImageType = 'FORM') => {
		try {
			// Get the Cloudinary public ID from environment variables
			const envKey = `VITE_CLOUDINARY_${type}_ID`;
			const publicId = import.meta.env[envKey];

			if (!publicId) {
				throw new Error(`Public ID not found for ${type}`);
			}

			// Generate Cloudinary URL with proper transformations
			const image = cld
				.image(publicId)
				.resize(scale()) // Auto-scale for hero image
				.quality('auto') // Auto-optimize quality (q_auto)
				.format('auto'); // Auto-select format (f_auto)

			const imageUrl = image.toURL();

			// Verify if the image exists
			const response = await fetch(imageUrl, { method: 'HEAD' });
			if (!response.ok) {
				throw new Error(`Hero image not found for ${publicId}`);
			}

			formImageUrl.value = response.url || imageUrl;
		} catch (error) {
			console.error('Hero image load failed:', error);
			formImageUrl.value = fallbackImage;
		}
	};

	return { formImageUrl, loadFormImage };
}
