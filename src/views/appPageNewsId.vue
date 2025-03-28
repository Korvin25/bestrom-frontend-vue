<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="section">
			<h2>{{ $store.state.language === 'RU' ? currentNews.name : currentNews.name_en }}</h2>
			<div class="id-news flex-row">
				<div class="current-news flex-column">
					<img :src="currentNews.img" :alt="currentNews.alt" />
					<p
						v-html="
							$store.state.language === 'RU' ? currentNews.description : currentNews.description_en
						"></p>
					<div class="date-publication flex-row">
						<img src="../assets/calendar.png" alt="calendar" />
						<p>{{ new Date(currentNews.published).toLocaleDateString() }}</p>
					</div>
				</div>
				<div class="last-news flex-column card-shadow">
					<h3>{{ $store.state.language === 'RU' ? 'Недавние новости' : 'Recent news' }}</h3>
					<div
						v-for="news in lastNews"
						:key="news.id"
						class="image-news card-shadow"
						@click="routerPush(news.slug)">
						<img :src="news.img" :alt="news.alt" />
						<div class="hidden-item">
							<div class="hidden-text">
								<img src="../assets/eye.png" alt="show eye" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import { useRoute } from 'vue-router'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageNewsId',
	components: {
		appHeader,
		appFooter,
	},
	setup() {
		const store = useStore()
		const routeParam = useRoute().params.slug
		const computedMeta = computed(() => ({
			title:
				store.getters['news/ALL_NEWS'].length > 0
					? store.state.language === 'RU'
						? store.getters['news/ALL_NEWS'].find((e) => e.slug == routeParam).name
						: store.getters['news/ALL_NEWS'].find((e) => e.slug == routeParam).name_en
					: 'title',
			description:
				store.getters['news/ALL_NEWS'].length > 0
					? store.state.language === 'RU'
						? store.getters['news/ALL_NEWS'].find((e) => e.slug == routeParam).mini_description
						: store.getters['news/ALL_NEWS'].find((e) => e.slug == routeParam).mini_description_en
					: 'description',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			currentNews: {},
			lastNews: [],
		}
	},
	computed: {
		...mapGetters({
			ALL_NEWS: 'news/ALL_NEWS',
		}),
	},
	watch: {
		$route: 'fetchData',
	},
	mounted() {
		this.GET_NEWS().then(() => {
			this.fetchData()
		})
	},
	methods: {
		...mapActions({
			GET_NEWS: 'news/GET_NEWS',
		}),
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.replace(`/news/${path}`)
		},
		findCurrentNews() {
			return this.ALL_NEWS.find((e) => e.slug == this.$route.params.slug)
		},
		findLastNews() {
			const news = []
			for (const item of this.ALL_NEWS) {
				if (item.slug !== this.$route.params.slug) {
					news.push(item)
					if (news.length === 3) {
						return news
					}
				}
			}
		},
		fetchData() {
			this.currentNews = this.findCurrentNews()
			this.lastNews = this.findLastNews()
		},
	},
}
</script>

<style scoped>
.id-news {
	align-items: flex-start;
}
.current-news {
	width: 80%;
}
.current-news img {
	align-self: center;
	max-width: 80%;
}
.last-news {
	position: relative;
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	margin-left: 2rem;
	padding: 1rem 2rem;
	max-width: 25rem;
}
.last-news h3 {
	margin: 1rem 0;
	align-self: normal;
}
.image-news {
	margin: 1rem 0;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: center;
	cursor: pointer;
	position: relative;
}
.image-news img {
	max-width: 10rem;
	margin: 1rem;
}
.image-news:hover .hidden-item {
	opacity: 1;
}
.image-news:hover > img {
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}
.hidden-item {
	position: absolute;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1rem;
	cursor: pointer;
	background: rgba(106, 106, 106, 0.8);
	box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	transition: opacity 0.5s;
	opacity: 0;
}
.hidden-item img {
	max-width: 3rem;
	width: auto;
	height: auto;
}
.hidden-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.date-publication {
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}
.date-publication img {
	margin-right: 0.5rem;
}
@media (max-width: 980px) {
	.id-news {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.last-news {
		margin: 1rem auto;
		width: 80%;
	}
	.image-news {
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.current-news[data-v-60b3ed14] {
		text-align: center;
		width: 100%;
	}
	.current-news[data-v-60b3ed14] p {
		width: 100%;
	}
	.date-publication p {
		text-align: left;
	}
}
</style>
