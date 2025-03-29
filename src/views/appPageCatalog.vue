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
							:value="category.slug"
							:checked="radioCatalogSelect === category.slug" 
							@click="typeRadioFunc()"/>
						<label :for="category.id">{{
							$store.state.language === 'RU' ? category.name : category.name_en
						}}</label>
					</div>
				</div>
				<div class="toggle-block">
					<span class="toggle-filter" v-if="typeSelect">{{ $store.state.language === 'RU' ? 'Выбранный фильтр:' : 'Selected filter:' }} {{ $store.state.language === 'RU' ? typeSelect : typeSelectEn }}</span>
					<span class="toggle-button" @click="toggle">{{ isOpen ? ($store.state.language === 'RU' ? 'Скрыть фильтры &#9650;' : 'Hide filters &#9650;') : ($store.state.language === 'RU' ? 'Показать фильтры &#9660;' : 'Show filters &#9660;') }}</span>
				</div>
				<transition name="fade">
					<div v-if="isOpen">
						<div v-if="FILTERS.length > 0 && radioCatalogSelect !== ''" class="type-select flex-row">
							<app-catalog-type-select
								v-for="filters in FILTERS.find((e) => e.slug === radioCatalogSelect).Filters"
								:key="filters.id"
								:class="typeSelect === filters.name ? 'type-select-checked' : ''"
								:text="$store.state.language === 'RU' ? filters.name : filters.name_en"
								:img="filters.img"
								@click="typeSelectFunc(filters.slug)"></app-catalog-type-select>
						</div>
					</div>
				 </transition>
			</div>
		</section>
		<section class="mobile-section section">
			<div class="mobile-filter card-shadow flex-column" @click="showMobileFilter = true">
				<h2 v-if="FILTERS.length > 0 && radioCatalogSelect">
					{{
						$store.state.language === 'RU'
							? FILTERS.find((e) => e.slug === radioCatalogSelect).name
							: FILTERS.find((e) => e.slug === radioCatalogSelect).name_en
					}}
				</h2>
			</div>
			<transition-group name="mobile-filter-modal">
				<section v-if="showMobileFilter" class="mobile-nav-elements flex-column">
					<img
						class="close-mobile-menu"
						src="../assets/close-mobile-menu.png"
						alt="close-mobile-menu"
						@click="showMobileFilter = false" />
					<p class="mobile-menu-title">Каталог</p>
					<div class="flex-column">
						<div class="catalog-select-shadow">
							<carousel :snap-align="'center'" :wrap-around="true" :items-to-show="1.8">
								<slide v-for="category in FILTERS" :key="category.id">
									<p
										class="mobile-select-filter"
										:class="radioCatalogSelect === category.slug ? 'choice' : ''"
										@click="radioCatalogSelect = category.slug">
										{{ $store.state.language === 'RU' ? category.name : category.name_en }}
									</p>
								</slide>
							</carousel>
						</div>
						<div
							v-if="FILTERS.length > 0 && radioCatalogSelect !== ''"
							class="type-select flex-row">
							<app-catalog-type-select
								v-for="filters in FILTERS.find((e) => e.slug === radioCatalogSelect).Filters"
								:key="filters.id"
								:class="typeSelect === filters.name ? 'type-select-checked' : ''"
								:text="$store.state.language === 'RU' ? filters.name : filters.name_en"
								@click="typeSelectFunc(filters.slug)"></app-catalog-type-select>
						</div>
					</div>
				</section>
			</transition-group>
		</section>
		<section v-if="PRODUCT.length > 0" class="catalog-item flex-row">
			<app-catalog-item
				v-for="product in computedProducts"
				:key="product.id"
				:product="product"></app-catalog-item>
		</section>
		<section v-if="notProducts" class="catalog-item flex-row">
			<div class="catalog-item__form card-shadow">
				<div class="desktop-section catalog-item-product flex-row catalog-item__form-block">
					<h2>
					{{ $store.state.language === 'RU' ? 'Отправьте нам вашу заявку' : 'Send us your application' }}
					</h2>
					<section class="form-call flex-column">
						<label for="company">{{ $store.state.language === 'RU' ? 'Компания' : 'Company' }}</label>
						<input
							id="company"
							v-model="inputCompany"
							type="text"
							class="input"
							:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ' : 'BESTROM'" />
						<label for="fio">{{ $store.state.language === 'RU' ? 'Ф.И.О' : 'Full name' }}</label>
						<input
							id="fio"
							v-model="inputName"
							type="text"
							class="input"
							:placeholder="$store.state.language === 'RU' ? 'Иван Иванович' : 'Ivan Ivanovich'" />
						<label for="telephone">{{ $store.state.language === 'RU' ? 'Телефон' : 'Telephone' }}</label>
						<input
							id="telephone"
							v-model="inputTelephone"
							type="text"
							class="input"
							placeholder="89199966203" />
						<label for="email">E-mail</label>
						<input
							id="email"
							v-model="inputEmail"
							type="text"
							class="input"
							placeholder="partner@thedimension.com" />
						<label for="product">{{ $store.state.language === 'RU' ? 'Продукт' : 'Product' }}</label>
						<input
							id="product"
							v-model="inputProduct"
							type="text"
							class="input"
							:placeholder="$store.state.language === 'RU' ? 'Фисташки' : 'Pistachio'" />
						<label for="weight">{{ $store.state.language === 'RU' ? 'Дозировка' : 'Dosage' }}</label>
						<input
							id="weight"
							v-model="inputDosage"
							type="text"
							class="input"
							:placeholder="$store.state.language === 'RU' ? '100г' : '100g'" />
						<label for="speed">{{
							$store.state.language === 'RU' ? 'Требуемая производительность' : 'Required performance'
						}}</label>
						<input
							id="speed"
							v-model="inputPerformance"
							type="text"
							class="input"
							:placeholder="$store.state.language === 'RU' ? '60 п/м' : '60 p/m'" />
						<p>
							{{
								$store.state.language === 'RU' ? 'Удобный способ связи' : 'Convenient way of communication'
							}}
						</p>
						<div class="call-method flex-row">
							<div
								class="logo"
								:class="inputCommunication === 'WhatsApp' ? 'active' : ''"
								@click="inputCommunication = 'WhatsApp'">
								<img src="../assets/whatsapp.png" alt="whatsapp" />
							</div>
							<div
								class="logo"
								:class="inputCommunication === 'Telegram' ? 'active' : ''"
								@click="inputCommunication = 'Telegram'">
								<img src="../assets/telegram.png" alt="telegram" />
							</div>
							<div
								class="logo"
								:class="inputCommunication === 'Viber' ? 'active' : ''"
								@click="inputCommunication = 'Viber'">
								<img src="../assets/viber.png" alt="viber" />
							</div>
							<div
								class="logo"
								:class="inputCommunication === 'E-Mail' ? 'active' : ''"
								@click="inputCommunication = 'E-Mail'">
								<img src="../assets/email.png" alt="email" />
							</div>
							<div
								class="logo-mobile logo"
								:class="inputCommunication === 'Telephone' ? 'active' : ''"
								@click="inputCommunication = 'Telephone'">
								<img src="../assets/mobile.png" alt="menu-item-img" />
							</div>
						</div>
						<button class="call btn" @click="sendPost">
							{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ ЗАЯВКУ' : 'SEND AN APPLICATION' }}
						</button>
						<h4 v-if="statusSend.length > 0" class="send-status">{{ statusSend }}</h4>
					</section>
				</div>
			</div>
		</section>
		<!-- /.catalog-item -->
	</main>
	<app-footer></app-footer>
</template>

<script>
import axios from 'axios'
import { computed, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'
import { Carousel, Slide } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import appCatalogItem from '../components/appCatalogItem.vue'
import appCatalogTypeSelect from '../components/appCatalogTypeSelect.vue'
import appFooter from '../components/appFooter.vue'
import appHeader from '../components/appHeader.vue'

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
  setup() {
	const store = useStore()
	const route = useRoute()
	
	const radioCatalogSelect = ref(route.params.radioSlug || 'podbor-po-tipu-mashiny')
	const filterSlugSelect = ref(route.params.filterSlug || '')

	// Инициализация с дефолтными значениями
	const { meta } = useMeta({
		title: 'Каталог оборудования | BESTROM',
		description: 'Широкий выбор промышленного оборудования для пищевой промышленности'
	})

	// Функция для обновления метаданных
	const updateMeta = (pageData, filterData = null) => {
		const lang = store.state.language === 'RU' ? 'RU' : 'EN'
		
		// Дефолтные значения
		const defaultTitle = 'Каталог оборудования | BESTROM'
		const defaultDesc = 'Широкий выбор промышленного оборудования для пищевой промышленности'
		
		// Если нет данных страницы, используем дефолтные значения
		if (!pageData) {
			meta.title = defaultTitle
			meta.description = defaultDesc
			return
		}

		// Базовые значения из pageData или дефолтные
		const baseTitle = pageData.seo_title || pageData.title || defaultTitle
		const baseDesc = pageData.seo_description || pageData.description || defaultDesc

		// Если есть фильтр - комбинируем, иначе используем базовые
		if (filterData) {
			const filterTitle = lang === 'RU' 
				? filterData.seo_title || filterData.name 
				: filterData.seo_title_en || filterData.name_en || filterData.name
			const filterDesc = lang === 'RU'
				? filterData.seo_description || filterData.name
				: filterData.seo_description_en || filterData.name_en || filterData.name

			meta.title = `${filterTitle} | ${baseTitle}`
			meta.description = `${filterDesc}. ${baseDesc}`
		} else {
			// Если фильтр не выбран, используем дефолтные значения
			meta.title = defaultTitle
			meta.description = defaultDesc
		}
	}

	// Реактивно следим за изменением маршрута
	watch(() => route.params, (newParams) => {
		const pageData = store.getters['page/PAGE_ID'][0] || {}
		let filterData = null
		
		// Обновляем реактивные переменные
		radioCatalogSelect.value = newParams.radioSlug || 'podbor-po-tipu-mashiny'
		filterSlugSelect.value = newParams.filterSlug || ''
		
		// Только если есть параметры фильтра, ищем соответствующий фильтр
		if (newParams.filterSlug && store.getters['filters/FILTERS'].length > 0) {
			const category = store.getters['filters/FILTERS'].find(c => c.slug === newParams.radioSlug)
			if (category) {
				filterData = category.Filters.find(f => f.slug === newParams.filterSlug)
			}
		}
		
		updateMeta(pageData, filterData)
	}, { immediate: true })

	return {
		updateMeta,
		meta,
		radioCatalogSelect,
		filterSlugSelect 
	}
	},
  data() {
    return {
      showMobileFilter: false,
      isOpen: true,
      notProducts: false,
      typeSelect: '',
      typeSelectEn: '',
      statusSend: '',
      inputCompany: '',
      inputName: '',
      inputTelephone: '',
      inputEmail: '',
      inputProduct: '',
      inputDosage: '',
      inputPerformance: '',
      inputCommunication: '',
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
    computedProducts() {
		let tempProduct = this.PRODUCT.slice();
		
		if (this.filterSlugSelect !== '') {
			tempProduct = tempProduct.filter(product => {

			if (product.category_filters && Array.isArray(product.category_filters)) {
				// Ищем совпадение slug с filterSlugSelect
				const hasMatch = product.category_filters.some(
					filter => filter.slug === this.filterSlugSelect
				);
				
				if (hasMatch) {
					return true;
				}
			}

			return false;
			});
		}
		
		this.notProducts = tempProduct.length === 0;
		return tempProduct;
	},
  },
  watch: {
    '$route'(to) {
		this.isOpen = !(to.params.radioSlug && to.params.filterSlug);
    },
    showMobileFilter() {
      if (this.showMobileFilter) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    },
  },
  mounted() {
	// Загружаем данные последовательно
	Promise.all([
		this.GET_PAGE_ID(4),
		this.GET_FILTERS(),
		this.GET_PRODUCT()
	]).then(() => {
		const { radioSlug, filterSlug } = this.$route.params
		
		if (radioSlug && filterSlug) {
			this.radioCatalogSelect = radioSlug
			this.filterSlugSelect = filterSlug
			this.isOpen = false
			const category = this.FILTERS.find(c => c.slug === radioSlug)
			if (category) {
				const filter = category.Filters.find(f => f.slug === filterSlug)
				if (filter) {
				this.typeSelect = filter.name
				this.typeSelectEn = filter.name_en
				}
			}
		}
		
		// Обязательно обновляем метаданные после всех загрузок
		this.updateMetaAfterLoad()
	})
	},
  methods: {
    ...mapActions({
      GET_PRODUCT: 'product/GET_PRODUCT',
      GET_FILTERS: 'filters/GET_FILTERS',
      GET_PAGE_ID: 'page/GET_PAGE_ID',
      SET_FILTER: 'filters/SET_FILTER',
    }),
	updateMetaAfterLoad() {
		if (!this.PAGE_ID.length || !this.FILTERS.length) return
		
		const pageData = this.PAGE_ID[0]
		let filterData = null
		const { radioSlug, filterSlug } = this.$route.params
		
		if (radioSlug && filterSlug) {
		const category = this.FILTERS.find(c => c.slug === radioSlug)
		if (category) {
			filterData = category.Filters.find(f => f.slug === filterSlug)
		}
		}
		
		this.updateMeta(pageData, filterData)
	},
    toggle() {
      this.isOpen = !this.isOpen;
    },
    routerPush(path) {
      window.scrollTo(0, 0)
      this.$router.push(`/product/${path}`)
    },
    typeSelectFunc(filterSlug) {
	
      setTimeout(() => {
        this.showMobileFilter = false;
      }, 100);

      const radio = this.FILTERS.find(category => category.slug === this.radioCatalogSelect);
      const selectedFilter = radio.Filters.find(filter => filter.slug === filterSlug);
      if (selectedFilter) {
        this.typeSelectEn = selectedFilter.name_en;
        this.typeSelect = selectedFilter.name;
        
		// Обновляем filterSlugSelect через .value, так как это ref
		this.filterSlugSelect = filterSlug;

        // Обновляем метаданные при выборе фильтра
        if (this.PAGE_ID.length > 0) {
          this.updateMeta(this.PAGE_ID[0], selectedFilter)
        }
      }
      this.$router.push(`/catalog/type/${radio.slug}/${filterSlug}`);
    },
    typeRadioFunc() {
      this.$router.push(`/catalog`)
	  this.filterSlugSelect = ''; // Сбрасываем фильтр
      // Обновляем метаданные при сбросе фильтров
      if (this.PAGE_ID.length > 0) {
        this.updateMeta(this.PAGE_ID[0])
      }
    },
    sendPost() {
      if (
        (this.inputTelephone.length > 10 ||
          (this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
        this.inputName.length !== 0 &&
        this.inputProduct.length !== 0 &&
        this.inputCompany.length !== 0 &&
        this.inputDosage.length !== 0 &&
        this.inputPerformance.length !== 0
      ) {
        axios
          .post(this.$store.state.server + 'forms/', {
            type: 'Заявка',
            telephone: this.inputTelephone,
            email: this.inputEmail,
            name: this.inputName,
            other:
              'Компания: ' +
              this.inputCompany +
              ', Продукт: ' +
              this.inputProduct +
              ', Дозировка: ' +
              this.inputDosage +
              ', Производительность: ' +
              this.inputPerformance +
              ', Удобный способ связи: ' +
              this.inputCommunication,
          })
          .then(() => {
            this.inputCompany = ''
            this.inputTelephone = ''
            this.inputName = ''
            this.inputEmail = ''
            this.inputProduct = ''
            this.inputDosage = ''
            this.inputPerformance = ''
            this.inputCommunication = ''
            this.statusSend = 'Заявка успешно отправлена!'
          })
          .catch((error) => {
            this.statusSend = 'Ошибка отправки заявки! Ошибка: ' + error
            console.log(error)
          })
      } else {
        alert('Проверьте правильность ввода всех полей!')
      }
    },
  }
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
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;
	overflow: hidden; 
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

.toggle-button {
	color: #6a6a6a;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
}
.toggle-block {
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
}
.toggle-filter {
	color: #6a6a6a;
	font-size: 16px;
	font-weight: 600;
}
@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}
	.catalog-item {
		flex-wrap: nowrap;
		flex-direction: column;
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
		text-align: center;
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
.send-status {
	margin: 0;
	font-weight: normal;
	margin-bottom: 20px;
}
.tel-buttons {
	flex-wrap: wrap;
}
.tel-buttons a {
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.tel-buttons a h3 {
	margin-top: 1rem;
	align-self: center;
	font-weight: normal;
}
.tel-buttons a .btn {
	margin-top: 1rem;
	width: 100%;
	flex-grow: 1;
}
.form-call {
	margin-top: 1rem;
}
.form-call .input,
.form-call .textarea {
	margin: 0.5rem 0;
}
.call {
	margin: 2rem 0 1rem 0;
	flex-grow: 1;
	width: 100%;
}
.call-method {
	justify-content: flex-start;
	margin: 0 -1rem;
}
.logo {
	transition: all 0.3s;
	cursor: pointer;
	padding: 0;
	margin: 0 1rem;
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background: transparent;
}
.logo.active {
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.logo.mobile {
	display: none;
}
.logo:hover {
	filter: drop-shadow(0 0 12px #2fc1ff);
}
@media (max-width: 980px) {
	h2 {
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
	.tel-buttons {
		display: none;
	}
	.call-method {
		justify-content: flex-start;
		margin: 0 -0.5rem;
	}
	.logo {
		margin: 0 0.5rem;
	}
	.logo-mobile {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0.5rem;
		width: 3rem;
		height: 3rem;
		background: #6a6a6a;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
		border-radius: 100%;
	}
	.logo-mobile:hover {
		transition: all 0.4s;
		cursor: pointer;
		background: rgba(47, 193, 255, 0.9);
	}
}
.catalog-item__form {
	width: 100%;
}
.catalog-item__form-block {
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
}
.catalog-item__form-block h2 {
	margin: 2rem 0;
	align-self: flex-start;
	font-weight: bold;
	font-size: 32px;
	color: #2fc1ff;
	line-height: 2rem;
}
</style>
