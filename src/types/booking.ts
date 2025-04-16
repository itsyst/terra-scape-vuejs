// types/booking.ts
export type BookingType = 'SNOW' | 'MOUNTAIN' | 'CAMPING' | 'PIRATE';

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
    type: BookingType;
}