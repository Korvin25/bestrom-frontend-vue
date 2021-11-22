<template>
	<div class="news-item-big flex-row card-shadow" @click="routerPush">
		<div class="about-content flex-column">
			<h4>{{ title }}</h4>
			<p class="text-about-content">{{ text }}</p>
		</div>
		<img class="news-item-big-image" :src="image" alt="news image" />
		<div class="hidden-item">
			<div class="hidden-text">
				<img src="../assets/eye.png" alt="show eye" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppMainNewsBigItem',
	props: {
		alt: {
			type: String,
			default: '',
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
			type: String,
			default: '',
		},
	},
	methods: {
		routerPush() {
			this.$router.push(`/news/${this.alt}`)
			window.scrollTo(0, 0)
		},
	},
}
</script>

<style scoped>
.news-item-big {
	width: 100%;
	flex-grow: 1;
	position: relative;
	justify-content: space-around;
	align-items: center;
}
.news-item-big-image {
	width: 100%;
	max-width: 15rem;
}
.hidden-item img {
	max-width: 398px;
	max-height: 320px;
	margin: 2rem;
}
.news-item-big:hover .hidden-item {
	opacity: 1;
}
.news-item-big:hover .about-content,
.news-item-big:hover .news-item-big-image {
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}
.hidden-item {
	position: absolute;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1rem;
	cursor: pointer;
	box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
	background: rgba(106, 106, 106, 0.8);
	border-radius: 6px;
	transition: opacity 0.4s;
	opacity: 0;
}
.hidden-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}
</style>
