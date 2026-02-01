<template>
	<div v-if="newsItem" class="news-detail">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? newsItem.name : newsItem.name_en || newsItem.name }}</h2>
			<p>{{ formatDate(newsItem.published) }}</p>
		</section>
		<NuxtImg
			v-if="newsItem.img"
			class="news-image"
			:src="resolveImage(newsItem.img)"
			:alt="language === 'RU' ? newsItem.name : newsItem.name_en || newsItem.name"
			width="920"
			height="520" />
		<div class="news-content" v-html="newsContent" />
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()
const route = useRoute()

const { data: newsData } = await useFetch(`${config.public.apiBase}news/`)

const newsItem = computed(() => (newsData.value || []).find((item: any) => item.slug === route.params.slug))
const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)

const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}

const newsContent = computed(() => {
	if (!newsItem.value) return ''
	const html = language.value === 'RU' ? newsItem.value.description : newsItem.value.description_en || newsItem.value.description
	return (html || '').replaceAll('src="/', `src="${mediaBase.value}`)
})

const formatDate = (value: string) => {
	if (!value) return ''
	const date = new Date(value)
	return date.toLocaleDateString(language.value === 'RU' ? 'ru-RU' : 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

useSeoMeta({
	title: computed(() =>
		newsItem.value
			? language.value === 'RU'
				? newsItem.value.seo_title || newsItem.value.name
				: newsItem.value.seo_title_en || newsItem.value.name_en || newsItem.value.name
			: 'БЕСТРОМ',
	),
	description: computed(() =>
		newsItem.value
			? language.value === 'RU'
				? newsItem.value.seo_description || newsItem.value.mini_description
				: newsItem.value.seo_description_en || newsItem.value.mini_description_en || newsItem.value.mini_description
			: '',
	),
})
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 1.5rem;
}
.news-image {
	width: 100%;
	height: auto;
	border-radius: 16px;
	margin: 1rem 0 2rem 0;
}
.news-content :deep(p) {
	margin-bottom: 1rem;
}
</style>
