import type { Testimonial } from '../types/testimonials';

export const TESTIMONIAL_CONFIG: Omit<Testimonial, 'avatar'>[] = [
	{
		id: 1,
		header: 'Exceptional Service Speed 🚀',
		description:
			'We were blown away by the fantastic service and the incredible expertise of the staff! They tackled our issue with remarkable efficiency, resolving it in no time, which kept our operations running smoothly.',
		name: 'Anna Svensson',
		role: 'VD, TechFlow AB',
		type: 'TESTIMONIAL03'
	},
	{
		id: 2,
		header: 'Beyond Expectations 🤩',
		description:
			'The product far exceeded anything we had hoped for—it’s been a game-changer for us. On top of that, the support team is absolutely world-class, always ready to assist with unparalleled professionalism.',
		name: 'Erik Nilsson',
		role: 'IT-chef, Nordisk Lösningar',
		type: 'TESTIMONIAL01'
	},
	{
		id: 3,
		header: 'Reliable Partnership 🤝',
		description:
			'Working with this company has been an absolute pleasure. Their consistent professionalism and reliability have made them a trusted partner we can always count on for our business needs.',
		name: 'Maria Lindberg',
		role: 'Marknadschef, Kreativ Media',
		type: 'TESTIMONIAL04'
	},
	{
		id: 4,
		header: 'Impactful Innovation 💯',
		description:
			'Their innovative solutions have brought tangible improvements to our business operations. It’s rare to find such creativity and practical impact combined so seamlessly.',
		name: 'Johan Eriksson',
		role: 'Entreprenör',
		type: 'TESTIMONIAL02'
	},
	{
		id: 5,
		header: 'Top-Tier Delivery 💕',
		description:
			'The team’s quick response times and the outstanding quality of everything they deliver have left us thoroughly impressed. We can’t recommend them highly enough!',
		name: 'Karin Olsson',
		role: 'Projektledare, ByggVision',
		type: 'TESTIMONIAL05'
	},
	{
		id: 6,
		header: 'Simplifying Excellence 👍',
		description:
			'Their exceptional customer support paired with solutions that streamline our daily tasks have made a huge difference. They truly understand how to make our work easier and more effective.',
		name: 'Lars Gustafsson',
		role: 'Verksamhetschef, Framtid Innovation',
		type: 'TESTIMONIAL06'
	}
];
