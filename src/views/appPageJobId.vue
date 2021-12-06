<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="desktop-section section flex-column">
			<h2>Вакансии</h2>
			<div class="job-item flex-column card-shadow">
				<div class="flex-row">
					<img :src="currentJob.img" :alt="currentJob.alt" />
					<div class="flex-column job-item-description">
						<h4>{{ currentJob.name }}</h4>
						<h5>
							{{ $store.state.language === 'RU' ? 'Основные требования:' : 'Primary requirements:' }}
						</h5>
						<p>{{ currentJob.requirements }}</p>
						<h5>{{ $store.state.language === 'RU' ? 'Основные навыки:' : 'Basic skills:' }}</h5>
						<p>{{ currentJob.skills }}</p>
						<h5>{{ $store.state.language === 'RU' ? 'Образование:' : 'Education:' }}</h5>
						<p>{{ currentJob.education }}</p>
						<h5>{{ $store.state.language === 'RU' ? 'Опыт работы:' : 'Work experience:' }}</h5>
						<p>{{ currentJob.experience }}</p>
						<h5>{{ $store.state.language === 'RU' ? 'Вы получаете:' : 'You are getting:' }}</h5>
						<p>{{ currentJob.youget }}</p>
					</div>
					<div class="flex-column job-item-pay">
						<h4>{{ $store.state.language === 'RU' ? 'Заработная плата' : 'Salary' }}</h4>
						<p>{{ currentJob.salary }}</p>
					</div>
				</div>
				<div class="flex-row flex-buttons">
					<a href="tel:+78005557457">
						<button class="btn">{{ $store.state.language === 'RU' ? 'Позвонить' : 'Call' }}</button>
					</a>
					<button class="btn" @click="showModalRespond = true">
						{{ $store.state.language === 'RU' ? 'Откликнуться' : 'Respond' }}
					</button>
				</div>
			</div>
		</section>
		<!-- ./desktop-section -->

		<section class="mobile-section section flex-column">
			<div class="vacation card-shadow">
				<h2>{{ currentJob.name }}</h2>
			</div>
			<div class="flex-column job-item card-shadow">
				<img src="../assets/job-image.png" alt="job image" />
				<h4>{{ $store.state.language === 'RU' ? 'Заработная плата' : 'Salary' }}</h4>
				<p>{{ currentJob.salary }}</p>
				<h4>{{ $store.state.language === 'RU' ? 'Основные требования:' : 'Primary requirements:' }}</h4>
				<p>{{ currentJob.requirements }}</p>
				<h4>{{ $store.state.language === 'RU' ? 'Основные навыки:' : 'Basic skills:' }}</h4>
				<p>{{ currentJob.skills }}</p>
				<h4>{{ $store.state.language === 'RU' ? 'Вас ждёт:' : 'Waiting for you:' }}</h4>
				<p>{{ currentJob.youget }}</p>
				<div class="flex-row flex-buttons">
					<a href="tel:+78005557457">
						<button class="btn">{{ $store.state.language === 'RU' ? 'Позвонить' : 'Call' }}</button>
					</a>
					<button class="btn" @click="showModalRespond = true">
						{{ $store.state.language === 'RU' ? 'Откликнуться' : 'Respond' }}
					</button>
				</div>
			</div>
		</section>
		<!-- ./mobile-section -->
	</main>

	<transition-group name="modal">
		<app-modal-job-respond
			v-if="showModalRespond"
			@close="showModalRespond = false"></app-modal-job-respond>
	</transition-group>

	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appModalJobRespond from '../components/appModalJobRespond.vue'
import { useRoute } from 'vue-router'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageJobId',
	components: {
		appHeader,
		appFooter,
		appModalJobRespond,
	},
	setup() {
		const store = useStore()
		const routeParam = useRoute().params.jobId
		const computedMeta = computed(() => ({
			title:
				store.getters['vacancy/VACANCY'].length > 0
					? store.getters['vacancy/VACANCY'].find((e) => e.alt === routeParam).name
					: 'title',
			description:
				store.getters['vacancy/VACANCY'].length > 0
					? store.getters['vacancy/VACANCY'].find((e) => e.alt === routeParam).requirements
					: 'description',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			currentJob: {},
			showModalRespond: false,
		}
	},
	computed: {
		...mapGetters({
			VACANCY: 'vacancy/VACANCY',
		}),
	},
	watch: {
		showModalRespond() {
			if (this.showModalRespond) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
	},
	mounted() {
		this.GET_VACANCY().then(() => {
			this.currentJob = this.VACANCY.find((e) => e.alt === this.$route.params.jobId)
		})
	},
	methods: {
		...mapActions({
			GET_VACANCY: 'vacancy/GET_VACANCY',
		}),
	},
}
</script>

<style scoped>
.job-item {
	margin: 1rem 0;
	padding: 2rem 3rem;
}
.job-item img {
	align-self: center;
	max-width: 11rem;
	width: 100%;
}
.job-item-description {
	width: 100%;
	margin: 0 2rem;
}
.job-item-description h4 {
	margin: 0;
	padding-bottom: 1rem;
	border-bottom: 1px solid #2fc1ff;
}
.job-item-description h5 {
	margin: 1rem 0;
}
.job-item-description p {
	margin: 0;
}
.job-item-pay {
	max-width: 30rem;
	width: 100%;
	line-height: normal;
	align-items: center;
	justify-content: flex-start;
}
.job-item-pay h4 {
	margin: 0;
}
.job-item-pay p {
	margin-top: 8rem;
	text-align: center;
	font-size: 2.5rem;
}
.flex-buttons {
	margin-top: 3rem;
	justify-content: space-around;
}
.flex-buttons .btn {
	width: 100%;
	margin: 0 1rem;
}
.flex-buttons a {
	margin-right: 2rem;
	width: 100%;
}
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
		margin: 1rem 0.5rem;
		padding: 1rem;
	}
	.job-item img {
		margin: 0;
		align-self: center;
		max-width: 14rem;
		max-height: 14rem;
		width: auto;
		height: auto;
	}
	.job-item h4 {
		margin: 2rem 0 0 0;
		font-weight: 600;
		font-size: 16px;
	}
	.job-item p {
		font-weight: 600;
		font-size: 16px;
		margin: 1rem 0;
	}
	.flex-buttons a {
		margin-right: 1rem;
	}
	.flex-buttons .btn {
		margin: 0;
		width: 100%;
		font-weight: bold;
		font-size: 14px;
	}
}
</style>
