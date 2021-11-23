<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="desktop-section section">
			<div class="catalog-select-card card-shadow flex-column">
				<div v-if="FILTERS.length > 0" class="radio-type flex-row">
					<div v-for="category in FILTERS" :key="category.id">
						<input
							:id="category.id"
							v-model="radioCatalogSelect"
							class="custom-radio"
							name="radio-choice"
							type="radio"
							:value="category.name"
							:checked="radioCatalogSelect === category.name"
						/>
						<label :for="category.id">{{ category.name }}</label>
					</div>
				</div>
				<div v-if="FILTERS.length > 0 && radioCatalogSelect !== ''" class="type-select flex-row">
					<app-catalog-type-select
						v-for="filters in FILTERS.find((e) => e.name === radioCatalogSelect).Filters"
						:key="filters.id"
						:class="typeSelect === filters.name ? 'type-select-checked' : ''"
						:text="filters.name"
						@click="typeSelectFunc(filters.name, filters.search)"
					></app-catalog-type-select>
				</div>
			</div>
			<!-- /.catalog-select-card -->
		</section>
		<!-- ./desktop-section -->

		<section class="mobile-section section">
			<div class="mobile-filter card-shadow flex-column" @click="showMobileFilter = true">
				<h2>{{ radioCatalogSelect }}</h2>
			</div>
			<transition-group name="mobile-filter-modal">
				<section v-if="showMobileFilter" class="mobile-nav-elements flex-column">
					<img
						class="close-mobile-menu"
						src="../assets/close-mobile-menu.png"
						alt="close-mobile-menu"
						@click="showMobileFilter = false"
					/>
					<p class="mobile-menu-title">Каталог</p>
					<div class="flex-column">
						<div class="catalog-select-shadow">
							<carousel :snap-align="'center'" :wrap-around="true" :items-to-show="1.8">
								<slide v-for="category in FILTERS" :key="category.id">
									<p
										class="mobile-select-filter"
										:class="radioCatalogSelect === category.name ? 'choice' : ''"
										@click="radioCatalogSelect = category.name"
									>
										{{ category.name }}
									</p>
								</slide>
							</carousel>
						</div>
						<div v-if="FILTERS.length > 0 && radioCatalogSelect !== ''" class="type-select flex-row">
							<app-catalog-type-select
								v-for="filters in FILTERS.find((e) => e.name === radioCatalogSelect).Filters"
								:key="filters.id"
								:class="typeSelect === filters.name ? 'type-select-checked' : ''"
								:text="filters.name"
								@click="typeSelectFunc(filters.name, filters.search)"
							></app-catalog-type-select>
						</div>
					</div>
				</section>
			</transition-group>
		</section>

		<!-- ./mobile-section -->

		<section class="catalog-item flex-row">
			<app-catalog-item
				v-for="product in PRODUCT"
				:id="product.id"
				:key="product.id"
				:title="product.name"
				:text="product.description"
				:search="search"
			></app-catalog-item>
		</section>
		<!-- /.catalog-item -->
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appCatalogTypeSelect from '../components/appCatalogTypeSelect.vue'
import appCatalogItem from '../components/appCatalogItem.vue'
import { mapActions, mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue3-carousel'

export default {
	name: 'AppPageCatalog',
	components: {
		appHeader,
		appFooter,
		appCatalogTypeSelect,
		appCatalogItem,
		Carousel,
		Slide,
	},
	data() {
		return {
			showMobileFilter: false,
			radioCatalogSelect: '',
			typeSelect: '',
			search: '',
		}
	},
	computed: {
		...mapGetters({
			PRODUCT: 'product/PRODUCT',
			FILTERS: 'filters/FILTERS',
			PAGE_ID: 'page/PAGE_ID',
		}),
		filterInit() {
			if (this.FILTERS.length > 0) {
				if (this.$route.query.category) {
					return this.FILTERS.find((e) => e.id === Number(this.$route.query.category)).name
				} else {
					return this.FILTERS[0].name
				}
			}
			return 0
		},
	},
	watch: {
		showMobileFilter() {
			if (this.showMobileFilter) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		radioCatalogSelect() {
			this.typeSelect = this.FILTERS.find((e) => e.name === this.radioCatalogSelect).Filters[0].name
			this.search = this.FILTERS.find((e) => e.name === this.radioCatalogSelect).Filters[0].search
		},
	},
	mounted() {
		this.GET_PRODUCT()
		this.GET_FILTERS().then(() => {
			this.radioCatalogSelect = this.filterInit
		})
		this.GET_PAGE_ID(4).then(() => {
			console.log(this.PAGE_ID)
		})
	},
	methods: {
		...mapActions({
			GET_PRODUCT: 'product/GET_PRODUCT',
			GET_FILTERS: 'filters/GET_FILTERS',
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(`/product/${path}`)
		},
		typeSelectFunc(filterName, filterSearch) {
			this.typeSelect = filterName
			this.search = filterSearch
			setTimeout(() => {
				this.showMobileFilter = false
			}, 100)
		},
	},
}
</script>

<style scoped>
.catalog-select-card {
	margin: 1rem 0;
	padding: 1rem;
	justify-content: flex-start;
}
.radio-type {
	align-items: center;
	justify-content: space-between;
	margin: 0 0.5rem;
	width: 100%;
}
.type-select {
	margin: 1.5rem 0 1rem 0;
	width: 80%;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.type-select-checked {
	color: #ffffff;
	background: #2fc1ff;
	border: 1px solid #2fc1ff;
	box-sizing: border-box;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
}
.catalog-item {
	margin: 0;
	gap: 1rem 1rem;
	flex-wrap: wrap;
	justify-content: space-between;
}
.desktop-section {
	display: block;
}
.mobile-section {
	display: none;
}

@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}
	.mobile-filter-modal-enter-active {
		animation: mobile-filter-modal-in 0.4s;
	}
	.mobile-filter-modal-leave-active {
		animation: mobile-filter-modal-in 0.4s reverse;
	}
	@keyframes mobile-filter-modal-in {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
	.mobile-section {
		display: block;
		margin-top: 1rem;
	}
	.mobile-filter {
		margin-bottom: 1rem;
	}
	.mobile-section h2 {
		align-self: center;
		margin: 1rem;
		font-size: 16px;
	}
	.mobile-nav-elements {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 9999;
		justify-content: flex-start;
		background-color: #ffffff;
		overflow: auto;
	}
	.close-mobile-menu {
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		height: 2rem;
		margin: 1rem;
	}
	.mobile-menu-title {
		text-align: center;
		font-weight: 500;
		font-size: 18px;
		line-height: 142%;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
	}
	.catalog-select-shadow {
		background: #ffffff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	}
	.mobile-select-filter {
		margin: 2rem 0;
		font-weight: 500;
		padding: 0 0.5rem;
		font-size: 16px;
		color: #6a6a6a;
	}
	.mobile-select-filter.choice {
		color: #2fc1ff;
	}
	.type-select {
		margin: 1rem 0.5rem;
		width: 90%;
	}
}
</style>
