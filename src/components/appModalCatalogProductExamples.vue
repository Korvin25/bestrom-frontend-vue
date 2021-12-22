<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>
				{{
					$store.state.language === 'RU'
						? 'Примеры порошкообразной продукции'
						: 'Examples of powdered products'
				}}
			</h2>
			<div class="details-select-products flex-row">
				<div
					v-for="item in productExamples"
					:key="item.id"
					class="details-select-products-item card-shadow">
					<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
					<img :src="$store.state.server.slice(0, -1) + item.img" :alt="item.alt" />
					<app-hidden-item
						:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'

export default {
	name: 'AppModalCatalogProductExamples',
	components: {
		appHiddenItem,
	},
	props: {
		productExamples: {
			type: Object,
			default: new Object(),
		},
	},
	emits: ['close'],
}
</script>

<style scoped>
h2 {
	text-align: center;
}
.details-select-products {
	margin-top: 2rem;
	flex-wrap: wrap;
}
.details-select-products-item {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 0.5rem 1rem;
	text-align: center;
	width: 20%;
	margin: 1rem;
}
.details-select-products-item:hover .hidden-item {
	opacity: 1;
}
.details-select-products-item img {
	align-self: center;
	max-width: 10rem;
	width: 100%;
}
.details-select-products-item:hover img,
.details-select-products-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-products-item h4 {
	font-weight: normal;
	margin-top: 0;
}
@media (max-width: 980px) {
	h2 {
		color: #6a6a6a;
	}
	.details-select-products {
		height: auto;
		margin: 0;
		gap: 1rem 1rem;
	}
	.details-select-products-item {
		margin: 0.5rem 0;
		width: 30%;
	}
	.details-select-products-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
}
</style>
