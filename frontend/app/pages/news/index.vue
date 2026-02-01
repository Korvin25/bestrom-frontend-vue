<template>
	<div v-if="page">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? page.title : page.title_en || page.title }}</h2>
			<p>{{ language === 'RU' ? page.description : page.description_en || page.description }}</p>
		</section>

		<section class="section">
			<div class="news-grid">
				<NuxtLink v-for="item in news" :key="item.id" :to="`/news/${item.slug}`" class="news-card card-shadow">
					<NuxtImg
						v-if="item.img"
						:src="resolveImage(item.img)"
						:alt="language === 'RU' ? item.name : item.name_en || item.name"
						width="420"
						height="260" />
					<h3>{{ language === 'RU' ? item.name : item.name_en || item.name }}</h3>
					<p>{{ language === 'RU' ? item.mini_description : item.mini_description_en || item.mini_description }}</p>
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { useSeoFromPage } from '~/composables/useSeoFromPage'

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()

const { data: pageData } = await useFetch(`${config.public.apiBase}page/6/`)
const { data: newsData } = await useFetch(`${config.public.apiBase}news/`)

const page = computed(() => (pageData.value?.length ? pageData.value[0] : null))
useSeoFromPage(page, language)

const news = computed(() => {
	const items = newsData.value || []
	return items
		.filter((item: any) => new Date(item.published) < new Date())
		.sort((a: any, b: any) => new Date(b.published).getTime() - new Date(a.published).getTime())
})

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
.news-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 1.5rem;
}
.news-card {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}
</style>
