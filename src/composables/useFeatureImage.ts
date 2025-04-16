import { ref } from 'vue';
import { useCloudinaryImage } from './useCloudinaryImage';

export function useFeatureImage() {
    const featureImageUrl = ref('');
    const { fetchImage } = useCloudinaryImage();

    const loadFeatureImage = async () => {
        featureImageUrl.value = await fetchImage('FEATURES', {
            width: 1200, // Adjust as needed
            height: 600,
            crop: 'scale',
        });
    };

    return { featureImageUrl, loadFeatureImage };
}