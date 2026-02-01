<template>
	<div v-if="job" class="job-detail">
		<section class="hero card-shadow">
			<h2>{{ language === 'RU' ? job.name : job.name_en || job.name }}</h2>
		</section>
		<div class="job-content" v-html="language === 'RU' ? job.description : job.description_en || job.description" />
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
const config = useRuntimeConfig()
const route = useRoute()

const { data: jobsData } = await useFetch(`${config.public.apiBase}vacancy/`)

const job = computed(() => (jobsData.value || []).find((item: any) => String(item.id) === route.params.jobId))

useSeoMeta({
	title: computed(() =>
		job.value
			? language.value === 'RU'
				? job.value.seo_title || job.value.name
				: job.value.seo_title_en || job.value.name_en || job.value.name
			: 'БЕСТРОМ',
	),
	description: computed(() =>
		job.value
			? language.value === 'RU'
				? job.value.seo_description || job.value.mini_description || ''
				: job.value.seo_description_en || job.value.mini_description_en || job.value.mini_description || ''
			: '',
	),
})
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 1.5rem;
}
.job-content :deep(p) {
	margin-bottom: 1rem;
}
</style>
