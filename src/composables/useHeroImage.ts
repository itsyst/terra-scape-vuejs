// src/composables/useHeroImage.ts
import { ref } from 'vue';
import type { HeroImageType } from '../types/hero';
import { storage } from '../utils/config';

export function useHeroImage() {
	const headerImageUrl = ref<string>('');
	const fallbackImage = import.meta.env.VITE_FALLBACK_HERO_IMAGE_URL;

	const loadHeroImage = async (type: HeroImageType = 'HERO') => {
		try {
			const fileId = import.meta.env[`VITE_APPWRITE_${type}_ID`];
			headerImageUrl.value = await storage.getFilePreview(
				import.meta.env.VITE_APPWRITE_BUCKET_ID,
				fileId
			);
		} catch (error) {
			console.error('Hero image load failed:', error);
			headerImageUrl.value = fallbackImage;
		}
	};

	return { headerImageUrl, loadHeroImage };
}
