// src/constants/features.ts
import type { Feature } from "../types/feature";
 
export const getFeaturesConfig = (color: string): Feature[] => [
    {
        icon: 'bi-globe',
        fill: color,
        scale: 2,
        description:
            'Utforska världen med våra globala tjänster. Få tillgång till internationella resurser och information.'
    },
    {
        icon: 'gi-compass',
        fill: color,
        scale: 2.3,
        description:
            'Navigera enkelt med avancerade kompassverktyg. Hitta rätt väg var som helst i världen.'
    },
    {
        icon: 'la-map-marked-alt-solid',
        fill: color,
        scale: 2,
        description:
            'Peka ut platser exakt med detaljerade kartor. Lätta att använda för alla destinationer.'
    },
    {
        icon: 'oi-rocket',
        fill: color,
        scale: 2,
        description:
            'Driv framtidens innovationer. Uppnå nya höjder med vårt fortsatta teknologiska framsteg.'
    },
    {
        icon: 'ri-mental-health-line',
        fill: color,
        scale: 2,
        description:
            'Framtvinga mentalt välbefinnande genom våra hälsfokuserade initiativ. Stöd och hjälp när du behöver det.'
    }
];