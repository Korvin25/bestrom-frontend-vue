<template>
	<div class="details-select-video">
		<div v-if="videos && videos.length > 0">
			<div v-for="item in videos" :key="item.id" class="details-select-video-item">
				<YouTube
					v-if="item.video.includes('youtube.com')"
					:src="item.video"
					ref="youtube"
					class="video-player"
					width="100%"
					height="315" />
				<iframe
					v-else
					class="video-player"
					width="100%"
					height="315"
					:src="'https://rutube.ru/play/embed/' + item.video"
					frameborder="0"
					allow="clipboard-write; autoplay"
					webkitallowfullscreen
					mozallowfullscreen
					allowfullscreen></iframe>
			</div>
		</div>
		<div v-else>
			<p>Для данного оборудования видео отсутствует</p>
		</div>
	</div>
</template>

<script>
import YouTube from 'vue3-youtube';

export default {
	name: 'AppDetailsSelectVideo',
	components: {
		YouTube,
	},
	props: {
		videos: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style scoped>
.details-select-video {
	margin: 2rem 1rem 0 1rem;
	width: calc(100% - 2rem);
}
.details-select-video-item {
	width: 100%;
	margin-bottom: 1rem;
}

@media (max-width: 980px) {
	.details-select-video {
		margin: 1rem 0;
		width: 100%;
	}
}
</style>
