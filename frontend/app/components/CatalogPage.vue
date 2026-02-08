<template>
	<div v-if="page">
		<section class="section catalog-filters card-shadow">
			<div class="filters-header">
				<p v-if="selectedFilterLabel" class="filters-selected">
					Выбранный фильтр: {{ selectedFilterLabel }}
				</p>
				<button
					v-if="selectedFilter"
					class="filters-toggle"
					type="button"
					:aria-expanded="isFiltersExpanded ? 'true' : 'false'"
					@click="toggleFilters">
					{{ isFiltersExpanded ? 'Скрыть фильтры' : 'Показать фильтры' }}
					<span class="filters-toggle-icon" aria-hidden="true">▼</span>
				</button>
			</div>
			<div class="filter-categories">
				<button
					v-for="category in filters"
					:key="category.id"
					:class="['filter-category', selectedCategory === category.slug ? 'active' : '']"
					@click="selectCategory(category.slug)">
					<span class="filter-category-text">
						{{ language === 'RU' ? category.name : category.name_en || category.name }}
					</span>
				</button>
			</div>
			<div v-if="isFiltersExpanded && selectedFilters.length" class="filter-options">
				<button
					v-for="filter in selectedFilters"
					:key="filter.id"
					:class="['filter-option', selectedFilter === filter.slug ? 'active' : '']"
					@click="selectFilter(filter.slug)">
					<NuxtImg
						v-if="filter.preview_img || filter.img"
						class="filter-option-image"
						:src="resolveImage(filter.preview_img || filter.img)"
						:alt="language === 'RU' ? filter.name : filter.name_en || filter.name"
						width="96"
						height="96" />
					<span class="filter-option-text">
						{{ language === 'RU' ? filter.name : filter.name_en || filter.name }}
					</span>
				</button>
			</div>
		</section>

		<section class="section catalog-grid">
			<NuxtLink v-for="product in computedProducts" :key="product.id" :to="`/catalog/machine/${product.slug}`" class="catalog-card card-shadow">
				<div class="catalog-card-body">
					<div class="catalog-card-text">
						<h3>{{ language === 'RU' ? product.name : product.name_en || product.name }}</h3>
						<div class="catalog-card-divider"></div>
						<div
							class="catalog-card-description"
							v-html="language === 'RU' ? product.mini_description || product.description : product.mini_description_en || product.description_en || product.description" />
						<span class="catalog-card-action">
							{{ language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
						</span>
					</div>
					<div class="catalog-card-media">
						<NuxtImg
							v-for="(slide, index) in getProductSlides(product)"
							:key="slide?.id || slide?.img || index"
							:class="['catalog-card-image', { active: index === getProductSlideIndex(product) }]"
							:src="resolveImage(getSlideImage(slide))"
							:alt="getSlideAlt(product, slide)"
							width="420"
							height="320" />
						<div
							v-if="getProductSlides(product).length > 1"
							class="catalog-card-dots"
							aria-hidden="true">
							<span
								v-for="(slide, index) in getProductSlides(product)"
								:key="slide?.id || slide?.img || index"
								:class="['catalog-card-dot', { active: index === getProductSlideIndex(product) }]" />
						</div>
					</div>
				</div>
			</NuxtLink>
		</section>
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useAppStore } from '~/stores/app';

const props = defineProps<{ radioSlug?: string; filterSlug?: string }>()

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()
const router = useRouter()

const { data: pageData } = await useFetch(`${config.public.apiBase}page/4/`)
const { data: filtersData } = await useFetch(`${config.public.apiBase}filters/`)
const { data: productsData } = await useFetch(`${config.public.apiBase}product/`)

const page = computed(() => (pageData.value?.length ? pageData.value[0] : null))

const filters = computed(() => filtersData.value || [])
const products = computed(() => productsData.value || [])

const selectedCategory = computed(() => props.radioSlug || filters.value?.[0]?.slug || '')
const selectedFilter = computed(() => props.filterSlug || '')
const isFiltersExpanded = ref(!selectedFilter.value)

const selectedFilters = computed(() => {
	const category = filters.value.find((item: any) => item.slug === selectedCategory.value)
	return category?.Filters || []
})
const selectedFilterLabel = computed(() => {
	if (!selectedFilter.value) return ''
	const currentFilter = selectedFilters.value.find((item: any) => item.slug === selectedFilter.value)
	if (!currentFilter) return ''
	return language.value === 'RU'
		? currentFilter.name
		: currentFilter.name_en || currentFilter.name
})
const defaultSeoTitle = computed(() =>
	language.value === 'RU' ? 'Каталог оборудования | BESTROM' : 'Equipment catalog | BESTROM'
)
const defaultSeoDescription = 'Широкий выбор промышленного оборудования для пищевой промышленности'
const seoTitle = computed(() =>
	selectedFilterLabel.value ? `${selectedFilterLabel.value} | ${defaultSeoTitle.value}` : defaultSeoTitle.value
)
const seoDescription = computed(() => defaultSeoDescription)

useSeoMeta({
	title: seoTitle,
	description: seoDescription,
	ogTitle: seoTitle,
	ogDescription: seoDescription,
})

const computedProducts = computed(() => {
	let tempProducts = products.value.slice()
	if (selectedFilter.value) {
		tempProducts = tempProducts.filter((product: any) => {
			if (Array.isArray(product.category_filters)) {
				return product.category_filters.some((filter: any) => filter.slug === selectedFilter.value)
			}
			return false
		})
	}
	return tempProducts
})

const sliderIndexes = ref<Record<string, number>>({})
const sliderIntervalId = ref<number | null>(null)

const getProductSlides = (product: any) => {
	if (Array.isArray(product?.SliderProd) && product.SliderProd.length > 0) {
		return product.SliderProd
	}
	if (product?.preview_img || product?.img) {
		return [{ id: `single-${product.id}`, img: product.preview_img || product.img }]
	}
	return []
}

const getSlideImage = (slide: any) => {
	if (!slide) return ''
	if (typeof slide === 'string') return slide
	return slide.img || slide.preview_img || slide.image || ''
}

const getSlideAlt = (product: any, slide: any) => {
	if (slide?.alt) return slide.alt
	return language.value === 'RU' ? product?.name : product?.name_en || product?.name || ''
}

const getProductSlideIndex = (product: any) => {
	const key = String(product?.id ?? '')
	return sliderIndexes.value[key] ?? 0
}

const tickProductSlides = () => {
	if (!computedProducts.value?.length) return
	const nextIndexes: Record<string, number> = { ...sliderIndexes.value }

	computedProducts.value.forEach((product: any) => {
		const slides = product?.SliderProd
		if (Array.isArray(slides) && slides.length > 1) {
			const key = String(product.id)
			const current = nextIndexes[key] ?? 0
			nextIndexes[key] = (current + 1) % slides.length
		}
	})

	sliderIndexes.value = nextIndexes
}

watch(
	computedProducts,
	(items) => {
		const nextIndexes: Record<string, number> = {}
		items.forEach((product: any) => {
			const key = String(product?.id ?? '')
			if (!key) return
			nextIndexes[key] = sliderIndexes.value[key] ?? 0
		})
		sliderIndexes.value = nextIndexes
	},
	{ immediate: true }
)

onMounted(() => {
	sliderIntervalId.value = window.setInterval(tickProductSlides, 4000)
})

onBeforeUnmount(() => {
	if (sliderIntervalId.value) {
		window.clearInterval(sliderIntervalId.value)
	}
})

const selectCategory = (slug: string) => {
	router.push(`/catalog/type/${slug}`)
}

const selectFilter = (slug: string) => {
	router.push(`/catalog/type/${selectedCategory.value}/${slug}`)
	isFiltersExpanded.value = false
}

watch(
	() => selectedFilter.value,
	(value) => {
		if (!value) {
			isFiltersExpanded.value = true
		}
	}
)

const toggleFilters = () => {
	isFiltersExpanded.value = !isFiltersExpanded.value
}

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)
const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}
</script>

<style scoped>
.catalog-filters {
	padding: 1.5rem;
	margin-top: 2.5rem;
	margin-bottom: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	box-sizing: border-box;
	background: #ffffff;
	border: 1px solid rgba(16, 24, 40, 0.06);
	border-radius: 16px;
	box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
}
.filters-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	flex-wrap: wrap;
}
.filters-selected {
	margin: 0;
	font-size: 0.95rem;
	color: #475569;
}
.filters-toggle {
	border: 0;
	background: transparent;
	color: #0ea5e9;
	font-weight: 600;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0;
}
.filters-toggle-icon {
	font-size: 0.7rem;
	transform: rotate(0deg);
	transition: transform 0.16s ease;
}
.filters-toggle:focus-visible {
	outline: 2px solid rgba(14, 165, 233, 0.45);
	outline-offset: 2px;
}
.filters-toggle[aria-expanded='false'] .filters-toggle-icon {
	transform: rotate(-90deg);
}
.filter-categories,
.filter-options {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem 1.25rem;
}
.filter-category,
.filter-option {
	border: 0;
	background: transparent;
	padding: 0;
	cursor: pointer;
	font-size: 0.98rem;
	font-weight: 500;
	color: #6b7280;
	transition: color 0.16s ease;
	display: inline-flex;
	align-items: center;
	gap: 0.6rem;
}
.filter-category.active,
.filter-option.active {
	color: #0ea5e9;
	font-weight: 600;
}
.filter-category:hover,
.filter-option:hover {
	color: #1f2937;
}
.filter-category:focus-visible,
.filter-option:focus-visible {
	outline: 2px solid rgba(14, 165, 233, 0.45);
	outline-offset: 2px;
}
.filter-category::before {
	content: '';
	width: 12px;
	height: 12px;
	border-radius: 999px;
	border: 2px solid #cbd5f5;
	background: #ffffff;
	box-sizing: border-box;
	transition: border-color 0.16s ease, background 0.16s ease, box-shadow 0.16s ease;
}
.filter-category.active::before {
	border-color: #0ea5e9;
	background: #0ea5e9;
	box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.18);
}
.filter-options {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 1.2rem;
}
.filter-option {
	border: 1px solid rgba(148, 163, 184, 0.45);
	background: #ffffff;
	border-radius: 16px;
	padding: 1rem 0.75rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.65rem;
	min-height: 150px;
	color: #334155;
	transition: border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease, background 0.16s ease;
}
.filter-option:hover {
	background: #ffffff;
	border-color: rgba(14, 165, 233, 0.35);
	box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
	transform: translateY(-2px);
}
.filter-option.active {
	background: #ffffff;
	border-color: rgba(14, 165, 233, 0.5);
	box-shadow: 0 12px 26px rgba(14, 165, 233, 0.12);
}
.filter-option-image {
	width: 96px;
	height: 96px;
	object-fit: contain;
}
.filter-option-text {
	font-size: 0.95rem;
	text-align: center;
}
.catalog-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1.75rem;
	align-items: stretch;
	width: 100%;
	box-sizing: border-box;
}
.catalog-card {
	padding: 1.5rem 1.75rem;
	border-radius: 18px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: #ffffff;
	border: 1px solid rgba(16, 24, 40, 0.06);
	box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
	transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
	text-decoration: none;
	color: inherit;
	min-height: 240px;
	height: 100%;
	overflow: hidden;
	position: relative;
	width: 100%;
	min-width: 0;
	box-sizing: border-box;
}
.catalog-card:hover {
	transform: translateY(-2px);
	box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
	border-color: rgba(14, 165, 233, 0.25);
}
.catalog-card-body {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 1rem;
	flex: 1;
}
.catalog-card-text {
	display: flex;
	flex-direction: column;
	min-height: 170px;
	overflow: visible;
	flex: 1;
}
.catalog-card-text h3 {
	margin: 0 0 0.5rem 0;
	font-size: 1.1rem;
	color: #0f172a;
}
.catalog-card-divider {
	width: 100%;
	height: 1px;
	background: rgba(14, 165, 233, 0.35);
	margin: 0.35rem 0 0.75rem;
}
.catalog-card-description {
	margin: 0 0 1rem 0;
	color: #475569;
	font-size: 0.95rem;
	line-height: 1.4;
	opacity: 1;
	visibility: visible;
}
.catalog-card-action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1.2rem;
	border-radius: 999px;
	background: #38bdf8;
	color: #ffffff;
	font-weight: 600;
	font-size: 0.85rem;
	box-shadow: 0 6px 16px rgba(56, 189, 248, 0.35);
	margin-top: auto;
}
.catalog-card-description p {
	margin: 0 0 0.6rem 0;
}
.catalog-card-description p:last-child {
	margin-bottom: 0;
}
.catalog-card-media {
	position: relative;
	display: grid;
	place-items: center;
	min-height: 240px;
	height: 240px;
	flex: 0 0 240px;
	order: -1;
	overflow: hidden;
}
.catalog-card-dots {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 12px;
	display: flex;
	justify-content: center;
	gap: 6px;
}
.catalog-card-dot {
	width: 6px;
	height: 6px;
	border-radius: 999px;
	background: rgba(15, 23, 42, 0.25);
}
.catalog-card-dot.active {
	background: rgba(14, 165, 233, 0.9);
}
.catalog-card-image {
	grid-area: 1 / 1;
	margin: auto;
	width: 100%;
	height: auto;
	max-height: 240px;
	object-fit: contain;
	opacity: 0;
	transform: translateY(6px) scale(0.98);
	transition: opacity 0.45s ease, transform 0.45s ease;
}
.catalog-card-image.active {
	opacity: 1;
	transform: translateY(0) scale(1);
}
@media (max-width: 900px) {
	.catalog-card-body {
		gap: 0.85rem;
	}
}
@media (max-width: 980px) {
	.catalog-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
	}
}
@media (max-width: 640px) {
	.catalog-grid {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}
}
</style>
