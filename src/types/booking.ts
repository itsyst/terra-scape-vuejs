// types/booking.ts

import type { ImageType } from "./ImageType";

export interface Booking {
    heading: string;
    title: string;
    description: string;
    src: string;
    alt: string;
    duration: number;
    capacity: number;
    guides: number;
    sleeping: string;
    price: number;
    backgroundColor: string;
    type: ImageType;
}