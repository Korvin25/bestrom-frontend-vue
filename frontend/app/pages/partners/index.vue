<template>
	<div>
		<PageBase :page-id="7" />
		<section class="section">
			<div class="logo-grid">
				<div v-for="partner in partners" :key="partner.id" class="logo-card card-shadow">
					<NuxtImg v-if="partner.logo" :src="resolveImage(partner.logo)" :alt="partner.alt || partner.name" width="220" height="140" />
					<p>{{ language === 'RU' ? partner.name : partner.name_en || partner.name }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts" async>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import PageBase from '~/components/PageBase.vue'

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()

const { data: partnersData } = await useFetch(`${config.public.apiBase}partner/`)
const partners = computed(() => partnersData.value || [])

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)
const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}
</script>

<style scoped>
.logo-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1rem;
}
.logo-card {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
}
</style>
