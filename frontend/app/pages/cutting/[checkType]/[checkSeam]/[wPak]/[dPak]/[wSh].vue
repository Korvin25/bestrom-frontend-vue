<template>
	<div class="cutting">
		<PageBase :page-id="5" />
		<section class="card-shadow cutting-params">
			<h3>{{ language === 'RU' ? 'Результат раскроя' : 'Cutting result' }}</h3>
			<p>{{ language === 'RU' ? 'Тип пакета:' : 'Package type:' }} {{ route.params.checkType }}</p>
			<p>{{ language === 'RU' ? 'Шов:' : 'Seam:' }} {{ route.params.checkSeam }}</p>
			<p>{{ language === 'RU' ? 'Ширина пакета:' : 'Package width:' }} {{ route.params.wPak }}</p>
			<p>{{ language === 'RU' ? 'Глубина пакета:' : 'Package depth:' }} {{ route.params.dPak }}</p>
			<p>{{ language === 'RU' ? 'Ширина шва:' : 'Seam width:' }} {{ route.params.wSh }}</p>
		</section>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import PageBase from '~/components/PageBase.vue'

const route = useRoute()
const appStore = useAppStore()
const { language } = storeToRefs(appStore)
</script>

<style scoped>
.cutting-params {
	padding: 1.5rem;
	margin-top: 2rem;
}
</style>
