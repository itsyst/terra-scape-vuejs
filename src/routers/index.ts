import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../components/home.vue'; // New component
import About from '../pages/about.vue';
import Contact from '../pages/contact.vue';
import Policy from '../pages/policy.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: Home // New home page
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},
	{
		path: '/policy',
		name: 'policy',
		component: Policy
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash, // Scroll to the element with the matching ID
				behavior: 'smooth'
			};
		}
		return { top: 0 };
	}
});

export default router;
