// src/composables/useTestimonialsImage.ts
import { ref } from 'vue';
import { storage } from '../utils/config';
 
export function useTestimonialsImage() {
    const testimonialsImageUrl = ref('');
    const fallbackImage = import.meta.env.VITE_FALLBACK_IMAGE_URL;

    const loadTestimonialsImage = async () => {
        try {
            testimonialsImageUrl.value = await storage.getFilePreview(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                import.meta.env.VITE_APPWRITE_TESTIMONIALS_ID
            );
        } catch (error) {
            console.error('Feature image load failed:', error);
            testimonialsImageUrl.value = fallbackImage;
        }
    };

    return { testimonialsImageUrl, loadTestimonialsImage };
}