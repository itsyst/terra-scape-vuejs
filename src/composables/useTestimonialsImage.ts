import { ref } from 'vue';
import { useCloudinaryImage } from './useCloudinaryImage';

export function useTestimonialsImage() {
    const testimonialsImageUrl = ref('');
    const { fetchImage } = useCloudinaryImage();

    const loadTestimonialsImage = async () => {
        testimonialsImageUrl.value = await fetchImage('TESTIMONIALS', {
            width: 900,
            height: 600,
            crop: 'scale',
        });
    };

    return { testimonialsImageUrl, loadTestimonialsImage };
}