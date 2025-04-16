// types/testimonials.ts

import type { ImageType } from "./ImageType";

export interface Testimonial {
	id: number;
	header: string;
	description: string;
	name: string;
	role: string;
	avatar?: string;
	type: ImageType;
}
