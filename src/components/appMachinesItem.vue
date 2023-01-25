<template>
	<div class="machine-item flex-column" @click="pushToCatalog">
		<h3>{{ title }}</h3>
		<div class="image-machine">
			<img :src="imageComputed" :alt="title" />
		</div>
		<app-hidden-item
			:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
	</div>
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'

export default {
	name: 'AppMachinesItem',
	components: {
		appHiddenItem,
	},
	props: {
		id: {
			type: Number,
			default: 0,
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
	emits: ['close'],
	computed: {
		imageComputed() {
			if (this.image === 'no-image') {
				return require('../assets/no-image.jpg')
			} else if (this.image.includes(this.$store.state.server_media.slice(0, -1))) {
				return this.image
			} else {
				return this.$store.state.server_media.slice(0, -1) + this.image
			}
		},
	},
	methods: {
		pushToCatalog() {
			this.$emit('close')
			this.$router.push(`/catalog/${this.id}`)
			window.scrollTo(0, 0)
		},
	},
}
</script>

<style scoped>
.machine-item {
	flex-grow: 1;
	height: 15rem;
	padding: 1rem;
	margin: 1rem;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
}
.machine-item h3 {
	font-size: 1rem;
	align-self: auto;
}
.machine-item:hover .hidden-item {
	opacity: 1;
}
.machine-item:hover > h3,
.machine-item:hover > img {
	transition: all 0.4s;
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}
.image-machine {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.machine-item img {
	margin-top: 1rem;
	max-width: 9rem;
}

@media (max-width: 980px) {
	.machine-item {
		width: 100%;
		height: 15rem;
		margin: 0.5rem;
	}
}
</style>
