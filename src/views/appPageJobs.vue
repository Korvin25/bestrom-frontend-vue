<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="desktop-section section flex-column">
			<h2 v-if="VACANCY.length !== 0">Вакансии</h2>
			<h2 v-else>Вакансий нет</h2>
			<app-job-item
				v-for="job in VACANCY"
				:key="job.id"
				:alt="job.alt"
				:image="job.img"
				:title="job.name"
				:requirements="job.requirements"
				:skills="job.skills"
				:pay="job.salary"
			></app-job-item>
		</section>
		<!-- ./desktop-section -->

		<section class="mobile-section section flex-column">
			<div class="vacation card-shadow">
				<h2>ВАКАНСИИ</h2>
			</div>

			<carousel :items-to-show="1.3">
				<slide v-for="job in VACANCY" :key="job.id">
					<div class="flex-column job-item card-shadow">
						<h4>{{ job.name }}</h4>
						<img :src="job.img" :alt="job.alt" />
						<h4>Заработная плата</h4>
						<p>{{ job.salary }}</p>
						<button class="btn" @click="routerPush(job.alt)">ОТКЛИКНУТЬСЯ</button>
					</div>
				</slide>
				<template #addons>
					<pagination />
				</template>
			</carousel>
		</section>
		<!-- ./mobile-section -->
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appJobItem from '../components/appJobItem.vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageJobs',
	components: {
		appHeader,
		appFooter,
		appJobItem,
		Carousel,
		Slide,
		Pagination,
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
			VACANCY: 'vacancy/VACANCY',
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(9)
		this.GET_VACANCY()
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
			GET_VACANCY: 'vacancy/GET_VACANCY',
		}),
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(`/jobs/${path}`)
		},
	},
}
</script>

<style scoped>
.desktop-section {
	display: flex;
}
.mobile-section {
	display: none;
}
@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}
	.mobile-section {
		margin-top: 1rem;
		display: flex;
	}
	.vacation {
		margin: 0 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vacation h2 {
		margin: 1rem 0;
	}
	.job-item {
		flex-grow: 1;
		align-self: stretch;
		margin: 1rem 0.5rem;
		padding: 2rem 0 1rem 0;
		align-items: center;
	}
	.job-item img {
		margin: 2rem 0;
		align-self: center;
	}
	.job-item h4 {
		margin: 0;
		font-weight: 600;
		font-size: 16px;
	}
	.job-item p {
		font-weight: 600;
		font-size: 16px;
		margin: 5rem 0;
	}
	.job-item .btn {
		width: 90%;
	}
}
</style>
