<template>
	<div class="block-content flex-row">
		<div class="about-content flex-column">
			<h3>{{ title }}</h3>
			<p class="text-about-content">{{ text.split('/')[0] }}</p>
			<button class="btn" @click="routerPush(text.split('/')[1])">
				{{ $store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
			</button>
		</div>
		<img
			v-if="image.length > 0"
			class="content-image"
			:src="$store.state.server_media.slice(0, -1) + image[0].file"
			:alt="image[0].alt" />
	</div>
</template>

<script>
export default {
	name: 'AppMainSliderContent',
	props: {
		id: {
			type: Number,
			default: 0,
		},
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		image: {
			type: Object,
			default: new Object(),
		},
	},
	methods: {
		routerPush(path) {
			this.$router.push(`/${path}`)
			window.scrollTo(0, 0)
		},
	},
}
</script>

<style scoped>
.block-content {
	cursor: auto;
	align-items: center;
}
.content-image {
	width: 100%;
	max-width: 20rem;
}
.text-about-content {
	padding: 1rem 0;
	text-align: left;
}
@media (max-width: 1248px) {
	.block-content button,
	.content-image {
		display: none;
	}
	.about-content {
		text-align: left;
		margin: 1rem;
		width: 100%;
	}
}
</style>
