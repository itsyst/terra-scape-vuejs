<template>
	<footer class="footer">
		<section class="footer__newsletter-container">
			<div class="footer__newsletter-info">
				<div class="footer__logo">
					<Logo :color="logoColor" :fill="logoFill" :stroke="strokeColor" />
				</div>
				<p class="footer__desc">
					Få de senaste nyheterna om våra naturäventyr. Vi lovar att hålla din
					e-post säker och privat – ingen delning, inga annonser, bara
					fantastiska upplevelser.
				</p>
			</div>

			<div class="footer__newsletter-form">
				<form
					id="newsletter-form"
					class="footer__newsletter-form"
					@submit.prevent="handleNewsletterSubmit"
				>
					<fieldset class="footer__newsletter-form--content">
						<label for="id_email">Din e-postadress:</label>
						<input
							type="email"
							name="email"
							required
							maxlength="320"
							placeholder="namn@example.com"
							id="id_email"
							v-model="email"
						/>
						<p v-if="successMessage" class="success-message">{{
							successMessage
						}}</p>
						<p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
					</fieldset>

					<div v-if="subscriptionStatus" class="subscription-message">
						{{ subscriptionStatus }}
					</div>

					<p class="footer__newsletter-form--content-submit">
						<button
							type="submit"
							id="newsletter-submit"
							class="button"
							:disabled="isSubmitting"
						>
							{{ isSubmitting ? 'Subscribing...' : 'Prenumerera' }}
						</button>
					</p>
				</form>
			</div>
		</section>

		<!-- Info Section -->
		<section class="footer__newsletter-container">
			<nav class="footer__nav">
				<ul class="footer__nav-items">
					<li class="footer__nav-item">
						<router-link href="/about" class="footer__nav-item--link"
							>Om oss</router-link
						> </li
					>|
					<li class="footer__nav-item">
						<router-link to="/contact" class="footer__nav-item--link"
							>Kontakta oss</router-link
						> </li
					>|
					<li class="footer__nav-item">
						<router-link to="/policy" class="footer__nav-item--link"
							>Sekretesspolicy</router-link
						>
					</li>
				</ul>
			</nav>

			<div class="footer__touch">
				<div class="footer__copyright">
					<p>
						SKAPAD av
						<a class="footer__author" href="https://elhamzi.me/" target="_blank">
							Khaled El Hamzi
						</a>
						| Copyright &copy; TERRA SCAPE. Alla rättigheter förbehållna.
					</p>
				</div>

				<!-- Social Media Links -->
				<div class="footer__social-media">
					<div
						v-for="(link, index) in socialMediaLinks"
						:key="index"
						class="footer__social-media-icon"
					>
						<a
							:href="link.url"
							target="_blank"
							class="footer__social-media-link"
							aria-label="Social Media Link"
						>
							<OhVueIcon
								:name="link.icon"
								:fill="link.fill"
								:scale="link.scale"
							/>
						</a>
					</div>
				</div>
			</div>
			<!-- Scroll Up Button -->
			<button class="footer__scroll-up" @click="scrollToHeader">
				<svg
					width="25"
					height="25"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-[2] relative"
				>
					<path d="M5 11L12 4M12 4L19 11M12 4V21" stroke="white"></path>
				</svg>
			</button>
		</section>
	</footer>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	import Logo from './logo.vue';
	import { useIcons } from '../composables/useIcons';
	import { OhVueIcon } from 'oh-vue-icons';
	import { getSocialMediaConfig } from '../constants/social-media';

	// Define reactive variables for the logo's color and fill
	const logoColor = ref('#f953c7');
	const logoFill = ref('none');
	const strokeColor = ref('none');
	const colorFill = ref('#f953c7');

	// Initialize icons (make sure to add both feature and social icons)
	const { featureIcons, socialMediaIcons } = useIcons();
	featureIcons();
	socialMediaIcons();

	// Computed Social Media configuration with dynamic color
	const socialMediaLinks = computed(() => getSocialMediaConfig(colorFill.value));

	const email = ref('');
	const successMessage = ref('');
	const errorMessage = ref('');
	const isSubmitting = ref(false);
	const subscriptionStatus = ref('');

	const handleNewsletterSubmit = async () => {
		isSubmitting.value = true;

		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Reset form
		const form = document.getElementById('newsletter-form') as HTMLFormElement;
		if (form) form.reset();

		// Show success message
		subscriptionStatus.value = 'Tack för din prenumeration!';
		isSubmitting.value = false;

		// Clear message after 5 seconds
		setTimeout(() => {
			subscriptionStatus.value = '';
		}, 5000);
	};

	const scrollToHeader = () => {
		const header = document.getElementById('home');
		if (header) {
			header.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<style scoped lang="scss">
	@use '@/sass/components/_footer';
</style>
