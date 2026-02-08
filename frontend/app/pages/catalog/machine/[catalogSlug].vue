<template>
	<div v-if="product" class="main-content flex-column catalog-detail">
		<section class="section">
			<h2>{{ productTitle }}</h2>

			<div class="slider-content card-shadow">
				<Swiper
					v-if="sliderItems.length"
					:modules="swiperModules"
					:slides-per-view="1"
					:space-between="16"
					:loop="sliderItems.length > 1"
					:navigation="sliderItems.length > 1"
					:pagination="sliderItems.length > 1 ? { clickable: true } : false">
					<SwiperSlide v-for="slide in sliderItems" :key="slide.id || slide.img">
						<img
							class="catalog-item-card-image"
							:src="resolveMedia(slide.img)"
							:alt="slide.alt || productTitle" />
					</SwiperSlide>
				</Swiper>
				<div v-else class="flex-row else-flex">
					<img class="catalog-item-card-image" src="/assets/no-image.jpg" alt="no-image" />
				</div>
			</div>

			<div class="buttons-section catalog-ig-buttons flex-row">
				<button class="btn" type="button" @click="showModalCall = true">
					{{ language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
				<button class="btn" type="button" @click="showModalApplication = true">
					{{ language === 'RU' ? 'ОТПРАВИТЬ ЗАЯВКУ' : 'SEND AN APPLICATION' }}
				</button>
			</div>

			<div class="details flex-column card-shadow">
				<div class="desktop-section details-select flex-row">
					<div
						v-for="(item, index) in aboutItems"
						:key="item.id"
						:class="isSelected === index ? 'details-select-item-choice' : ''"
						class="details-select-item flex-column card-shadow"
						@click="isSelected = index">
						<img
							:src="isSelected === index ? item.activeImage : item.disableImage"
							:alt="item.title" />
						<p>{{ language === 'RU' ? item.title : item.title_en }}</p>
					</div>
				</div>

				<div class="mobile-section details-select">
					<Swiper
						:modules="swiperModules"
						:slides-per-view="1.6"
						:centered-slides="true"
						:space-between="12"
						:pagination="{ clickable: true }">
						<SwiperSlide v-for="(item, index) in aboutItems" :key="item.id">
							<div
								:class="isSelected === index ? 'details-select-item-choice' : ''"
								class="details-select-item flex-column card-shadow"
								@click="isSelected = index">
								<img
									:src="isSelected === index ? item.activeImage : item.disableImage"
									:alt="item.title" />
								<p>{{ language === 'RU' ? item.title : item.title_en }}</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div v-if="isSelected === 0" class="details-select-settings">
					<div
						v-for="item in product.ProductPropertyValue || []"
						:key="item.id"
						class="details-select-settings-item">
						<h4>
							{{ language === 'RU' ? item.product_property?.name : item.product_property?.name_en }}
						</h4>
						<div v-html="language === 'RU' ? item.name : item.name_en || item.name" />
					</div>
				</div>

				<div v-if="isSelected === 1" class="details-select-video">
					<div v-if="(product.VideoProduct || []).length">
						<div v-for="item in product.VideoProduct" :key="item.id" class="details-select-video-item">
							<iframe
								class="video-player"
								width="100%"
								height="315"
								:src="videoEmbedSrc(item.video)"
								frameborder="0"
								allow="clipboard-write; autoplay; fullscreen; picture-in-picture"
								allowfullscreen />
						</div>
					</div>
					<div v-else>
						<p>{{ language === 'RU' ? 'Для данного оборудования видео отсутствует' : 'No videos available' }}</p>
					</div>
				</div>

				<div v-if="isSelected === 2" class="details-select-products flex-row">
					<div
						v-for="item in product.Items || []"
						:key="item.id"
						class="details-select-products-item card-shadow"
						@click="openProductExamples(item)">
						<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
						<img :src="resolveMedia(item.img)" :alt="item.alt" />
						<AppHiddenItem :text="language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'" />
					</div>
				</div>

				<div v-if="isSelected === 3" class="details-select-inventory">
					<div class="slider-content">
						<Swiper
							:modules="swiperModules"
							:slides-per-view="1.5"
							:space-between="16"
							:breakpoints="inventoryBreakpoints"
							:loop="(product.equipments || []).length > 1"
							:navigation="(product.equipments || []).length > 1"
							:pagination="(product.equipments || []).length > 1 ? { clickable: true } : false">
							<SwiperSlide v-for="item in product.equipments || []" :key="item.id">
								<div
									class="details-select-inventory-item flex-column card-shadow"
									@click="openEquipment(item)">
									<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
									<img
										:src="resolveMedia(item.SliderProd?.[0]?.img)"
										:alt="item.SliderProd?.[0]?.alt || item.name" />
									<AppHiddenItem :text="language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>

				<div v-if="isSelected === 4">
					<div class="details-select-packet flex-row">
						<div v-for="item in product.Packet || []" :key="item.id" class="details-select-packet-item card-shadow">
							<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
							<img :src="resolveMedia(item.img)" :alt="item.alt" />
						</div>
					</div>

					<h2 class="title-brand title-padding">
						{{ language === 'RU' ? 'Дополнительные опции пакетов' : 'Additional package options' }}
					</h2>

					<div class="details-select-packet flex-row">
						<div
							v-for="item in product.PacketsOptions || []"
							:key="item.id"
							class="details-select-packet-item card-shadow">
							<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
							<img :src="resolveMedia(item.img)" :alt="item.alt" />
						</div>
					</div>
				</div>

				<div v-if="isSelected === 5" class="details-select-solution">
					<section v-if="solutionIntro" class="section">
						<div class="content flex-row card-shadow resheni-desktop">
							<div class="about-content flex-column">
								<h3>{{ language === 'RU' ? solutionIntro.name : solutionIntro.name_en }}</h3>
								<p class="text-about-content" style="padding: 1rem 0">
									{{ language === 'RU' ? solutionIntro.text : solutionIntro.text_en }}
								</p>
							</div>
							<div class="image-content">
								<img
									:alt="solutionIntro.file?.[0]?.alt || 'solution'"
									class="image-world"
									:src="resolveMedia(solutionIntro.file?.[0]?.file)" />
							</div>
						</div>
					</section>

					<div class="slider-content">
						<Swiper
							:modules="swiperModules"
							:slides-per-view="1.2"
							:space-between="16"
							:breakpoints="solutionBreakpoints"
							:loop="(product.Solution || []).length > 1"
							:navigation="(product.Solution || []).length > 1"
							:pagination="(product.Solution || []).length > 1 ? { clickable: true } : false">
							<SwiperSlide v-for="item in product.Solution || []" :key="item.id">
								<div class="details-select-solution-item flex-column card-shadow">
									<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
									<img :src="resolveMedia(item.img)" :alt="item.alt" />
									<AppHiddenItem :text="language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	</div>

	<transition name="modal">
		<AppModalCatalogProductExamples
			v-if="showModalProductExamples"
			:title="productExamplesTitle"
			:product-examples="productExamples"
			@close="showModalProductExamples = false" />
	</transition>

	<transition-group name="modal">
		<AppModalCatalogCall
			v-if="showModalCall"
			:name-machine="productTitle"
			@close="showModalCall = false" />
		<AppModalCatalogApplication
			v-if="showModalApplication"
			:name-machine="productTitle"
			@close="showModalApplication = false" />
	</transition-group>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useAppStore } from '~/stores/app'
import { usePageStore } from '~/stores/page'
import { useProductStore } from '~/stores/product'

const appStore = useAppStore()
const productStore = useProductStore()
const pageStore = usePageStore()
const { language, serverMedia } = storeToRefs(appStore)
const { products } = storeToRefs(productStore)

const route = useRoute()
const router = useRouter()

if (!products.value.length) {
	await productStore.loadProducts()
}

if (!pageStore.pageId.length) {
	await pageStore.loadPage(11)
}

const slugParam = computed(() =>
	Array.isArray(route.params.catalogSlug) ? route.params.catalogSlug[0] : route.params.catalogSlug,
)

const product = computed(() =>
	products.value.find((item: any) => item.slug === slugParam.value || String(item.id) === String(slugParam.value)),
)

const productTitle = computed(() =>
	product.value ? (language.value === 'RU' ? product.value.name : product.value.name_en || product.value.name) : '',
)

const resolveMedia = (src: unknown) => {
	if (!src || typeof src !== 'string') return '/assets/no-image.jpg'
	if (src.startsWith('http')) return src
	return `${serverMedia.value}${src.replace(/^\//, '')}`
}

const sliderItems = computed(() => product.value?.SliderProd || [])
const swiperModules = [Navigation, Pagination]

const aboutItems = [
	{
		id: 'settings',
		disableImage: '/assets/catalog-details-settings.png',
		activeImage: '/assets/catalog-details-settings-active.png',
		title: 'технические характеристики',
		title_en: 'specifications',
	},
	{
		id: 'video',
		disableImage: '/assets/catalog-details-video.png',
		activeImage: '/assets/catalog-details-video-active.png',
		title: 'видео',
		title_en: 'video',
	},
	{
		id: 'products',
		disableImage: '/assets/catalog-details-products.png',
		activeImage: '/assets/catalog-details-products-active.png',
		title: 'продукты',
		title_en: 'products',
	},
	{
		id: 'inventory',
		disableImage: '/assets/catalog-details-inventory.png',
		activeImage: '/assets/catalog-details-inventory-active.png',
		title: 'доп. оборудование',
		title_en: 'optional equipment',
	},
	{
		id: 'packet',
		disableImage: '/assets/catalog-details-packet.png',
		activeImage: '/assets/catalog-details-packet-active.png',
		title: 'тип пакета',
		title_en: 'package type',
	},
	{
		id: 'solution',
		disableImage: '/assets/catalog-details-solution.png',
		activeImage: '/assets/catalog-details-solution-active.png',
		title: 'готовые решения',
		title_en: 'ready-made solutions',
	},
]

const isSelected = ref(0)
const showModalCall = ref(false)
const showModalApplication = ref(false)
const showModalProductExamples = ref(false)
const productExamplesTitle = ref('')
const productExamples = ref<any[]>([])

const solutionIntro = computed(() => pageStore.pageId?.[0]?.blocks?.[0]?.contents?.[0] || null)

const inventoryBreakpoints = {
	0: { slidesPerView: 1.2, spaceBetween: 12 },
	1248: { slidesPerView: 1.9, spaceBetween: 16 },
}

const solutionBreakpoints = {
	0: { slidesPerView: 1.2, spaceBetween: 12 },
	1248: { slidesPerView: 1, spaceBetween: 16 },
}

const openProductExamples = (item: any) => {
	productExamplesTitle.value = language.value === 'RU' ? item.name : item.name_en || item.name
	productExamples.value = item.ItemsExample || []
	showModalProductExamples.value = true
}

const openEquipment = (item: any) => {
	window.scrollTo(0, 0)
	router.push(`/catalog/machine/${item.id}`)
}

const videoEmbedSrc = (src: string) => {
	if (!src) return ''
	if (src.includes('youtube.com') || src.includes('youtu.be')) {
		const match = src.match(/(?:v=|youtu\.be\/)([^&?/]+)/)
		return match?.[1] ? `https://www.youtube.com/embed/${match[1]}` : src
	}
	return `https://rutube.ru/play/embed/${src}`
}

watch(
	() => showModalCall.value || showModalApplication.value || showModalProductExamples.value,
	(isOpen) => {
		if (process.client) {
			document.body.classList.toggle('modal-open', isOpen)
		}
	},
)

onBeforeUnmount(() => {
	if (process.client) {
		document.body.classList.remove('modal-open')
	}
})

useSeoMeta({
	title: computed(() =>
		product.value
			? language.value === 'RU'
				? product.value.seo_title || product.value.name
				: product.value.seo_title_en || product.value.name_en || product.value.name
			: 'БЕСТРОМ',
	),
	description: computed(() =>
		product.value
			? language.value === 'RU'
				? product.value.seo_description || product.value.description || product.value.name
				: product.value.seo_description_en || product.value.description_en || product.value.description || product.value.name_en || product.value.name
			: '',
	),
})
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
.details-select-settings {
	margin: 2rem 1rem 0 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
}
.details-select-settings-item {
	width: 100%;
}
.details-select-settings-item h4 {
	margin: 1rem 0;
}
.details-select-video {
	margin: 2rem 1rem 0 1rem;
	width: calc(100% - 2rem);
}
.details-select-video-item {
	width: 100%;
	margin-bottom: 1rem;
}
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
.details-select-inventory {
	margin: 2rem 0 1rem 0;
}
.details-select-inventory-item {
	position: relative;
	flex-grow: 1;
	height: 15rem;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;
	padding: 1rem 2rem;
}
.details-select-inventory-item:hover .hidden-item {
	opacity: 1;
}
.details-select-inventory-item:hover img,
.details-select-inventory-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-inventory-item h4 {
	margin-top: 0;
}
.details-select-inventory-item img {
	max-height: 9rem;
}
.title-padding {
	padding: 0 1rem;
	margin: 0;
}
.details-select-packet {
	margin-top: 2rem;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.details-select-packet-item {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	text-align: center;
	width: 20%;
	flex-grow: 1;
	margin: 1rem;
}
.details-select-packet-item:hover {
	transition: all 0.5s;
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.details-select-packet-item h4 {
	font-weight: normal;
	margin-top: 0;
}
.resheni-desktop {
	margin: 1em;
}
.details-select-solution {
	margin: 2rem 0 1rem 0;
	overflow: hidden;
}
.details-select-solution-item {
	position: relative;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	padding: 1rem 2rem;
}
.details-select-solution-item:hover .hidden-item {
	opacity: 1;
}
.details-select-solution-item:hover img,
.details-select-solution-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-solution-item h4 {
	margin-top: 0;
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
	.details-select-settings {
		flex-direction: column;
		margin: 1rem 0.5rem;
		height: auto;
		width: 100%;
	}
	.details-select-settings-item h4 {
		font-weight: 600;
		font-size: 12px;
		margin: 0.5rem 0;
	}
	.details-select-video {
		margin: 1rem 0;
		width: 100%;
	}
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
	.details-select-inventory {
		margin: 2rem 0.5rem 0 0.5rem;
	}
	.details-select-inventory-item {
		position: relative;
		flex-grow: 1;
		height: 13rem;
		text-align: center;
		margin: 0.5rem;
		padding: 1rem 2rem;
	}
	.details-select-inventory-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
	.details-select-packet {
		margin: 0 -0.5rem;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.details-select-packet-item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		text-align: center;
		width: 25%;
		flex-grow: 1;
		margin: 0.5rem;
	}
	.details-select-packet-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
	.details-select-packet-item img {
		align-self: center;
		max-width: 7rem;
		width: 100%;
	}
	.details-select-solution {
		margin: 2rem 0.5rem 0 0.5rem;
	}
	.details-select-solution-item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem 1rem;
		text-align: center;
		height: 16rem;
		margin: 0.5rem;
		width: 100%;
	}
	.details-select-solution-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
	.details-select-solution-item img {
		align-self: center;
		max-width: 10rem;
		width: 100%;
	}
}
</style>
