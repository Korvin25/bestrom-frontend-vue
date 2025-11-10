<template>
	<footer class="footer flex-row">
		<p>
			{{
				$store.state.language === 'RU'
					? '© ЗАО "Бестром" 2021, упаковочное оборудование'
					: '© ZAO "Bestrom" 2021, packaging equipment'
			}}
		</p>
		<p><a href="tel:+78005557457">+7-800-555-74-57</a></p>
		<!-- <p>{{ $store.state.language === 'RU' ? 'ПРЕСС-ЦЕНТР' : 'PRESS CENTER' }}</p> -->
		<p class="politic" v-if="PAGE_ID[0] && PAGE_ID[0].politic_filr ">
			<a download :href="PAGE_ID[0].politic_filr" target="_blank">{{
				$store.state.language === 'RU' ? 'Политика конфиденциальности' : 'Privacy policy'
			}}</a>
		</p>
	</footer>
	<!-- /.footer -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'AppFooter',
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(1)
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
	},
}
</script>

<style scoped>
.politic {
	margin-left: auto;
}
.footer {
	justify-content: flex-start;
}
.footer p {
	margin-right: 4rem;
}
@media (max-width: 980px) {
	.footer {
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		padding: 0 1rem;
		margin: 1rem 0 5rem 0;
	}
	.footer p {
		margin: 0 0 1rem 0;
	}
}
</style>
