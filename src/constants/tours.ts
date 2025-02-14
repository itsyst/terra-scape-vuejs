// src/constants/tours.ts
import type { Tour } from "../types/tours";
 
export const TOUR_CONFIG: Omit<Tour, 'src'>[] = [
    {
        title: 'Sjöarnas Mysterier – Bli En Pirat!',
        description: ' Höj seglet och ge dig ut på ett äventyr bortom horisonten. Här härskar inga lagar, endast friheten och vinden. Navigera genom stormiga hav, leta efter skatter och låtsas att du är en del av en legend. Det här är mer än en resa – det är en utforskning av det okända.',
        alt: 'Ett majestätiskt piratskepp',
        type: 'PIRATE'
    },
    {
        title: 'Upptäck Bergens Hjärta – På Riktigt!',
        description: 'Hajka genom mossiga skogar, klättra över stup och njut av utsikten där himlen möter bergen. Det här är ingen vanlig promenad – det är en riktig naturtrip där varje steg tar dig djupare in i vildmarkens själ. Skogen andas, sjöarna glittrar och bergen väntar på att bli erövrade.',
        alt: 'Majestätiska berg',
        type: 'MOUNTAIN'
    },
    {
        title: 'Vattenfallen Kallar – Hoppa In!',
        description: 'Känn kylan prickla på din hud när du utforskar vattendrag som dansar mellan klippor och sten. Vattnet är inte bara vackert – det är fullmatat med action! Bad, paddla eller bara ta det där perfekta instagrammomet – det är ditt kall.',
        alt: 'Vattenfall som dansar mellan klippor',
        type: 'WATERFALL'
    },
    {
        title: 'Skogens Hemligheter – Låt Dig Förföras!',
        description: 'Gå från stigen och in i det vilda. Här finns inga regler, bara äventyr. Smyka dig förbi gömda sjöar, plocka bär och låtsas att du är en del av något större. Det här är mer än en tur – det är en resa tillbaka till vad som är riktigt.',
        alt: 'Djupa skogar med gömda hemligheter',
        type: 'CAMPING'
    }
];