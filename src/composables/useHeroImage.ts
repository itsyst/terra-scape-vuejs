import { ref } from 'vue';
import { useCloudinaryImage } from './useCloudinaryImage';
import type { HeroImageType } from '../types/hero';

export function useHeroImage() {
	const headerImageUrl = ref<string>('');
	const { fetchImage } = useCloudinaryImage();

	const loadHeroImage = async (type: HeroImageType = 'HERO') => {
		headerImageUrl.value = await fetchImage(type, {
			width: 920,
			height: 600,
			crop: 'scale',
		});
	};

	return { headerImageUrl, loadHeroImage };
}