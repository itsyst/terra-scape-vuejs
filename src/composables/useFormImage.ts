// src/composables/useHeroImage.ts
import { ref } from 'vue';
import type { FormImageType } from '../types/form';
import { storage } from '../utils/config';

export function useFormImage() {
    const formImageUrl = ref<string>('');
    const fallbackImage = import.meta.env.VITE_FALLBACK_IMAGE_URL;

    const loadFormImage = async (type: FormImageType = 'FORM') => {
        try {
            const fileId = import.meta.env[`VITE_APPWRITE_${type}_ID`];
            formImageUrl.value = await storage.getFilePreview(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileId
            );
        } catch (error) {
            console.error('Hero image load failed:', error);
            formImageUrl.value = fallbackImage;
        }
    };

    return { formImageUrl, loadFormImage};
}
