<template>
	<app-header></app-header>
	<main v-if="PAGE_ID.length > 0" class="main-content flex-column">
		<section class="section">
			<h2 class="desktop-section">
				{{
					$store.state.language === 'RU'
						? 'Деятельность компании БЕСТРОМ'
						: 'Activities of the company BESTROM'
				}}
			</h2>
			<h2 class="mobile-section">
				{{ $store.state.language === 'RU' ? 'Деятельность компании' : 'Activities of the company' }}
			</h2>
			<div
				v-if="PAGE_ID[0].blocks.find((e) => e.name === 'activity')"
				class="main-slider-content card-shadow">
				<carousel :items-to-show="1" :snap-align="'start'" :wrap-around="true">
					<slide
						v-for="content in PAGE_ID[0].blocks.find((e) => e.name === 'activity').contents"
						:key="content.id">
						<app-block-content
							:id="content.id"
							:title="$store.state.language === 'RU' ? content.name : content.name_en"
							:text="$store.state.language === 'RU' ? content.text : content.text_en"
							:image="content.file"></app-block-content>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 1" />
						<pagination v-if="slidesCount > 1" />
					</template>
				</carousel>
			</div>
		</section>
		<!-- /.section -->

		<section class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Подбор оборудования' : 'Equipment selection' }}</h2>
			<div v-if="FILTERS.length > 0" class="inventory-mobile flex-row">
				<div
					v-for="category in FILTERS"
					:key="category.id"
					class="inventory-item flex-column card-shadow"
					@click="pushToCatalog(category.id)">
					<h4>{{ $store.state.language === 'RU' ? category.name : category.name_en }}</h4>
					<div class="inventory-item-img">
						<img :src="category.img" alt="inventory item image" />
					</div>
					<app-hidden-item
						:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
				</div>
			</div>
			<!-- /.inventory-items -->
		</section>
		<!-- /.section -->

		<section class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Партнеры' : 'Partners' }}</h2>
			<div class="slider-content card-shadow">
				<carousel :breakpoints="breakpoints">
					<slide v-for="partner in PARTNERS" :key="partner.id">
						<app-partners-item
							:image="partner.logo"
							:alt="partner.alt"
							@click="showPartner(partner.alt)"></app-partners-item>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 3" />
						<pagination v-if="slidesCount > 3" />
					</template>
				</carousel>
			</div>
		</section>

		<section class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Клиенты' : 'Clients' }}</h2>
			<div class="slider-content card-shadow">
				<carousel :breakpoints="breakpoints">
					<slide v-for="client in CLIENTS" :key="client.id">
						<app-partners-item
							:image="client.logo"
							:alt="client.alt"
							@click="showClient(client.alt)"></app-partners-item>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 3" />
						<pagination v-if="slidesCount > 3" />
					</template>
				</carousel>
			</div>
		</section>

		<section class="section">
			<h2 v-if="TITLE_NEWS.length !== 0">{{ $store.state.language === 'RU' ? 'Новости' : 'News' }}</h2>
			<h2 v-else>{{ $store.state.language === 'RU' ? 'Новостей нет' : 'No news' }}</h2>

			<carousel class="mobile-section" :items-to-show="1.5">
				<slide v-for="item in mobileNews" :key="item.id">
					<app-main-news-mobile
						:alt="item.alt"
						:title="$store.state.language === 'RU' ? item.name : item.name_en"
						:image="item.img"></app-main-news-mobile>
				</slide>
				<template #addons="{ slidesCount }">
					<pagination v-if="slidesCount > 2" />
				</template>
			</carousel>

			<div v-if="TITLE_NEWS.length !== 0" class="news-items flex-row">
				<app-main-news-big-item
					:alt="TITLE_NEWS.alt"
					:title="$store.state.language === 'RU' ? TITLE_NEWS.name : TITLE_NEWS.name_en"
					:text="
						$store.state.language === 'RU' ? TITLE_NEWS.mini_description : TITLE_NEWS.mini_description_en
					"
					:image="TITLE_NEWS.img"></app-main-news-big-item>
				<app-main-news-small-item
					v-for="item in secondNews"
					:key="item.id"
					:alt="item.alt"
					:title="$store.state.language === 'RU' ? item.name : item.name_en"
					:image="item.img"></app-main-news-small-item>
			</div>
		</section>

		<transition name="modal">
			<app-modal-partners-item
				v-if="customers.showModal"
				:image="customers.logo"
				:alt="customers.alt"
				:title="customers.name"
				:text="$store.state.language === 'RU' ? customers.description : customers.description_en"
				:machines="customers.machines"
				@close="customers.showModal = false"></app-modal-partners-item>
		</transition>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appPartnersItem from '../components/appPartnersItem.vue'
import appBlockContent from '../components/appBlockContent.vue'
import appMainNewsBigItem from '../components/appMainNewsBigItem.vue'
import appMainNewsSmallItem from '../components/appMainNewsSmallItem.vue'
import appHiddenItem from '../components/appHiddenItem.vue'
import appMainNewsMobile from '../components/appMainNewsMobile.vue'
import appModalPartnersItem from '../components/appModalPartnersItem.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	components: {
		appHeader,
		appFooter,
		appPartnersItem,
		appBlockContent,
		appMainNewsBigItem,
		appMainNewsSmallItem,
		appHiddenItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
		appMainNewsMobile,
		appModalPartnersItem,
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
			keywords:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].keywords
					: 'keywords',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			secondNews: [],
			mobileNews: [],
			customers: {
				showModal: false,
			},
			breakpoints: {
				0: {
					itemsToShow: 1.5,
					snapAlign: 'center',
					wrapAround: true,
				},
				1248: {
					itemsToShow: 3,
					snapAlign: 'center',
					mouseDrag: false,
					touchDrag: false,
					wrapAround: true,
				},
			},
		}
	},
	computed: {
		...mapGetters({
			PARTNERS: 'partners/PARTNERS',
			CLIENTS: 'clients/CLIENTS',
			TITLE_NEWS: 'news/TITLE_NEWS',
			ALL_NEWS: 'news/ALL_NEWS',
			FILTERS: 'filters/FILTERS',
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	watch: {
		customers: {
			handler() {
				if (this.customers.showModal) {
					document.body.classList.add('modal-open')
				} else {
					document.body.classList.remove('modal-open')
				}
			},
			deep: true,
		},
	},
	mounted() {
		this.GET_PAGE_ID(1)
		this.GET_PARTNERS()
		this.GET_CLIENTS()
		this.GET_NEWS().then(() => {
			this.secondNews = this.threeNews()
			this.mobileNews = this.threeNews()
			this.mobileNews.unshift(this.TITLE_NEWS)
			this.GET_FILTERS()
		})
	},
	methods: {
		...mapActions({
			GET_PARTNERS: 'partners/GET_PARTNERS',
			GET_CLIENTS: 'clients/GET_CLIENTS',
			GET_NEWS: 'news/GET_NEWS',
			GET_FILTERS: 'filters/GET_FILTERS',
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		pushToCatalog(category) {
			this.$router.push({ path: 'catalog', query: { category: category } })
			window.scrollTo(0, 0)
		},
		showClient(client) {
			this.customers = this.CLIENTS.find((e) => e.alt === client)
			this.customers.machines = true
			this.customers.showModal = true
		},
		showPartner(partner) {
			this.customers = this.PARTNERS.find((e) => e.alt === partner)
			this.customers.machines = false
			this.customers.showModal = true
		},
		threeNews() {
			const news = []
			for (const item of this.ALL_NEWS) {
				if (news.length < 3 && item !== this.TITLE_NEWS) {
					news.push(item)
				}
			}
			return news
		},
	},
}
</script>

<style>
.main-slider-content {
	padding: 1rem 4rem;
	align-items: center;
}
.inventory-mobile {
	gap: 1rem 2rem;
}
.inventory-item {
	padding: 0 1rem 1rem 1rem;
	text-align: center;
	width: 20%;
	flex-grow: 1;
	position: relative;
	align-items: center;
	justify-content: space-between;
}
.inventory-item h4 {
	margin: 1rem 1rem 0 1rem;
}
.inventory-item-img {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.inventory-item-img img {
	width: 100%;
}
.inventory-item:hover .hidden-item {
	opacity: 1;
}
.inventory-item:hover h4,
.inventory-item:hover img {
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}
.news .hidden-item {
	background: rgba(106, 106, 106, 0.8);
}
.news-items {
	margin: 3rem 0;
	flex-wrap: wrap;
	gap: 1rem 1rem;
	justify-content: space-between;
}
.desktop-section {
	display: block;
}
.mobile-section {
	display: none;
}
@media (max-width: 1248px) {
	.main-slider-content {
		padding: 1rem 2rem;
	}
	.desktop-section {
		display: none;
	}
	.mobile-section {
		display: block;
	}
	.flex-row.inventory-mobile {
		height: 44rem;
		flex-direction: column;
	}
	.inventory-item {
		flex-grow: 1;
		padding: 0 0 1rem 0;
		width: 100%;
	}
	.partners-block {
		flex-grow: 1;
		width: 100%;
	}
	.flex-row.news-items {
		display: none;
	}
}
</style>
