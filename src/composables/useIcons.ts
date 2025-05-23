// src/composables/useIcons.ts
import { addIcons } from 'oh-vue-icons';
import {
    BiGlobe,
    GiCompass,
    OiRocket,
    LaMapMarkedAltSolid,
    RiMentalHealthLine,
    BiGithub,
    BiLinkedin,
    BiXSquareFill,
    GiHamburgerMenu,

} from 'oh-vue-icons/icons';

export function useIcons() {
    const featureIcons = () => {
        addIcons(
            BiGlobe,
            GiCompass,
            LaMapMarkedAltSolid,
            RiMentalHealthLine,
            OiRocket
        );
    };

    const socialMediaIcons = () => {
        addIcons(
            BiGithub,
            BiLinkedin,
            BiXSquareFill 
        );
    };

    const menuIcon = () => {
        addIcons(
            GiHamburgerMenu 
        );
    };

    return { featureIcons, socialMediaIcons, menuIcon };
}