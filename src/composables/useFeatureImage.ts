// src/composables/useFeatureImage.ts
import { ref } from 'vue';
import { storage } from '../utils/config';
 
export function useFeatureImage() {
    const featureImageUrl = ref('');
    const fallbackImage = import.meta.env.VITE_FALLBACK_IMAGE_URL;

    const loadFeatureImage = async () => {
        try {
            featureImageUrl.value = await storage.getFilePreview(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                import.meta.env.VITE_APPWRITE_FEATURES_ID
            );
        } catch (error) {
            console.error('Feature image load failed:', error);
            featureImageUrl.value = fallbackImage;
        }
    };

    return { featureImageUrl, loadFeatureImage };
}