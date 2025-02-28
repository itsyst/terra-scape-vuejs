// src/constants/features.ts
import type { MenuHamburger } from '../types/menu-hamburger';

export const getMenuConfig = (color: string): MenuHamburger[] => [
	{
		icon: 'gi-hamburger-menu',
		fill: color,
		scale: 1.6
	}
];
