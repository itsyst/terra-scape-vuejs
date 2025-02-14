// src/types/tour.ts
export type TourType = 'PIRATE' | 'MOUNTAIN' | 'WATERFALL' | 'CAMPING';

export interface Tour {
    title: string;
    description: string;
    src: string;
    alt: string;
    type: TourType;
}