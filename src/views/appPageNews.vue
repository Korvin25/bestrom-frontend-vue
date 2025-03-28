<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="all-news section">
			<h2 v-if="TITLE_NEWS.length !== 0">
				{{ $store.state.language === 'RU' ? 'Последние новости' : 'Last news' }}
			</h2>
			<h2 v-else>{{ $store.state.language === 'RU' ? 'Новостей нет' : 'There is no news' }}</h2>
			<div class="title-news flex-row">
				<div v-if="TITLE_NEWS.length !== 0" class="big-title-news flex-column">
					<div class="image-news card-shadow" @click="routerPush(TITLE_NEWS.slug)">
						<img :src="TITLE_NEWS.img" :alt="TITLE_NEWS.alt" />
						<div class="hidden-item">
							<div class="hidden-text">
								<img src="../assets/eye.png" alt="show eye" />
							</div>
						</div>
					</div>
					<h4>{{ $store.state.language === 'RU' ? TITLE_NEWS.name : TITLE_NEWS.name_en }}</h4>
					<p
						v-html="
							$store.state.language === 'RU' ? TITLE_NEWS.mini_description : TITLE_NEWS.mini_description_en
						"></p>
				</div>
				<!-- /.big-title-news -->
				<div
					v-for="second_news in SECOND_NEWS"
					:key="second_news.id"
					class="small-title-news flex-column">
					<div class="image-news card-shadow" @click="routerPush(second_news.slug)">
						<img :src="second_news.img" :alt="second_news.alt" />
						<div class="hidden-item">
							<div class="hidden-text">
								<img src="../assets/eye.png" alt="show eye" />
							</div>
						</div>
					</div>
					<h4>{{ $store.state.language === 'RU' ? second_news.name : second_news.name_en }}</h4>
					<p
						v-html="
							$store.state.language === 'RU'
								? second_news.mini_description
								: second_news.mini_description_en
						"></p>
				</div>
				<!-- /.small-title-news -->
			</div>
			<!-- /.title-news flex-row -->

			<div class="other-news flex-row">
				<app-news-other-item
					v-for="other_news in OTHER_NEWS"
					:slug="other_news.slug"
					:key="other_news.id"
					:title="$store.state.language === 'RU' ? other_news.name : other_news.name_en"
					:text="
						$store.state.language === 'RU' ? other_news.mini_description : other_news.mini_description_en
					"
					:image="other_news.img"></app-news-other-item>
			</div>
			<!-- /.other-news flex-row -->
		</section>
		<!-- /.section -->
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appNewsOtherItem from '../components/appNewsOtherItem.vue'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageNews',
	components: {
		appHeader,
		appFooter,
		appNewsOtherItem,
	},
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.getters['page/PAGE_ID'].length > 0
					? store.state.language === 'RU'
						? store.getters['page/PAGE_ID'][0].title
						: store.getters['page/PAGE_ID'][0].title_en
					: 'title',
			description:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].description
					: 'description',
			
		}))
		useMeta(computedMeta)
	},
	computed: {
		...mapGetters({
			TITLE_NEWS: 'news/TITLE_NEWS',
			SECOND_NEWS: 'news/SECOND_NEWS',
			OTHER_NEWS: 'news/OTHER_NEWS',
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(6)
		this.GET_NEWS()
	},
	methods: {
		...mapActions({
			GET_NEWS: 'news/GET_NEWS',
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(`/news/${path}`)
		},
	},
}
</script>

<style scoped>
.all-news h4 {
	margin: 1rem 0 0 0;
}
.title-news {
	padding: 0 0 1rem 0;
	justify-content: normal;
	align-items: flex-start;
	border-bottom: 1px solid #2fc1ff;
}
.big-title-news {
	width: 100%;
}
.small-title-news {
	margin-left: 2rem;
	width: 70%;
}
.image-news {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	position: relative;
	height: 15rem;
}
.image-news img {
	max-width: 100%;
	max-height: 100%;
}
.image-news:hover .hidden-item {
	opacity: 1;
}
.image-news:hover > img {
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}
.other-news {
	justify-content: space-between;
	flex-wrap: wrap;
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

@media (max-width: 980px) {
	.all-news h2 {
		margin: 1rem 0 0 0;
	}
	.small-title-news {
		margin: 0;
		width: 100%;
	}
	.other-news,
	.title-news {
		flex-direction: column;
	}
}
</style>
