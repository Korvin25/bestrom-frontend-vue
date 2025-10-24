<template>
	<app-header></app-header>
	<main v-if="Object.keys(PRODUCT_ID).length > 0" class="main-content flex-column">
		<section class="section">
			<h2>{{ $store.state.language === 'RU' ? PRODUCT_ID.name : PRODUCT_ID.name_en }}</h2>

			<div class="slider-content card-shadow">
				<carousel
					v-if="PRODUCT_ID.SliderProd.length > 0"
					:items-to-show="1"
					:snap-align="'start'"
					:wrap-around="true">
					<slide v-for="slide in PRODUCT_ID.SliderProd" :key="slide.id">
						<img class="catalog-item-card-image" :src="imageComputed(slide.img)" :alt="slide.alt" />
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 1" />
						<pagination v-if="slidesCount > 1" />
					</template>
				</carousel>
				<div v-else class="flex-row else-flex">
					<img class="catalog-item-card-image" :src="require('../assets/no-image.jpg')" alt="no-image" />
				</div>
			</div>

			<div class="buttons-section catalog-ig-buttons flex-row">
				<button class="btn" @click="showModalCall = true">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
				<button class="btn" @click="showModalApplication = true">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ ЗАЯВКУ' : 'SEND AN APPLICATION' }}
				</button>
			</div>

			<div class="details flex-column card-shadow">
				<div class="desktop-section details-select flex-row">
					<div
						v-for="(item, index) in aboutItem"
						:key="index"
						:class="isSelected === index ? 'details-select-item-choice' : ''"
						class="details-select-item flex-column card-shadow"
						@click="isSelected = index">
						<img
							v-if="isSelected !== index"
							:src="require(`../assets/${item.disableImage}`)"
							alt="catalog-details" />
						<img
							v-if="isSelected === index"
							:src="require(`../assets/${item.activeImage}`)"
							alt="catalog-details" />
						<p>{{ $store.state.language === 'RU' ? item.title : item.title_en }}</p>
					</div>
				</div>
				<!-- /.details-select desktop-section -->

				<div class="mobile-section details-select">
					<carousel :snap-align="'center'" :items-to-show="1.6">
						<slide v-for="(item, index) in aboutItem" :key="index">
							<div
								:class="isSelected === index ? 'details-select-item-choice' : ''"
								class="details-select-item flex-column card-shadow"
								@click="isSelected = index">
								<img
									v-if="isSelected !== index"
									:src="require(`../assets/${item.disableImage}`)"
									alt="catalog-details" />
								<img
									v-if="isSelected === index"
									:src="require(`../assets/${item.activeImage}`)"
									alt="catalog-details" />
								<p>{{ $store.state.language === 'RU' ? item.title : item.title_en }}</p>
							</div>
						</slide>
						<template #addons>
							<pagination />
						</template>
					</carousel>
				</div>
				<!-- /.details-select mobile-section -->

				<app-details-select-settings
					v-if="isSelected === 0"
					:settings="PRODUCT_ID.ProductPropertyValue"></app-details-select-settings>
				<app-details-select-video
					v-if="isSelected === 1"
					:videos="PRODUCT_ID.VideoProduct"></app-details-select-video>
				<app-details-select-products
					v-if="isSelected === 2"
					:product-items="PRODUCT_ID.Items"></app-details-select-products>
				<app-details-select-inventory
					v-if="isSelected === 3"
					:equipment="PRODUCT_ID.equipments"></app-details-select-inventory>
				<app-details-select-packet
					v-if="isSelected === 4"
					:packets-items="PRODUCT_ID.Packet" :packetsOptions-items="PRODUCT_ID.PacketsOptions"></app-details-select-packet>
				<app-details-select-solution
					v-if="isSelected === 5"
					:complex-solution="PRODUCT_ID.Solution"></app-details-select-solution>
			</div>
			<!-- /.details -->
		</section>

		<!-- <section class="section">
			<h2 class="title-brand">
				{{
					$store.state.language === 'RU'
						? 'Бренды купившие эту машину'
						: 'Brands that bought this machine'
				}}
			</h2>
			<div class="slider-content card-shadow">
				<carousel :breakpoints="breakpoints">
					<slide v-for="client in PRODUCT_ID.clients" :key="client.id">
						<app-partners-item
							:image="client.logo"
							:alt="client.alt"
							@click="showClient(client.id)"></app-partners-item>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 3" />
						<pagination v-if="slidesCount > 3" />
					</template>
				</carousel>
			</div>
		</section> -->
	</main>

	<transition-group name="modal">
		<app-modal-catalog-call
			v-if="showModalCall"
			:name-machine="$store.state.language === 'RU' ? PRODUCT_ID.name : PRODUCT_ID.name_en"
			@close="showModalCall = false"></app-modal-catalog-call>
		<app-modal-catalog-application
			v-if="showModalApplication"
			:name-machine="$store.state.language === 'RU' ? PRODUCT_ID.name : PRODUCT_ID.name_en"
			@close="showModalApplication = false"></app-modal-catalog-application>
		<app-modal-partners-item
			v-if="customers.showModal"
			:image="customers.logo"
			:alt="customers.alt"
			:title="customers.name"
			:text="$store.state.language === 'RU' ? customers.description : customers.description_en"
			:machines="customers.machines"
			@close="customers.showModal = false"></app-modal-partners-item>
	</transition-group>

	<app-footer></app-footer>
</template>

<script>
import { onMounted, watch } from 'vue'
import { useMeta } from 'vue-meta'
import { useRoute } from 'vue-router'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import appDetailsSelectInventory from '../components/appDetailsSelectInventory.vue'
import appDetailsSelectPacket from '../components/appDetailsSelectPacket.vue'
import appDetailsSelectProducts from '../components/appDetailsSelectProducts.vue'
import appDetailsSelectSettings from '../components/appDetailsSelectSettings.vue'
import appDetailsSelectSolution from '../components/appDetailsSelectSolution.vue'
import appDetailsSelectVideo from '../components/appDetailsSelectVideo.vue'
import appFooter from '../components/appFooter.vue'
import appHeader from '../components/appHeader.vue'
import appModalCatalogApplication from '../components/appModalCatalogApplication.vue'
import appModalCatalogCall from '../components/appModalCatalogCall.vue'
import appModalPartnersItem from '../components/appModalPartnersItem.vue'
import appPartnersItem from '../components/appPartnersItem.vue'

export default {
	name: 'AppPageCatalogId',
	components: {
		appHeader,
		appFooter,
		appDetailsSelectSettings,
		appDetailsSelectVideo,
		appDetailsSelectProducts,
		appDetailsSelectInventory,
		appDetailsSelectPacket,
		appDetailsSelectSolution,
		appPartnersItem,
		appModalCatalogCall,
		appModalCatalogApplication,
		Carousel,
		Slide,
		Navigation,
		Pagination,
		appModalPartnersItem,
	},
	setup() {
		const store = useStore()
		const route = useRoute()
		const { meta } = useMeta({
			title: '',
			description: ''
		})

		// Функция для обновления метаданных
		const updateMeta = (product) => {
			if (!product) {
				meta.title = 'title'
				meta.description = 'description'
				return
			}

			if (store.state.language === 'RU') {
				meta.title = product.seo_title || product.name
				meta.description = product.seo_description || product.description || product.name
			} else {
				meta.title = product.seo_title_en || product.name_en || product.name
				meta.description = product.seo_description_en || product.description_en || product.description || product.name_en || product.name
			}
		}

		// Реактивно следим за изменением маршрута
		watch(() => route.params.catalogSlug, (newSlug) => {
			if (store.getters['product/PRODUCT'].length > 0) {
				const productItem = store.getters['product/PRODUCT'].find(e => e.slug === newSlug)
				updateMeta(productItem)
			}
		}, { immediate: true })

		onMounted(() => {
			if (store.getters['product/PRODUCT'].length === 0) {
				store.dispatch('product/GET_PRODUCT')
			}
		})

		return {
			updateMeta,
			meta
		}
	},
	data() {
		return {
			PRODUCT_ID: new Object(),
			customers: {
				showModal: false,
			},
			breakpoints: {
				0: {
					itemsToShow: 1.5,
					snapAlign: 'center',
				},
				1248: {
					itemsToShow: 3,
					snapAlign: 'start',
					mouseDrag: false,
					touchDrag: false,
				},
			},
			aboutItem: [
				{
					disableImage: 'catalog-details-settings.png',
					activeImage: 'catalog-details-settings-active.png',
					title: 'технические характеристики',
					title_en: 'specifications',
				},
				{
					disableImage: 'catalog-details-video.png',
					activeImage: 'catalog-details-video-active.png',
					title: 'видео',
					title_en: 'video',
				},
				{
					disableImage: 'catalog-details-products.png',
					activeImage: 'catalog-details-products-active.png',
					title: 'продукты',
					title_en: 'products',
				},
				{
					disableImage: 'catalog-details-inventory.png',
					activeImage: 'catalog-details-inventory-active.png',
					title: 'доп. оборудование',
					title_en: 'optional equipment',
				},
				{
					disableImage: 'catalog-details-packet.png',
					activeImage: 'catalog-details-packet-active.png',
					title: 'тип пакета',
					title_en: 'package type',
				},
				{
					disableImage: 'catalog-details-solution.png',
					activeImage: 'catalog-details-solution-active.png',
					title: 'готовые решения',
					title_en: 'ready-made solutions',
				},
			],
			isSelected: 0,
			showModalCall: false,
			showModalApplication: false,
		}
	},
	computed: {
		...mapGetters({
			CLIENTS: 'clients/CLIENTS',
			PRODUCT: 'product/PRODUCT',
		}),
	},
	watch: {
		$route: 'fetchData',
		customers: {
			handler() {
				if (this.customers.showModal) {
					document.body.classList.add('modal-open')
				} else {
					document.body.classList.remove('modal-open')
				}
			},
			deep: true,
		},
		showModalCall() {
			if (this.showModalCall) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalApplication() {
			if (this.showModalApplication) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
	},
	mounted() {
		this.GET_CLIENTS()
		this.GET_PRODUCT().then(() => {
			this.fetchData()
			// Обновляем метаданные после загрузки продукта
			this.updateMeta(this.PRODUCT_ID)
		})
	},
	methods: {
		...mapActions({
			GET_CLIENTS: 'clients/GET_CLIENTS',
			GET_PRODUCT: 'product/GET_PRODUCT',
		}),
		showClient(id) {
			this.customers = this.CLIENTS.find((e) => e.id === id)
			this.customers.machines = true
			this.customers.showModal = true
		},
		imageComputed(image) {
			if (image.includes(this.$store.state.server_media.slice(0, -1))) {
				return image
			} else {
				return this.$store.state.server_media.slice(0, -1) + image
			}
		},
		fetchData() {
			this.PRODUCT_ID = this.PRODUCT.find((e) => e.slug === this.$route.params.catalogSlug)
			this.updateMeta(this.PRODUCT_ID)
		},
	},
}
</script>

<style scoped>
.catalog-item-card-image {
	max-width: 20rem;
	align-self: center;
}
.else-flex {
	align-items: center;
	justify-content: center;
}
.details {
	margin: 1rem 0;
	height: 100%;
	padding: 2rem 0;
}
.details-select {
	justify-content: flex-start;
}
.details-select-item {
	transition: all 0.5s;
	cursor: pointer;
	text-align: center;
	padding: 0.5rem 1rem;
	align-items: center;
	margin: 0 1rem;
	width: 220px;
}
.details-select-item img {
	width: 48px;
	height: 48px;
}
.details-select-item:hover {
	transition: all 0.5s;
	background: rgba(0, 0, 0, 0.1);
}
.details-select-item-choice {
	color: #ffffff;
	background: #2fc1ff;
	box-shadow: inset 0 1px 10px 1px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
}
.details-select-item-choice:hover {
	background: #2fc1ff;
}
.catalog-ig-buttons {
	margin: 0 -1rem;
}
.catalog-ig-buttons .btn {
	flex-grow: 1;
	margin: 0 1rem;
}
.buttons-section.catalog-ig-buttons {
	margin: 1rem -1rem;
}
.desktop-section {
	display: flex;
}
.mobile-section {
	display: none;
}
.slider-content {
	margin: 2rem 0 1rem 0;
}
@media (max-width: 1220px) {
	.desktop-section.details-select {
		flex-wrap: wrap;
		gap: 1rem 1rem;
		justify-content: space-evenly;
	}
	.desktop-section .details-select-item {
		flex-grow: 1;
		align-self: stretch;
		margin: 0;
	}
}
@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}
	.mobile-section {
		display: flex;
	}
	.details {
		padding: 1rem;
		margin: 0 0 1rem 0;
	}
	.catalog-item-card-image {
		max-width: 15rem;
		align-self: center;
	}
	.buttons-section.catalog-ig-buttons {
		margin: 1rem -0.5rem;
	}
	.buttons-section.catalog-ig-buttons .btn {
		padding: 0;
		margin: 0 0.5rem;
		font-weight: bold;
		font-size: 12px;
	}
	.mobile-section.details-select {
		display: block;
		margin: 0;
	}
	.mobile-section .details-select-item {
		width: 100%;
		align-self: stretch;
		margin: 1rem;
	}
	.title-brand {
		margin: 0;
	}
}
</style>
