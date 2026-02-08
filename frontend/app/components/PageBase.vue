<template>
	<div v-if="page" class="page-base">
		<section v-if="showHero" class="hero card-shadow">
			<h2>{{ language === 'RU' ? page.title : page.title_en || page.title }}</h2>
			<p>{{ language === 'RU' ? page.description : page.description_en || page.description }}</p>
		</section>
		<PageBlocks v-if="page.blocks?.length" :blocks="page.blocks" :language="language" :media-base="mediaBase" />
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { useSeoFromPage } from '~/composables/useSeoFromPage'

const props = withDefaults(
	defineProps<{
		pageId: number
		showHero?: boolean
	}>(),
	{
		showHero: true,
	},
)

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()

type PageBaseData = {
	title?: string
	title_en?: string
	description?: string
	description_en?: string
	blocks?: any[]
}

const { data: pageData } = await useFetch<PageBaseData[]>(`${config.public.apiBase}page/${props.pageId}/`)
const page = computed<PageBaseData | null>(() => pageData.value?.[0] ?? null)
useSeoFromPage(page, language)

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)
</script>

<style scoped>
.hero {
	padding: 2rem;
	margin-bottom: 2rem;
}
</style>
