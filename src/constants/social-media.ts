// src/constants/features.ts
import type { SocialMedia } from "../types/social-media";
 
export const getSocialMediaConfig = (color: string): SocialMedia[] => [
    {
        icon: 'bi-github',
        fill: color,
        scale: 1.6,
        url: 'https://github.com/itsyst'
    },
    {
        icon: 'bi-linkedin',
        fill: color,
        scale: 1.6,
        url: 'https://www.linkedin.com/in/khaledelhamzi/'

    },
    {
        icon: 'bi-x-square-fill',
        fill: color,
        scale: 1.6,
        url: 'https://x.com/khaledelhamzi'

    }
];