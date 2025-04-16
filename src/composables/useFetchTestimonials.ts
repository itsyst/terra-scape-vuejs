import { ref } from 'vue';
import { TESTIMONIAL_CONFIG } from '../constants/testimonials';
import { useCloudinaryImage } from './useCloudinaryImage';
import type { Testimonial } from '../types/testimonials';

export function useFetchTestimonials() {
    const testimonials = ref<Testimonial[]>([]);
    const { fetchImage } = useCloudinaryImage();

    const loadTestimonials = async () => {
        try {
            // Generate image URLs for each testimonial
            const imagePromises = TESTIMONIAL_CONFIG.map((testimonial) =>
                fetchImage(testimonial.type, {
                    width: 100,
                    height: 100,
                    crop: 'scale',
                })
            );

            // Wait for all image URLs to be generated
            const images = await Promise.all(imagePromises);

            // Map configurations to testimonials with src URLs
            testimonials.value = TESTIMONIAL_CONFIG.map((config, index) => ({
                ...config,
                src: images[index],
            }));
        } catch (error) {
            console.error('Testimonials loading failed:', error);
            testimonials.value = [];
        }
    };

    return { testimonials, loadTestimonials };
}