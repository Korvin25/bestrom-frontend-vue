<template>
	<div class="cutting">
		<PageBase :page-id="5" />
		<section class="card-shadow cutting-params">
			<h3>{{ language === 'RU' ? 'Параметры раскроя' : 'Cutting parameters' }}</h3>
			<p>{{ language === 'RU' ? 'Тип пакета:' : 'Package type:' }} {{ route.params.checkType }}</p>
			<p>{{ language === 'RU' ? 'Шов:' : 'Seam:' }} {{ route.params.checkSeam }}</p>
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
