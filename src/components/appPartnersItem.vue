<template>
	<div class="partners-item">
		<img :src="imageComputed" :alt="alt" />
		<app-hidden-item
			:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
	</div>
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'

export default {
	name: 'AppPartnersItem',
	components: {
		appHiddenItem,
	},
	props: {
		image: {
			type: String,
			default: '',
		},
		alt: {
			type: String,
			default: '',
		},
	},
	computed: {
		imageComputed() {
			if (this.image.includes('http://bexram.online:8001')) {
				return this.image
			} else {
				return 'http://bexram.online:8001' + this.image
			}
		},
	},
}
</script>

<style scoped>
.partners-item {
	flex-grow: 1;
	width: 25%;
	height: 8rem;
	padding: 1rem;
	margin: 1rem;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
}
.partners-item:hover .hidden-item {
	opacity: 1;
}
.partners-item:hover img {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.partners-item img {
	max-width: 10rem;
	max-height: 5rem;
}
@media (max-width: 1248px) {
	.partners-item {
		width: auto;
		height: 7rem;
	}
}
</style>
