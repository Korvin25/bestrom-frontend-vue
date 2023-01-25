<template>
	<div class="details-select-products flex-row">
		<div
			v-for="item in productItems"
			:key="item.id"
			class="details-select-products-item card-shadow"
			@click="productItemsExample = item.ItemsExample">
			<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
			<img :src="$store.state.server_media.slice(0, -1) + item.img" :alt="item.alt" />
			<app-hidden-item
				:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"
				@click="
					showModalCallFunc($store.state.language === 'RU' ? item.name : item.name_en)
				"></app-hidden-item>
		</div>
	</div>
	<!-- /.details-select-products -->

	<transition name="modal">
		<app-modal-catalog-product-examples
			v-if="showModalCall"
			:title="productTitle"
			:product-examples="productItemsExample"
			@close="showModalCall = false"></app-modal-catalog-product-examples>
	</transition>
</template>

<script>
import appModalCatalogProductExamples from '../components/appModalCatalogProductExamples.vue'
import appHiddenItem from '../components/appHiddenItem.vue'

export default {
	name: 'AppDetailsSelectProducts',
	components: {
		appHiddenItem,
		appModalCatalogProductExamples,
	},
	props: {
		productItems: {
			type: Object,
			default: new Object(),
		},
	},
	data() {
		return {
			productTitle: '',
			productItemsExample: {},
			showModalCall: false,
		}
	},
	watch: {
		showModalCall() {
			if (this.showModalCall) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
	},
	methods: {
		showModalCallFunc(title) {
			this.showModalCall = true
			this.productTitle = title
		},
	},
}
</script>

<style scoped>
.details-select-products {
	margin: 2rem 1rem 0 1rem;
	flex-wrap: wrap;
	gap: 1rem 1rem;
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
}
.details-select-products-item:hover .hidden-item {
	opacity: 1;
}
.details-select-products-item:hover img,
.details-select-products-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-products-item img {
	align-self: center;
	max-width: 10rem;
	width: 100%;
}
.details-select-products-item h4 {
	font-weight: normal;
	margin-top: 0;
}
@media (max-width: 635px) {
	.details-select-products {
		gap: 1rem 1rem;
		height: auto;
		margin: 1rem 0 0 0;
		width: 100%;
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
