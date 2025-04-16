<!-- src/components/Bookings.vue -->
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
				@open-popup="openPopup"
			/>
		</div>
		<BookingPopup
			:isVisible="!!selectedBooking"
			:formData="formData"
			@close="closePopup"
			@submit="handlePopupSubmit"
		/>
	</section>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import BookingCard from './booking-card.vue';
	import BookingPopup from './booking-popup.vue';
	import type { Booking } from '../types/booking';
	import { usePayPal } from '../composables/usePayPal';
	import { useFetchBookings } from '../composables/useFetchBookings';

	const { bookings, loadBookings } = useFetchBookings();
	const { initializePayment } = usePayPal();

	const selectedBooking = ref<Booking | null>(null);
	const formData = ref({
		name: '',
		email: ''
	});

	const openPopup = (booking: Booking) => {
		selectedBooking.value = booking;
	};

	const closePopup = () => {
		selectedBooking.value = null;
		formData.value.name = '';
		formData.value.email = '';
	};

	const handlePopupSubmit = async (submittedFormData: {
		name: string;
		email: string;
	}) => {
		if (selectedBooking.value) {
			formData.value.name = submittedFormData.name;
			formData.value.email = submittedFormData.email;
			await initializePayment(selectedBooking.value.price);
			closePopup();
		}
	};

	onMounted(() => {
		loadBookings();
	});
</script>

<style lang="scss" scoped>
	@use '@/sass/components/_bookings';
</style>
