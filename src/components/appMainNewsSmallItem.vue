<template>
	<div class="news-small-item flex-column card-shadow" @click="routerPush">
		<h4>{{ title }}</h4>
		<img class="news-small-item-image" :src="image" alt="news image" />
		<div class="hidden-item">
			<div class="hidden-text">
				<img src="../assets/eye.png" alt="show eye" />
			</div>
		</div>
	</div>
	<!-- /.news-small-item -->
</template>

<script>
export default {
	name: 'AppMainNewsSmallItem',
	props: {
		slug: {
			type: String,
			default: '',
		},
		title: {
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
			this.$router.push(`/news/${this.slug}`)
			window.scrollTo(0, 0)
		},
	},
}
</script>

<style scoped>
.news-small-item {
	width: 20%;
	flex-grow: 1;
	position: relative;
	padding: 1rem 2rem;
	justify-content: space-between;
	align-items: center;
}
.news-small-item h4 {
	border-bottom: 1px solid #2fc1ff;
	padding-bottom: 1rem;
}
.news-small-item-image {
	margin-bottom: 2rem;
	max-width: 100%;
	max-height: 100%;
}
.hidden-item img {
	max-width: 398px;
	max-height: 320px;
}
.news-small-item:hover .hidden-item {
	opacity: 1;
}
.news-small-item:hover h4,
.news-small-item:hover .news-small-item-image {
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
