<template>
	<div v-if="page">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? page.title : page.title_en || page.title }}</h2>
			<p>{{ language === 'RU' ? page.description : page.description_en || page.description }}</p>
		</section>

		<section class="section catalog-filters card-shadow">
			<div class="filter-categories">
				<button
					v-for="category in filters"
					:key="category.id"
					:class="['filter-category', selectedCategory === category.slug ? 'active' : '']"
					@click="selectCategory(category.slug)">
					{{ language === 'RU' ? category.name : category.name_en || category.name }}
				</button>
			</div>
			<div v-if="selectedFilters.length" class="filter-options">
				<button
					v-for="filter in selectedFilters"
					:key="filter.id"
					:class="['filter-option', selectedFilter === filter.slug ? 'active' : '']"
					@click="selectFilter(filter.slug)">
					{{ language === 'RU' ? filter.name : filter.name_en || filter.name }}
				</button>
			</div>
		</section>

		<section class="section catalog-grid">
			<NuxtLink v-for="product in computedProducts" :key="product.id" :to="`/catalog/machine/${product.slug}`" class="catalog-card card-shadow">
				<NuxtImg
					v-if="product.preview_img || product.img"
					:src="resolveImage(product.preview_img || product.img)"
					:alt="language === 'RU' ? product.name : product.name_en || product.name"
					width="420"
					height="260" />
				<h3>{{ language === 'RU' ? product.name : product.name_en || product.name }}</h3>
				<p v-html="language === 'RU' ? product.mini_description || product.description : product.mini_description_en || product.description_en || product.description" />
			</NuxtLink>
		</section>
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { useSeoFromPage } from '~/composables/useSeoFromPage'

const props = defineProps<{ radioSlug?: string; filterSlug?: string }>()

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()
const router = useRouter()

const { data: pageData } = await useFetch(`${config.public.apiBase}page/4/`)
const { data: filtersData } = await useFetch(`${config.public.apiBase}filters/`)
const { data: productsData } = await useFetch(`${config.public.apiBase}product/`)

const page = computed(() => (pageData.value?.length ? pageData.value[0] : null))
useSeoFromPage(page, language)

const filters = computed(() => filtersData.value || [])
const products = computed(() => productsData.value || [])

const selectedCategory = computed(() => props.radioSlug || filters.value?.[0]?.slug || '')
const selectedFilter = computed(() => props.filterSlug || '')

const selectedFilters = computed(() => {
	const category = filters.value.find((item: any) => item.slug === selectedCategory.value)
	return category?.Filters || []
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

const selectCategory = (slug: string) => {
	router.push(`/catalog/type/${slug}`)
}

const selectFilter = (slug: string) => {
	router.push(`/catalog/type/${selectedCategory.value}/${slug}`)
}

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)
const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 2rem;
}
.catalog-filters {
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.filter-categories,
.filter-options {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}
.filter-category,
.filter-option {
	border: 1px solid rgba(47, 193, 255, 0.3);
	background: #ffffff;
	padding: 0.5rem 1rem;
	border-radius: 999px;
	cursor: pointer;
}
.filter-category.active,
.filter-option.active {
	background: rgba(47, 193, 255, 0.15);
	color: #2fc1ff;
	font-weight: 600;
}
.catalog-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 1.5rem;
}
.catalog-card {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}
</style>
