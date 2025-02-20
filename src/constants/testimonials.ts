import type { Testimonial } from '../types/testimonials';

export const TESTIMONIAL_CONFIG: Omit<Testimonial, 'avatar'>[] = [
	{
		id: 1,
		text: 'Fantastisk service och otroligt kunnig personal! De löste vårt problem på nolltid.',
		name: 'Anna Svensson',
		role: 'VD, TechFlow AB',
		type: 'TESTIMONIAL03'
	},
	{
		id: 2,
		text: 'Produkten överträffade alla våra förväntningar. Supportteamet är i världsklass!',
		name: 'Erik Nilsson',
		role: 'IT-chef, Nordisk Lösningar',
		type: 'TESTIMONIAL01'
	},
	{
		id: 3,
		text: 'Ett nöje att samarbeta med detta företag. Alltid proffsiga och pålitliga.',
		name: 'Maria Lindberg',
		role: 'Marknadschef, Kreativ Media',
		type: 'TESTIMONIAL04'
	},
	{
		id: 4,
		text: 'Innovativa lösningar som verkligen gör skillnad för vår verksamhet.',
		name: 'Johan Eriksson',
		role: 'Entreprenör',
		type: 'TESTIMONIAL02'
	},
	{
		id: 5,
		text: 'Snabb respons och utmärkt kvalitet i allt de levererar. Rekommenderas starkt!',
		name: 'Karin Olsson',
		role: 'Projektledare, ByggVision',
		type: 'TESTIMONIAL05'
	},
	{
		id: 6,
		text: 'Exceptionell kundsupport och lösningar som förenklar vår vardag.',
		name: 'Lars Gustafsson',
		role: 'Verksamhetschef, Framtid Innovation',
		type: 'TESTIMONIAL06'
	}
];
