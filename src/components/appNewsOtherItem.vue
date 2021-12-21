<template>
	<div class="small-other-news flex-column">
		<div class="image-news card-shadow" @click="routerPush(id)">
			<img :src="image" :alt="id" />
			<div class="hidden-item">
				<div class="hidden-text">
					<img src="../assets/eye.png" alt="show eye" />
				</div>
			</div>
		</div>
		<h4>{{ title }}</h4>
		<p v-html="text"></p>
	</div>
	<!-- /.small-title-news -->
</template>

<script>
export default {
	name: 'AppNewsOtherItem',
	props: {
		id: {
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
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(`/news/${path}`)
		},
	},
}
</script>

<style scoped>
.small-other-news {
	justify-content: flex-start;
	margin: 2rem 0;
	width: 31%;
}
.image-news {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	height: 15rem;
	position: relative;
}
.image-news img {
	max-width: 100%;
	max-height: 100%;
}
.image-news:hover .hidden-item {
	opacity: 1;
}
.image-news:hover > img {
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
	background: rgba(106, 106, 106, 0.8);
	box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	transition: opacity 0.5s;
	opacity: 0;
}
.hidden-item img {
	width: auto;
	height: auto;
}
.hidden-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}
@media (max-width: 980px) {
	.small-other-news {
		width: 100%;
	}
	.small-other-news h4 {
		margin: 1rem 0;
	}
	.small-other-news p {
		margin: 0;
	}
}
</style>
