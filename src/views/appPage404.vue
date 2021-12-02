<template>
	<app-header></app-header>
	<main v-if="PAGE_ID.length > 0" class="main-content flex-column">
		<h2>{{ $store.state.language === 'RU' ? 'Ошибка 404' : 'Error 404' }}</h2>
		<h2>
			{{
				$store.state.language === 'RU'
					? PAGE_ID[0].blocks.find((e) => e.name === '404').contents[0].text
					: PAGE_ID[0].blocks.find((e) => e.name === '404').contents[0].text_en
			}}
		</h2>
		<router-link class="link-to-main" to="/">{{
			$store.state.language === 'RU' ? 'Вернуться на главную страницу' : 'Return to the main apge'
		}}</router-link>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPage404',
	components: {
		appHeader,
		appFooter,
	},
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.getters['page/PAGE_ID'].length > 0 ? store.getters['page/PAGE_ID'][0].title : 'title',
			description:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].description
					: 'description',
			keywords:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].keywords
					: 'keywords',
		}))
		useMeta(computedMeta)
	},
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(10)
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
	},
}
</script>

<style scoped>
.main-content {
	align-items: center;
	gap: 3rem;
	height: 87vh;
}
.main-content h2 {
	text-align: center;
	margin: 0;
	align-self: normal;
}
.link-to-main {
	text-decoration: underline;
}
@media (max-width: 980px) {
	.main-content {
		height: 70vh;
	}
}
</style>
