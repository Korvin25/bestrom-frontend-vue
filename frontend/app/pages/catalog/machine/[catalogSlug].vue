<template>
	<div v-if="product" class="catalog-detail">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? product.name : product.name_en || product.name }}</h2>
		</section>
		<NuxtImg
			v-if="product.preview_img || product.img"
			class="product-image"
			:src="resolveImage(product.preview_img || product.img)"
			:alt="language === 'RU' ? product.name : product.name_en || product.name"
			width="920"
			height="520" />
		<div class="properties card-shadow">
			<h3>{{ language === 'RU' ? 'Характеристики' : 'Specifications' }}</h3>
			<ul>
				<li v-for="property in product.ProductPropertyValue || []" :key="property.id">
					<strong>{{ language === 'RU' ? property.product_property.name : property.product_property.name_en }}</strong>:
					<span v-html="language === 'RU' ? property.name : property.name_en || property.name" />
				</li>
			</ul>
		</div>
		<div class="description" v-html="language === 'RU' ? product.description : product.description_en || product.description" />
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()
const route = useRoute()

const { data: productsData } = await useFetch(`${config.public.apiBase}product/`)
const product = computed(() => (productsData.value || []).find((item: any) => item.slug === route.params.catalogSlug))

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)
const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}

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
				? product.value.seo_description || product.value.mini_description || ''
				: product.value.seo_description_en || product.value.mini_description_en || product.value.mini_description || ''
			: '',
	),
})
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 1.5rem;
}
.product-image {
	width: 100%;
	height: auto;
	border-radius: 16px;
	margin: 1rem 0 2rem 0;
}
.properties {
	padding: 1.5rem;
	margin-bottom: 2rem;
}
.properties ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.properties li {
	margin-bottom: 0.5rem;
}
.description :deep(p) {
	margin-bottom: 1rem;
}
</style>
