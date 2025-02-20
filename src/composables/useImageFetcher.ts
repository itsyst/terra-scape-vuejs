// composables/useImageFetcher.ts
import { storage } from '../utils/config';
import type { TourType } from "../types/tours";
import type { BookingType } from '../types/booking';
import type { TestimonialType } from '../types/testimonials';
 
export function useImageFetcher() {
    const fetchImage = async (tourType: TourType | BookingType | TestimonialType): Promise<string> => {
        try {
            const fileId = import.meta.env[`VITE_APPWRITE_${tourType}_ID`];
  
            return storage.getFilePreview(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileId
            );
        } catch (error) {
            console.error('Image load failed:', error);
            return import.meta.env.VITE_FALLBACK_IMAGE_URL;
        }
    };

    return { fetchImage };
}
 