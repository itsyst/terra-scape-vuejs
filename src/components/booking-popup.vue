<!-- src/components/booking-popup.vue -->
<template>
	<Teleport to="#popup-root">
		<div v-if="isVisible" class="popup__overlay" @click.self="emit('close')">
			<section class="popup__content" :style="backgroundStyle">
				<div class="popup__form">
					<div class="popup__heading">
						<h2 class="popup__heading--title">Ditt äventyr väntar – boka nu!</h2>
					</div>
					<form @submit.prevent="handleSubmit" class="form">
						<div class="form__group">
							<input
								type="text"
								class="form__input"
								placeholder="Namn"
								id="name"
								v-model="localFormData.name"
								required
							/>
							<label for="name" class="form__label">Namn</label>
						</div>
						<div class="form__group">
							<input
								type="email"
								class="form__input"
								placeholder="E-postadress"
								id="email"
								v-model="localFormData.email"
								required
							/>
							<label for="email" class="form__label">E-postadress</label>
						</div>
						<div class="form__group form__group--radio">
							<div class="radio-container">
								<div class="radio-option">
									<input
										type="radio"
										class="form__radio-input"
										id="morning"
										name="time-slot"
										v-model="selectedTime"
										value="morning"
										required
									/>
									<label for="morning" class="form__radio-label">
										<span class="form__radio-button">
											<span class="form__radio-inner"></span>
										</span>
										<span class="radio-text">
											<span class="radio-title">Soluppgångens Pionjärer</span>
											<span class="radio-subtitle">Börja dagen med äventyr</span>
										</span>
									</label>
								</div>

								<div class="radio-option">
									<input
										type="radio"
										class="form__radio-input"
										id="evening"
										name="time-slot"
										v-model="selectedTime"
										value="evening"
										required
									/>
									<label for="evening" class="form__radio-label">
										<span class="form__radio-button">
											<span class="form__radio-inner"></span>
										</span>
										<span class="radio-text">
											<span class="radio-title">Skymningens Äventyrsgäng</span>
											<span class="radio-subtitle">Avsluta dagen magiskt</span>
										</span>
									</label>
								</div>
							</div>
						</div>
						<div class="form__group">
							<Button
								class="form__button"
								:animate="false"
								type="submit"
								text="Slutför bokningen"
							></Button>
						</div>
					</form>
				</div>
			</section>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	import { computed, onMounted, ref, watch } from 'vue';
	import { useFormImage } from '../composables/useFormImage';
	import Button from './button.vue';

	const props = defineProps<{
		isVisible: boolean;
		formData: { name: string; email: string; timeSlot?: string };
	}>();

	const emit = defineEmits<{
		(event: 'close'): void;
		(
			event: 'submit',
			formData: { name: string; email: string; timeSlot?: string }
		): void;
	}>();

	const localFormData = ref({ ...props.formData });
	const selectedTime = ref<string>('');

	// Form image
	const { formImageUrl, loadFormImage } = useFormImage();
	// Background style
	const backgroundStyle = computed(() => ({
		backgroundImage: `linear-gradient(
		101deg, 
		rgba(255, 255, 255, 0.9) 0%, 
		rgba(255, 255, 255, 0.9) 50%, 
		rgba(95, 18, 72, .1) 50%), 
		url(${formImageUrl.value})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '80vw',
		height: '80vh'
	}));

	const handleSubmit = () => {
		if (
			localFormData.value.name.trim().length > 1 &&
			localFormData.value.email &&
			selectedTime.value
		) {
			emit('submit', {
				...localFormData.value,
				timeSlot: selectedTime.value
			});
		}
	};

	watch(
		() => props.formData,
		(newFormData) => {
			localFormData.value = { ...newFormData };
		},
		{ deep: true }
	);

	// Initialize component
	onMounted(async () => {
		await loadFormImage();
	});
</script>

<style lang="scss" scoped>
	@use '@/sass/components/_popup';
</style>
