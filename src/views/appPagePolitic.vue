<template>
	<app-header></app-header>
	<main v-if="politicPage" class="main-content flex-column">
		<section class="section">
			<h2>
				{{
					$store.state.language === 'RU'
						? (politicPage.title || 'Политика конфиденциальности')
						: (politicPage.title_en || 'Privacy Policy')
				}}
			</h2>

			<div
				class="policy-content card-shadow"
				v-html="
					$store.state.language === 'RU'
						? politicPage.blocks[0]?.contents[0]?.text
						: (politicPage.blocks[0]?.contents[0]?.text_en || politicPage.blocks[0]?.contents[0]?.text)
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
	name: 'AppPagePolitic',
	components: {
		appHeader,
		appFooter,
	},
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.state.language === 'RU'
					? 'Политика конфиденциальности'
					: 'Privacy Policy',
			description: 'Политика конфиденциальности компании BESTROM',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			politicPage: null,
		}
	},
	async created() {
		const response = await this.GET_PAGE_ID(12)
		// Жестко фиксируем локальное состояние только на ответ для ID=12,
		// чтобы глобальные изменения pageID от других компонентов не влияли на страницу
		if (response && response.data && String(response.data.id) === '12') {
			this.politicPage = response.data
		} else if (Array.isArray(this.$store.state.page.pageID) && this.$store.state.page.pageID[0]?.id === 12) {
			this.politicPage = this.$store.state.page.pageID[0]
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