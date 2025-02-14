<!-- src/components/BookingSection.vue -->
<template>
	<section class="booking">
		<h2 class="booking__heading">
			Sveriges mest eftertraktade resor och äventyr!
		</h2>
		<div class="booking__cards">
			<BookingCard
				v-for="(booking, index) in bookings"
				:key="index"
				:booking="booking"
				@handle-payment="handlePayment"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import BookingCard from './booking-card.vue';
	import type { Booking } from '../types/booking';
	import { usePayPal } from '../composables/usePayPal';
	import { useFetchBookings } from '../composables/useFetchBookings';

	const { bookings, loadBookings } = useFetchBookings();
	const { initializePayment } = usePayPal();

	const handlePayment = async (booking: Booking) => {
		await initializePayment(booking.price);
	};

	onMounted(() => {
		loadBookings();
	});
</script>

<style lang="scss" scoped>
	@use '@/sass/components/_bookings';
</style>
