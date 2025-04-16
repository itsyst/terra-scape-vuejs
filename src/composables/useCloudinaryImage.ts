import { Cloudinary } from '@cloudinary/url-gen';
import { fill, fit, scale } from '@cloudinary/url-gen/actions/resize';
import type { ImageType } from '../types/ImageType';

// Initialize Cloudinary with cloud name from environment variables
const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
    url: {
        secure: true, // Force HTTPS
    },
});

export function useCloudinaryImage() {
    const fetchImage = async (
        imageType: ImageType,
        options: {
            width?: number;
            height?: number;
            crop?: 'scale' | 'fill' | 'fit';
        } = {}
    ): Promise<string> => {
        try {
            // Map imageType to the corresponding .env variable
            const envKey = `VITE_CLOUDINARY_${imageType}_ID`;
            const publicId = import.meta.env[envKey];

            if (!publicId) {
                throw new Error(`Public ID not found for ${imageType}`);
            }

            // Generate Cloudinary URL with transformations
            const image = cld.image(publicId).quality('auto').format('auto');

            // Apply resize transformation if dimensions provided
            if (options.width || options.height) {
                if (options.crop === 'fill') {
                    image.resize(
                        fill()
                            .width(options.width ?? 0)
                            .height(options.height ?? 0)
                    );
                } else if (options.crop === 'fit') {
                    image.resize(
                        fit()
                            .width(options.width ?? 0)
                            .height(options.height ?? 0)
                    );
                } else {
                    image.resize(
                        scale()
                            .width(options.width ?? 0)
                            .height(options.height ?? 0)
                    );
                }
            }

            const imageUrl = image.toURL();

            // Verify image existence and get corrected URL
            const response = await fetch(imageUrl, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error(`Image not found for ${publicId}`);
            }

            return response.url || imageUrl;
        } catch (error) {
            console.error(`Image load failed for ${imageType}:`, error);
            return import.meta.env.VITE_FALLBACK_IMAGE_URL;
        }
    };

    return { fetchImage };
}