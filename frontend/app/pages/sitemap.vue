<template>
	<section class="hero card-shadow">
		<h2>{{ language === 'RU' ? 'Карта сайта' : 'Sitemap' }}</h2>
	</section>
	<div class="sitemap card-shadow">
		<ul>
			<li v-for="route in staticRoutes" :key="route.path">
				<NuxtLink :to="route.path">{{ language === 'RU' ? route.labelRu : route.labelEn }}</NuxtLink>
			</li>
		</ul>
		<h3>{{ language === 'RU' ? 'Новости' : 'News' }}</h3>
		<ul>
			<li v-for="item in news" :key="item.id">
				<NuxtLink :to="`/news/${item.slug}`">{{ language === 'RU' ? item.name : item.name_en || item.name }}</NuxtLink>
			</li>
		</ul>
		<h3>{{ language === 'RU' ? 'Каталог' : 'Catalog' }}</h3>
		<ul>
			<li v-for="item in products" :key="item.id">
				<NuxtLink :to="`/catalog/machine/${item.slug}`">{{ language === 'RU' ? item.name : item.name_en || item.name }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
const config = useRuntimeConfig()

const staticRoutes = [
	{ path: '/', labelRu: 'Главная', labelEn: 'Main page' },
	{ path: '/about', labelRu: 'О компании', labelEn: 'About company' },
	{ path: '/about/history', labelRu: 'История', labelEn: 'History' },
	{ path: '/news', labelRu: 'Новости', labelEn: 'News' },
	{ path: '/cutting', labelRu: 'Раскрой пакета', labelEn: 'Cutting' },
	{ path: '/jobs', labelRu: 'Вакансии', labelEn: 'Vacancies' },
	{ path: '/partners', labelRu: 'Партнеры', labelEn: 'Partners' },
	{ path: '/clients', labelRu: 'Клиенты', labelEn: 'Clients' },
	{ path: '/catalog', labelRu: 'Каталог', labelEn: 'Catalog' },
	{ path: '/politic', labelRu: 'Политика конфиденциальности', labelEn: 'Privacy policy' },
	{ path: '/requisites', labelRu: 'Реквизиты', labelEn: 'Requisites' },
	{ path: '/sitemap', labelRu: 'Карта сайта', labelEn: 'Sitemap' },
]

const { data: newsData } = await useFetch(`${config.public.apiBase}news/`)
const { data: productData } = await useFetch(`${config.public.apiBase}product/`)

const news = computed(() => newsData.value || [])
const products = computed(() => productData.value || [])

useSeoMeta({
	title: computed(() => (language.value === 'RU' ? 'Карта сайта' : 'Sitemap')),
})
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 1.5rem;
}
.sitemap {
	padding: 1.5rem;
}
.sitemap ul {
	margin: 0 0 1.5rem 0;
	padding-left: 1.25rem;
}
</style>
