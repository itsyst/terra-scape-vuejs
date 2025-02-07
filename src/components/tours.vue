<template>
	<section class="tour">
		<h2 class="tour__heading">Äventyrs-hajk för de som vågar!</h2>
		<div class="tour__cards">
			<!-- <div v-for="(tour, index) in tours" :key="index" class="tour__card" :class="`tour__card--shape-${index + 1}`"> -->
			<div v-for="(tour, index) in tours" :key="index" class="tour__card">
				<div class="tour__card">
					<img
						:src="tour.src"
						loading="lazy"
						class="tour__card--image"
						alt="tour.alt"
					/>
					<div class="tour__card--content">
						<h2 class="tour__card--title">{{ tour.title }}</h2>
						<p class="tour__card--description">{{ tour.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { storage } from '../appwrite/config';

	interface Tour {
		title: string;
		description: string;
		src: string;
		alt: string;
	}

	const tours = ref<Tour[]>([]);

	const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;
	const WF_ID = import.meta.env.VITE_APPWRITE_WF_ID;
	const MO_ID = import.meta.env.VITE_APPWRITE_MO_ID;
	const CI_ID = import.meta.env.VITE_APPWRITE_CI_ID;
	const PI_ID = import.meta.env.VITE_APPWRITE_PI_ID;
	const fallbackImageUrl = import.meta.env.VITE_FALLBACK_IMAGE_URL;
  
	onMounted(async () => {
		try {
			// Fetch image URLs from Appwrite using the provided IDs
	        const waterfallImage = await fetchImage({ bucketId: BUCKET_ID, fileId: WF_ID });
	        const mountainImage = await fetchImage({ bucketId: BUCKET_ID, fileId: MO_ID });
	        const campingImage = await fetchImage({ bucketId: BUCKET_ID, fileId: CI_ID });
	        const pirateImage = await fetchImage({ bucketId: BUCKET_ID, fileId: PI_ID });

			// Update the tours array with dynamic image objects
			tours.value = [
				{
					title: 'Sjöarnas Mysterier – Bli En Pirat!',
					description:
						' Höj seglet och ge dig ut på ett äventyr bortom horisonten. Här härskar inga lagar, endast friheten och vinden. Navigera genom stormiga hav, leta efter skatter och låtsas att du är en del av en legend. Det här är mer än en resa – det är en utforskning av det okända.',
					src: pirateImage || fallbackImageUrl,
					alt: 'Ett majestätiskt piratskepp'
				},
				{
					title: 'Upptäck Bergens Hjärta – På Riktigt!',
					description:
						'Hajka genom mossiga skogar, klättra över stup och njut av utsikten där himlen möter bergen. Det här är ingen vanlig promenad – det är en riktig naturtrip där varje steg tar dig djupare in i vildmarkens själ. Skogen andas, sjöarna glittrar och bergen väntar på att bli erövrade.',
					src: mountainImage,
					alt: 'Majestätiska berg'
				},
				{
					title: 'Vattenfallen Kallar – Hoppa In!',
					description:
						'Känn kylan prickla på din hud när du utforskar vattendrag som dansar mellan klippor och sten. Vattnet är inte bara vackert – det är fullmatat med action! Bad, paddla eller bara ta det där perfekta instagrammomet – det är ditt kall.',
					src: waterfallImage,
					alt: 'Vattenfall som dansar mellan klippor'
				},
				{
					title: 'Skogens Hemligheter – Låt Dig Förföras!',
					description:
						'Gå från stigen och in i det vilda. Här finns inga regler, bara äventyr. Smyka dig förbi gömda sjöar, plocka bär och låtsas att du är en del av något större. Det här är mer än en tur – det är en resa tillbaka till vad som är riktigt.',
					src: campingImage,
					alt: 'Djupa skogar med gömda hemligheter'
				}
			];
		} catch (error) {
			console.error('Error fetching images from Appwrite:', error);
			tours.value = []; // Fallback if images cannot be loaded
		}
	});

 	const fetchImage = async ({ bucketId, fileId }: { bucketId: string; fileId: string; }): Promise<string> => {
	    try {
	        return await storage.getFilePreview(bucketId, fileId);
	    } catch (error) {
	        console.error('Error fetching image:', error);
	        return fallbackImageUrl;
	    }
	}
 
</script>

<style scoped lang="scss">
	@use '@/sass/components/_tours';
</style>
