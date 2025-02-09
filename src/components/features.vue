<template>
	<div class="feature">
		<div class="feature__cards">
			<div
				v-for="(feature, index) in features"
				:key="index"
				class="feature__card"
			>
				<div class="feature__card--content">
					<OhVueIcon
						:name="feature.icon"
						:fill="feature.fill"
						:scale="feature.scale"
					/>

					<p class="feature__card--description">{{ feature.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { OhVueIcon, addIcons } from 'oh-vue-icons';
	import {
		BiGlobe,
		GiCompass,
		OiRocket,
		LaMapMarkedAltSolid,
		RiMentalHealthLine
	} from 'oh-vue-icons/icons';
	import { onMounted, ref } from 'vue';

	const colorFill = ref('#f953c7');
	interface Feature {
		icon: string;
		fill: string;
		scale?: number;
		description: string;
	}
	const features = ref<Feature[]>([]);

	addIcons(
		BiGlobe,
		GiCompass,
		LaMapMarkedAltSolid,
		RiMentalHealthLine,
		OiRocket
	);

	onMounted(async () => {
		try {
			// Update the tours array with dynamic image objects
			features.value = [
				{
					icon: 'bi-globe',
					fill: colorFill.value,
					scale: 2,
					description:
						'Utforska världen med våra globala tjänster. Få tillgång till internationella resurser och information.'
				},
				{
					icon: 'gi-compass',
					fill: colorFill.value,
					scale: 2.3,
					description:
						'Navigera enkelt med avancerade kompassverktyg. Hitta rätt väg var som helst i världen.'
				},
				{
					icon: 'la-map-marked-alt-solid',
					fill: colorFill.value,
					scale: 2,
					description:
						'Peka ut platser exakt med detaljerade kartor. Lätta att använda för alla destinationer.'
				},
				{
					icon: 'oi-rocket',
					fill: colorFill.value,
					scale: 2,
					description:
						'Driv framtidens innovationer. Uppnå nya höjder med vårt fortsatta teknologiska framsteg.'
				},
				{
					icon: 'ri-mental-health-line',
					fill: colorFill.value,
					scale: 2,
					description:
						'Framtvinga mentalt välbefinnande genom våra hälsfokuserade initiativ. Stöd och hjälp när du behöver det.'
				}
			];
		} catch (error) {
			console.error((error as any).message);
		}
	});
</script>

<style lang="scss" scoped>
	@use '@/sass/components/_features';
</style>
