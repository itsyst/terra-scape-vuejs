export type TestimonialType =
	| 'TESTIMONIAL01'
	| 'TESTIMONIAL02'
	| 'TESTIMONIAL03'
	| 'TESTIMONIAL04'
	| 'TESTIMONIAL05'
	| 'TESTIMONIAL06';

export interface Testimonial {
	id: number;
	header: string;
	description: string;
	name: string;
	role: string;
	avatar?: string;
	type: TestimonialType;
}
