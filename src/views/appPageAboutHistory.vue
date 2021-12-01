<template>
	<app-header></app-header>
	<main v-if="PAGE_ID.length > 0" class="main-content flex-column">
		<section v-if="PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history')" class="section">
			<h2>О компании</h2>
			<div class="history-company flex-column">
				<h4>
					{{ PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history').contents[0].name }}
				</h4>
				<div class="first-row flex-row">
					<p>
						{{ PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history').contents[0].text }}
					</p>
					<YouTube
						ref="youtube"
						color="white"
						class="video-player"
						width="100%"
						height="100%"
						:src="PAGE_ID[0].blocks.find((e) => e.name === 'youtube').contents[0].text" />
				</div>

				<div class="flex-row second-row">
					<img
						:src="
							'http://bexram.online:8001' +
							PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history').contents[1].file[0].file
						"
						:alt="PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history').contents[1].file[0].alt" />
					<p>
						{{ PAGE_ID[0].blocks.find((e) => e.name === 'advanced-history').contents[1].text }}
					</p>
				</div>
			</div>
		</section>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import YouTube from 'vue3-youtube'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageAboutHistory',
	components: {
		appHeader,
		appFooter,
		YouTube,
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
		this.GET_PAGE_ID(3)
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
	},
}
</script>

<style scoped>
.video-player {
	margin-left: 2rem;
	flex-grow: 1;
	height: 15rem;
}
.flex-row {
	justify-content: space-between;
}
.history-company p {
	margin: 0;
	padding: 26px 0 0 0;
	border-top: 1px solid #2fc1ff;
	width: 50%;
}
.second-row {
	margin-top: 2rem;
}
.second-row img {
	align-self: flex-start;
	width: 100%;
	max-width: 35rem;
}
.second-row p {
	width: 100%;
	padding: 0 0 0 2rem;
	border: none;
}

@media (max-width: 980px) {
	.video-player {
		margin-left: 0;
		flex-grow: 1;
	}
	.first-row {
		flex-direction: column-reverse;
	}
	.first-row p {
		width: 100%;
		padding-top: 1rem;
		border: none;
	}
	.second-row {
		margin-top: 1rem;
		flex-direction: column;
	}
	.second-row p {
		width: 100%;
		margin: 1rem 0;
		border-bottom: 1px solid #2fc1ff;
		padding: 0 0 1rem 0;
	}
}
</style>
