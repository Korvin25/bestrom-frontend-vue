<template>
	<app-header></app-header>
	<main v-if="requisitesPage" class="main-content flex-column">
		<section class="section">
			<h2>
				{{
					$store.state.language === 'RU'
						? (requisitesPage.title || 'Реквизиты')
						: (requisitesPage.title_en || 'Requisites')
				}}
			</h2>

			<div
				class="policy-content card-shadow"
				v-html="
					$store.state.language === 'RU'
						? requisitesPage.blocks[0]?.contents[0]?.text
						: (requisitesPage.blocks[0]?.contents[0]?.text_en || requisitesPage.blocks[0]?.contents[0]?.text)
				">
			</div>
		</section>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appFooter from '@/components/appFooter.vue'
import appHeader from '@/components/appHeader.vue'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'
import { mapActions, useStore } from 'vuex'

export default {
	name: 'AppPageRequisites',
	components: {
		appHeader,
		appFooter,
	},
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.state.language === 'RU'
					? 'Реквизиты'
					: 'Requisites',
			description: 'Реквизиты компании BESTROM',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			requisitesPage: null,
		}
	},
	async created() {
		const response = await this.GET_PAGE_ID(13)
		// Жестко фиксируем локальное состояние только на ответ для ID=13,
		// чтобы глобальные изменения pageID от других компонентов не влияли на страницу
		if (response && response.data && String(response.data.id) === '13') {
			this.requisitesPage = response.data
		} else if (Array.isArray(this.$store.state.page.pageID) && this.$store.state.page.pageID[0]?.id === 13) {
			this.requisitesPage = this.$store.state.page.pageID[0]
		}
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
	},
}
</script>

<style scoped>
.policy-content {
	padding: 2rem;
	line-height: 1.6;
	font-size: 16px;
	white-space: pre-line;
}
@media (max-width: 980px) {
	.policy-content {
		padding: 1rem;
		font-size: 14px;
	}
}
</style>