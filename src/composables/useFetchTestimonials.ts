 // src/composables/useFetchTestimonials.ts
import { ref } from 'vue';
import { TESTIMONIAL_CONFIG } from '../constants/testimonials';
 import { useImageFetcher } from './useImageFetcher';
import type { Testimonial } from '../types/testimonials';

export function useFetchTestimonials() {
    const testimonials = ref<Testimonial[]>([]);
    const { fetchImage } = useImageFetcher();

    const loadTestimonials = async () => {
        try {
            const imageRequests = TESTIMONIAL_CONFIG.map((testimonial) => fetchImage(testimonial.type));

            const images = await Promise.all(imageRequests);

            testimonials.value = TESTIMONIAL_CONFIG.map((config, index) => ({
                ...config,
                src: images[index]
            }));
        } catch (error) {
            console.error('Tour loading failed:', error);
            testimonials.value = [];
        }
    };

    return { testimonials, loadTestimonials };
}
