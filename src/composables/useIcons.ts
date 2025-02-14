// src/composables/useIcons.ts
import { addIcons } from 'oh-vue-icons';
import {
    BiGlobe,
    GiCompass,
    OiRocket,
    LaMapMarkedAltSolid,
    RiMentalHealthLine
} from 'oh-vue-icons/icons';

export function useIcons() {
    const initializeIcons = () => {
        addIcons(
            BiGlobe,
            GiCompass,
            LaMapMarkedAltSolid,
            RiMentalHealthLine,
            OiRocket
        );
    };

    return { initializeIcons };
}