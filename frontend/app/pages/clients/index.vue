<template>
	<div>
		<PageBase :page-id="8" />
		<section class="section">
			<div class="logo-grid">
				<div v-for="client in clients" :key="client.id" class="logo-card card-shadow">
					<NuxtImg v-if="client.logo" :src="resolveImage(client.logo)" :alt="client.alt || client.name" width="220" height="140" />
					<p>{{ language === 'RU' ? client.name : client.name_en || client.name }}</p>
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

const { data: clientsData } = await useFetch(`${config.public.apiBase}client/`)
const clients = computed(() => clientsData.value || [])

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
