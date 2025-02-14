<template>
	<div class="booking__card">
		<div class="booking__card--front">
			<div class="booking__card--front-overlay" :style="backgroundStyle"></div>
			<div class="booking__card--front-content">
				<h2 class="booking__card--front-heading">
					<span
						class="booking__card--front-heading-label"
						:style="{ backgroundColor: booking.backgroundColor }"
						>{{ booking.heading }}</span
					>
				</h2>
				<ul class="booking__card--front-details">
					<span class="booking__card--front-details-title">{{
						booking.title
					}}</span>
					<li class="booking__card--front-details-1"
						>{{ booking.duration }} dagars bokning</li
					>
					<li class="booking__card--front-details-2"
						>Upp till {{ booking.capacity }} personer</li
					>
					<li class="booking__card--front-details-3"
						>{{ booking.guides }} guider</li
					>
					<li class="booking__card--front-details-4">{{ booking.sleeping }}</li>
				</ul>
			</div>
		</div>
		<div
			class="booking__card--back"
			:style="{
				backgroundImage: `linear-gradient(to right bottom, rgb(249, 83, 199, .3), ${booking.backgroundColor}`
			}"
		>
			<h2 class="booking__card--back-title">Fantastiska priset</h2>
			<p class="booking__card--back-intro">ligger bara på</p>
			<p class="booking__card--back-price">{{ booking.price }}&nbsp;Kr</p>
			<Button
				class="booking__button"
				text="Boka nu!"
				@click="emit('handlePayment', booking)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Button from './button.vue';
	import type { Booking } from '../types/booking';
	import { computed } from 'vue';

	const props = defineProps<{
		booking: Booking;
	}>();

	const emit = defineEmits<{
		(event: 'handlePayment', booking: Booking): void;
	}>();

	// Background style
	const backgroundStyle = computed(() => ({
		backgroundImage: `linear-gradient(
		to right bottom,
		rgb(249, 83, 199, .4),
		${props.booking.backgroundColor}), 
		url(${props.booking.src})`
	}));
</script>

<style scoped lang="scss">
	@use '@/sass/components/_bookings';
</style>
