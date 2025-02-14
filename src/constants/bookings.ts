// src/constants/bookings.ts
import type { Booking } from "../types/booking";

export const BOOKING_CONFIG: Omit<Booking, 'src'>[] = [
    {
        heading: 'Havets Mystiska Äventyr',
        title: 'Bli En Pirat!',
        description: 'Höj seglet och ge dig ut på ett äventyr...',
        alt: 'Ett majestätiskt piratskepp',
        duration: 3,
        capacity: 30,
        guides: 2,
        sleeping: 'Sova i bekväma hotell',
        price: 2980,
        backgroundColor: 'rgba(255, 0, 0, 1)',
        type: 'PIRATE'
    },
    {
        heading: 'Skogens Djupaste Hemligheter',
        title: 'Utforska Vägar!',
        description:
            'Gå från stigen och in i det vilda. Här finns inga regler, bara äventyr.',
        alt: 'Djupa skogar med gömda hemligheter',
        duration: 7,
        capacity: 40,
        guides: 6,
        sleeping: 'Sova i tillhandahållna tält',
        price: 4990,
        backgroundColor: 'rgba(0, 128, 0, 1)', // Green
        type: 'CAMPING'
    },
    {
        heading: 'Vinterlandets Snöiga Äventyr',
        title: 'Ett Utmanande Resa!',
        description:
            'Känn kylan prickla på din hud när du utforskar snöiga landskap och dansande vattendrag.',
         alt: 'Vattenfall som dansar mellan klippor',
        duration: 5,
        capacity: 15,
        guides: 3,
        sleeping: 'Sova i tillhandahållna tält',
        price: 8980,
        backgroundColor: 'rgba(0, 0, 255, 1)', // Blue
        type: 'SNOW'
    },
    {
        heading: 'Bergens Majestätiska Utsikter',
        title: 'Erövra Toppen!',
        description:
            'Upplev den spektakulära utsikten över Bergen och dess omgivningar. Klättra upp till toppen och njut av en oöverträffad vy över berg och daler.',
         alt: 'Majestätiska berg',
        duration: 4,
        capacity: 25,
        guides: 4,
        sleeping: 'Sova i bekväma hotell',
        price: 6960,
        backgroundColor: 'rgba(128, 0, 128, 1)', // Purple
        type: 'MOUNTAIN'
    }
     
];