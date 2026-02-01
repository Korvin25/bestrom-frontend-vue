<template>
	<div v-if="page">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? page.title : page.title_en || page.title }}</h2>
			<p>{{ language === 'RU' ? page.description : page.description_en || page.description }}</p>
		</section>

		<section class="section">
			<div class="jobs-grid">
				<NuxtLink v-for="job in jobs" :key="job.id" :to="`/jobs/${job.id}`" class="job-card card-shadow">
					<h3>{{ language === 'RU' ? job.name : job.name_en || job.name }}</h3>
					<p v-html="language === 'RU' ? job.mini_description || job.description : job.mini_description_en || job.description_en || job.description" />
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<script setup async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { useSeoFromPage } from '~/composables/useSeoFromPage'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
const config = useRuntimeConfig()

const { data: pageData } = await useFetch(`${config.public.apiBase}page/9/`)
const { data: jobsData } = await useFetch(`${config.public.apiBase}vacancy/`)

const page = computed(() => (pageData.value?.length ? pageData.value[0] : null))
useSeoFromPage(page, language)

const jobs = computed(() => jobsData.value || [])
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 2rem;
}
.jobs-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 1.5rem;
}
.job-card {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}
</style>
