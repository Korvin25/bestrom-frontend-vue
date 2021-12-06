<template>
	<app-header></app-header>
	<main v-if="PAGE_ID.length > 0" class="main-content flex-column">
		<section v-if="PAGE_ID[0].blocks.find((e) => e.name === 'history')" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'О компании' : 'About company' }}</h2>
			<div class="content flex-row card-shadow">
				<div class="about-content fex-column" @click="$router.push('/about/history')">
					<h3>
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks.find((e) => e.name === 'history').contents[0].name
								: PAGE_ID[0].blocks.find((e) => e.name === 'history').contents[0].name_en
						}}
					</h3>
					<p class="text-about-content">
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks.find((e) => e.name === 'history').contents[0].text
								: PAGE_ID[0].blocks.find((e) => e.name === 'history').contents[0].text_en
						}}
					</p>
					<button class="content-btn btn" @click="$router.push('/about/history')">
						{{ $store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
					</button>
				</div>
				<YouTube
					ref="youtube"
					class="video-player"
					width="100%"
					height="100%"
					:src="PAGE_ID[0].blocks.find((e) => e.name === 'youtube').contents[0].text" />
			</div>
		</section>
		<!-- /.section -->

		<section class="history-development-mobile section">
			<h2>{{ $store.state.language === 'RU' ? 'История развития' : 'The history of development' }}</h2>
			<div class="card-shadow">
				<carousel :items-to-show="4.5" :wrap-around="true">
					<slide v-for="item in HISTORY" :key="item.year">
						<p class="carousel__item">{{ item.year }}</p>
					</slide>
					<template #addons="{ currentSlide }">
						<div class="history-description">
							<img
								:alt="
									$store.state.language === 'RU'
										? findHistory(currentSlide + 1).description
										: findHistory(currentSlide + 1).description_en
								"
								:src="findHistory(currentSlide + 1).img" />
							<h3>
								{{
									$store.state.language === 'RU'
										? findHistory(currentSlide + 1).description
										: findHistory(currentSlide + 1).description_en
								}}
							</h3>
						</div>
					</template>
				</carousel>
			</div>
		</section>
		<!-- /.section -->

		<section v-if="PAGE_ID[0].blocks.find((e) => e.name === 'reasons')" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Почему выбирают нас' : 'Why choose us' }}</h2>

			<div class="content flex-row card-shadow">
				<div class="about-content flex-column">
					<h3>
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].name
								: PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].name_en
						}}
					</h3>
					<p class="text-about-content" style="padding: 1rem 0">
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].text.split('/')[0]
								: PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].text_en.split('/')[0]
						}}
					</p>
					<button
						class="content-btn btn"
						@click="
							routerPush(
								$store.state.language === 'RU'
									? PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].text.split('/')[1]
									: PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].text_en.split('/')[1],
							)
						">
						{{ $store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
					</button>
				</div>
				<div class="image-content">
					<img
						:alt="PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].file[0].alt"
						class="image-world"
						:src="
							'http://bexram.online:8001' +
							PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].file[0].file
						" />
				</div>
			</div>

			<div
				v-if="
					PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents.find((e) => e.name === 'choice')
				"
				class="our-choice flex-column">
				<div class="reasons flex-row">
					<div
						v-for="item in PAGE_ID[0].blocks
							.find((e) => e.name === 'reasons')
							.contents.find((e) => e.name === 'choice').file"
						:key="item.id"
						class="item-reason card-shadow">
						<img :alt="item.alt" :src="'http://bexram.online:8001' + item.file" />
						<app-hidden-item :text="item.alt"></app-hidden-item>
					</div>
				</div>
			</div>
		</section>
		<!-- /.section -->

		<section
			v-if="PAGE_ID[0].blocks.find((e) => e.name === 'directors')"
			class="directors-desktop section">
			<h2>{{ $store.state.language === 'RU' ? 'Руководство БЕСТРОМ' : 'BESTROM management' }}</h2>
			<div class="directors flex-row">
				<div
					v-for="item in PAGE_ID[0].blocks.find((e) => e.name === 'directors').contents"
					:key="item.id"
					class="director-item flex-column">
					<img :alt="item.file[0].alt" :src="'http://bexram.online:8001' + item.file[0].file" />
					<h5>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h5>
					<p>{{ $store.state.language === 'RU' ? item.text : item.text_en }}</p>
				</div>
			</div>
		</section>
		<!-- /.section -->

		<section v-if="PAGE_ID[0].blocks.find((e) => e.name === 'we-create')" class="section">
			<h2>
				{{
					$store.state.language === 'RU' ? 'Мы производим и реализуем' : 'We manufacture and distribute'
				}}
			</h2>

			<carousel :autoplay="4000" :items-to-show="1.5" :wrap-around="true" class="our-choice-mobile">
				<slide
					v-for="slide in PAGE_ID[0].blocks.find((e) => e.name === 'we-create').contents"
					:key="slide.id">
					<div class="reason-mobile item-reason card-shadow">
						<h5>{{ $store.state.language === 'RU' ? slide.name : slide.name_en }}</h5>
					</div>
				</slide>
			</carousel>

			<div class="our-choice flex-column">
				<div class="reasons flex-row">
					<div
						v-for="item in PAGE_ID[0].blocks.find((e) => e.name === 'we-create').contents"
						:key="item.id"
						class="item-reason card-shadow">
						<h5>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h5>
					</div>
				</div>
			</div>
		</section>
		<!-- /.section -->

		<section
			v-if="PAGE_ID[0].blocks.find((e) => e.name === 'directors')"
			class="directors-mobile section">
			<h2>{{ $store.state.language === 'RU' ? 'Руководство БЕСТРОМ' : 'BESTROM management' }}</h2>
			<carousel :items-to-show="1.3" :autoplay="3800" :wrap-around="true" class="our-choice-mobile">
				<slide
					v-for="slide in PAGE_ID[0].blocks.find((e) => e.name === 'directors').contents"
					:key="slide.id">
					<div class="director-item flex-column">
						<img :alt="slide.file[0].alt" :src="'http://bexram.online:8001' + slide.file[0].file" />
						<h5>{{ $store.state.language === 'RU' ? slide.name : slide.name_en }}</h5>
						<p>{{ $store.state.language === 'RU' ? slide.text : slide.text_en }}</p>
					</div>
				</slide>
			</carousel>
		</section>

		<section class="history-development-desktop section">
			<h2>{{ $store.state.language === 'RU' ? 'История развития' : 'The history of development' }}</h2>

			<div class="history-development card-shadow">
				<carousel :items-to-show="4.5" :wrap-around="true">
					<slide v-for="item in HISTORY" :key="item.id">
						<p class="carousel__item">{{ item.year }}</p>
					</slide>
					<template #addons="{ currentSlide }">
						<div class="history-description">
							<img
								:alt="
									$store.state.language === 'RU'
										? findHistory(currentSlide + 1).description
										: findHistory(currentSlide + 1).description_en
								"
								:src="findHistory(currentSlide + 1).img" />
							<h3>
								{{
									$store.state.language === 'RU'
										? findHistory(currentSlide + 1).description
										: findHistory(currentSlide + 1).description_en
								}}
							</h3>
						</div>
					</template>
				</carousel>
			</div>
		</section>
		<!-- /.section -->

		<section class="clients-desktop section">
			<h2>{{ $store.state.language === 'RU' ? 'Клиенты' : 'Clients' }}</h2>
			<div class="slider-content card-shadow">
				<carousel :breakpoints="breakpoints">
					<slide v-for="client in CLIENTS" :key="client.id">
						<app-partners-item
							:alt="client.alt"
							:image="client.logo"
							@click="showClient(client.alt)"></app-partners-item>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 3" />
						<pagination v-if="slidesCount > 3" />
					</template>
				</carousel>
			</div>
		</section>
		<!-- /.section -->

		<section
			v-if="PAGE_ID[0].blocks.find((e) => e.name === 'purpose')"
			class="purpose-desktop section">
			<h2>
				{{
					$store.state.language === 'RU'
						? PAGE_ID[0].blocks.find((e) => e.name === 'purpose').contents[0].name
						: PAGE_ID[0].blocks.find((e) => e.name === 'purpose').contents[0].name_en
				}}
			</h2>
			<div class="purpose card-shadow flex-column">
				<h5>
					{{
						$store.state.language === 'RU'
							? PAGE_ID[0].blocks.find((e) => e.name === 'purpose').contents[0].text
							: PAGE_ID[0].blocks.find((e) => e.name === 'purpose').contents[0].text_en
					}}
				</h5>
			</div>
		</section>
		<!-- /.section -->

		<section
			v-if="PAGE_ID[0].blocks.find((e) => e.name === 'mission')"
			class="mission-desktop section">
			<h2>
				{{
					$store.state.language === 'RU'
						? PAGE_ID[0].blocks.find((e) => e.name === 'mission').contents[0].name
						: PAGE_ID[0].blocks.find((e) => e.name === 'mission').contents[0].name_en
				}}
			</h2>
			<div class="mission card-shadow flex-column">
				<h5>
					{{
						$store.state.language === 'RU'
							? PAGE_ID[0].blocks.find((e) => e.name === 'mission').contents[0].text
							: PAGE_ID[0].blocks.find((e) => e.name === 'mission').contents[0].text_en
					}}
				</h5>
			</div>
		</section>
		<!-- /.section -->

		<transition name="modal">
			<app-modal-partners-item
				v-if="customers.showModal"
				:alt="customers.alt"
				:image="customers.logo"
				:machines="customers.machines"
				:text="customers.description"
				:title="customers.name"
				@close="customers.showModal = false"></app-modal-partners-item>
		</transition>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appFooter from '../components/appFooter.vue'
import appHeader from '../components/appHeader.vue'
import appHiddenItem from '../components/appHiddenItem.vue'
import appPartnersItem from '../components/appPartnersItem.vue'
import appModalPartnersItem from '../components/appModalPartnersItem.vue'
import YouTube from 'vue3-youtube'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageAbout',
	components: {
		appHeader,
		appFooter,
		appHiddenItem,
		appPartnersItem,
		appModalPartnersItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
		YouTube,
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
			checkSlide: 0,
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
			CLIENTS: 'clients/CLIENTS',
			HISTORY: 'history/HISTORY',
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
		this.GET_CLIENTS()
		this.GET_HISTORY()
		this.GET_PAGE_ID(2)
	},
	methods: {
		...mapActions({
			GET_CLIENTS: 'clients/GET_CLIENTS',
			GET_HISTORY: 'history/GET_HISTORY',
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		routerPush(path) {
			this.$router.push('/' + path)
			window.scrollTo(0, 0)
		},
		showClient(client) {
			this.customers = this.CLIENTS.find((e) => e.alt === client)
			this.customers.machines = true
			this.customers.showModal = true
		},
		findHistory(current) {
			if (this.HISTORY.length > 0) {
				return this.HISTORY.find((e) => e.id === current)
			} else {
				return { year: '', description: '', img: '' }
			}
		},
	},
}
</script>

<style scoped>
.video-player {
	flex-grow: 1;
	height: 15rem;
}
.reasons {
	margin: 1rem 0;
	flex-wrap: wrap;
	gap: 1rem 1rem;
}

.item-reason {
	text-align: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	width: 30%;
	height: 7rem;
	padding: 1rem 0;
}

.item-reason h5 {
	width: 90%;
}

.item-reason:hover .hidden-item {
	cursor: default;
	opacity: 1;
}

.item-reason:hover > img {
	-webkit-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}

.director-item {
	justify-content: space-between;
	width: 30%;
}

.director-item h5 {
	margin: 0.5rem 0;
}

.director-item p {
	margin: 0;
	padding-top: 0.5rem;
	border-top: 1px solid #2fc1ff;
}

.history-development {
	padding: 2rem 3rem;
}

.history-development p {
	font-size: 18px;
	color: #2fc1ff;
}

.history-description {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15rem;
}

.history-description img {
	max-width: 6rem;
	max-height: 6rem;
}

.history-description h3 {
	font-weight: bold;
	font-size: 75px;
	line-height: normal;
	margin: 0 0.5rem;
	align-self: auto;
}

.purpose,
.mission {
	padding: 1rem 2rem;
}

.directors-mobile,
.history-development-mobile,
.our-choice-mobile {
	display: none;
}

@media (max-width: 980px) {
	.video-player {
		flex-grow: 1;
		height: 10rem;
	}
	.about-content {
		margin: 0 1rem;
		width: 100%;
	}

	.text-about-content {
		padding: 1rem 0;
	}

	.image-content {
		width: 100%;
	}

	.directors-mobile,
	.history-development-mobile,
	.our-choice-mobile {
		display: block;
		margin-bottom: 0.5rem;
	}

	.history-development-mobile p {
		color: #2fc1ff;
	}

	.history-development {
		height: 15rem;
		padding: 0;
	}

	.history-description {
		height: 10rem;
	}

	.history-description img {
		max-width: 3rem;
		max-height: 3rem;
		align-self: center;
	}

	.history-description h3 {
		font-size: 16px;
	}

	.content-btn,
	.our-choice,
	.directors-desktop,
	.history-development-desktop,
	.clients-desktop,
	.purpose-desktop,
	.mission-desktop,
	.image-world {
		display: none;
	}

	.reason-mobile {
		width: 100%;
		margin: 1rem 1rem 1rem 0.1rem;
	}

	.reason-mobile h5 {
		font-size: 1rem;
	}

	.director-item {
		margin: 0 0.5rem;
		width: auto;
	}

	.director-item img {
		width: 100%;
		align-self: center;
	}
}
</style>
