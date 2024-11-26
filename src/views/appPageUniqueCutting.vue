<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<div class="desktop-section section">
			<h2 style="margin-bottom: 2rem">
				{{ $store.state.language === 'RU' ? 'Пакет': 'Package' }} - "{{ $store.state.language === 'RU' ? objectType.name :  objectType.name_en }}"
			</h2>
			<h2 style="margin: 0">
				{{ $store.state.language === 'RU' ? 'Шов': 'Seam' }} - "{{ $store.state.language === 'RU' ?  objectSeam.name :  objectSeam.name_en }}"
			</h2>
		</div>
		<section class="desktop-section section flex-column">
			<div class="unique-packet flex-row">
				<img
					v-if="imgName"
					class="unique-packet-scheme"
					:src="require(`../assets/${imgName}`)"
					alt="unique-packet-scheme" />
			</div>
		</section>


		<!-- Packet size section -->
		<section id="packetSize" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Размеры пакета' : 'Package dimensions' }}</h2>
			<div class="packet-size flex-row card-shadow">
				<div class="packet-size-parameters">
					<div class="packet-size-input">
						<label class="card-shadow card-shadow_input">
							{{ $store.state.language === 'RU' ? 'Ширина пакета (A), мм:' : 'Package width (A), mm:' }}<br>
							<input class="input" type="number" name="w_pak" placeholder="100" step="10" v-model="w_pak" />
						</label>
						<label v-if="optionCheckType" class="card-shadow card-shadow_input">
							{{ $store.state.language === 'RU' ? 'Глубина пакета (B), мм:' : 'Package depth (B), mm:' }}<br>
							<input class="input" type="number" name="d_pak" placeholder="50" step="10" v-model="d_pak" />
						</label>
					

						<div class="card-shadow card-shadow_input">{{ $store.state.language === 'RU' ? 'Ширина шва (S):': 'Seam width (S):' }}<br>
							<div class="packet-size-input packet-size-input_mobile">
								<label for="w_sh1">15{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}<br>
									<input id="w_sh1" type="radio" name="w_sh" value="15">
								</label>
								<label for="w_sh2">20{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}<br>
									<input id="w_sh2" type="radio" name="w_sh" value="20" checked>
								</label>
								<label for="w_sh3">25{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}<br>
									<input id="w_sh3" type="radio" name="w_sh" value="25">
								</label>
									<label for="w_sh4">30{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}<br>
									<input id="w_sh4" type="radio" name="w_sh" value="30">
								</label>
							</div>
						</div>
					</div>
					<div class="packet-size-input">
						<div v-if="optionCheckType" class="card-shadow card-shadow_input mr10">
							{{ $store.state.language === 'RU' ? 'Глубина пакета' : 'Package depth' }}  <span><b>B</b></span>  —  {{ $store.state.language === 'RU' ? 'не более 110мм' : 'no more than 110mm' }}<br>      
							{{ $store.state.language === 'RU' ? 'Сумма ширины и глубины' : 'Sum of width and depth' }}  <span><b>A + B</b></span>  —  {{ $store.state.language === 'RU' ? 'от 60мм до 600мм' : 'from 60mm to 600mm' }}<br>
							{{ $store.state.language === 'RU' ? 'Соотношение ширины и глубины' : 'Width to depth ratio' }}   <span><b>A / B</b></span>  —  {{ $store.state.language === 'RU' ? 'от 1.2 до 4.45 ' : 'from 1.2 to 4.45' }}
						</div>
						<div v-else class="card-shadow card-shadow_input mr10 card-shadow_input_width">
							{{ $store.state.language === 'RU' ? 'от 60мм до 600мм' : 'from 60mm to 600mm' }}
						</div>
						<div class="card-shadow card-shadow_input">
							{{ $store.state.language === 'RU' ? 'Рекомендуемая ширина шва' : 'Recommended seam width' }}<br> 
							{{ $store.state.language === 'RU' ? 'для форматов до F100 - 15мм' : 'for formats up to F100 - 15mm' }},<br>
							{{ $store.state.language === 'RU' ? 'с F100 до F220 - 20мм' : 'from F100 to F220 - 20mm' }},<br>
							{{ $store.state.language === 'RU' ? 'с F220 до F280 - 25мм' : 'from F220 to F280 - 25мм' }},<br> 
							{{ $store.state.language === 'RU' ? 'с F280 и больше - 30мм' : 'with F280 and more - 30mm' }}
						</div>
					</div>
					<div v-if="optionCheckType" class="card-shadow card-shadow_input result">
						<span>B = <span :class="d_pak <= 110 ? 'blue' : 'red'">{{ d_pak }}</span></span>
						<span>A + B = {{ $store.state.language === 'RU' ? 'Формат' : 'Format' }} <span :class="(60 <= d_pak + w_pak) && (d_pak + w_pak <= 600) ? 'blue' : 'red'">F{{ d_pak + w_pak }}</span></span>
						<span>A / B = <span :class="(1.2 <= (w_pak / d_pak).toFixed(2)) && ((w_pak / d_pak).toFixed(2) <= 4.45) ? 'blue' : 'red'">{{ (w_pak / d_pak).toFixed(2) }}</span></span>
					</div>
					<div v-else class="card-shadow card-shadow_input result">
						<span>A = {{ $store.state.language === 'RU' ? 'Формат' : 'Format' }} <span :class="(60 <= w_pak) && (w_pak <= 600)? 'blue' : 'red'">F{{ w_pak }}</span></span>
					</div>
				</div>
				
			</div>
						<div class="flex-row buttons">
				<button 
					class="cutting-btn btn"
					@click="routerBack()">
					{{ $store.state.language === 'RU' ? 'Назад' : 'Back' }}
				</button>
				<button class="cutting-btn btn" @click="routerPushResult()">
					{{ $store.state.language === 'RU' ? 'Дальше' : 'Next' }}
				</button>
			</div>
		</section>

	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appMachinesItem from '../components/appMachinesItem.vue'
import { mapActions, mapGetters, useStore } from 'vuex'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageUniqueCutting',
	components: {
		appHeader,
		appFooter,
		appMachinesItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
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
	data() {
		return {
			breakpoints: {
				0: {
					itemsToShow: 1.5,
					snapAlign: 'center',
					wrapAround: true,
				},
				1248: {
					itemsToShow: 1.5,
					snapAlign: 'center',
					mouseDrag: false,
					touchDrag: false,
					wrapAround: true,
				},
			},
			objectType: {},
			objectSeam: {},
			imgName: '',
			optionCheckType: true,
			d_pak: 50,
			w_pak: 100,
		}
	},
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
			PACKETS: 'packets/PACKETS',
			PACKETS_SEAMS: 'packets/PACKETS_SEAMS',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(5)

		Promise.all([this.GET_PACKETS(), this.GET_PACKETS_SEAMS()]).then(() => {
				this.updateCheck();
			});
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
			GET_PACKETS: 'packets/GET_PACKETS',
			GET_PACKETS_SEAMS: 'packets/GET_PACKETS_SEAMS',
		}),
		updateCheck() {
			const { checkType,  checkSeam } = this.$route.params;
			this.optionCheckType = this.contains([1, 3, 6, 8], checkType);
			this.objectType = this.PACKETS.find((e) => e.essid == checkType);
			this.objectSeam = this.PACKETS_SEAMS.find((e) => e.essid == checkSeam);
			this.imgName = `p${checkType}h_${checkSeam}.png`;
		},
		routerBack() {
			this.$router.push('/cutting')
		},
		routerPushResult() {
			const { checkType,  checkSeam } = this.$route.params;
			const radios = document.getElementsByName('w_sh');
			let w_sh;

			// Перебираем радиокнопки и ищем выбранную
			for (const radio of radios) {
				if (radio.checked) {
					w_sh = radio.value;
					break;
				}
			}
			if (this.optionCheckType) {
				this.$router.push(`/cutting/${checkType}/${checkSeam}/${this.w_pak}/${this.d_pak}/${w_sh}`);
			} else {
				this.$router.push(`/cutting/${checkType}/${checkSeam}/${this.w_pak}/d_pak/${w_sh}`);
			}
		},
		contains(arr, elem) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == elem) {
					return false;
				}
			}
			return true;
		}
	}
	
}
</script>

<style scoped>
.blue {
	color: blue;
}
.red {
	color: red;
}
.desktop-section {
	display: block;
}
.desktop-section h2 {
	display: flex;
	justify-content: center;
}

#packetSize h2 {
	text-align: center;
}

.mobile-section,
.mobile-section-block {
	display: none;
}
.unique-packet {
	margin-top: 2rem;
	justify-content: space-around;
	align-items: center;
}
.unique-packet-scheme {
	margin-right: 2rem;
}
.unique-packet-preview {
	width: 15rem;
	height: 20rem;
}
.buttons {
	justify-content: center;
	align-items: center;
}
.cutting-btn {
	width: auto;
	height: auto;
	padding: 0.5rem 2rem;
	font-size: 2rem;
	margin: 2rem 3rem 0 3rem;
}
.machines {
	width: 100%;
	justify-content: space-around;
	flex-wrap: wrap;
}
.packet-size {
	display: flex;
	justify-content: center;
}
.packet-size-input{
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
}

.packet-size-parameters {
	display: flex;
	flex-direction: column;
	padding: 10px;
}

.card-shadow_input{
	padding: 15px;
	margin-right: 10px;
	text-align: center;
}
.packet-size-input label {
	text-align: center;
	margin-right: 5px;
}
.mr10 {
	margin-right: 10px;
}
.result {
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
}
.card-shadow_input_width {
	width: 35%;
}
@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}
	.mobile-section {
		display: flex;
	}
	.mobile-section-block {
		display: block;
	}
	.mobile-section-block h2 {
		font-size: 14px;
	}
	.mobile-preview {
		align-items: center;
	}
	.mobile-preview h4 {
		font-weight: normal;
		font-size: 14px;
		margin: 0 0 1rem 0;
	}
	.mobile-information {
		width: 100%;
	}
	.unique-packet {
		flex-direction: column-reverse;
		align-items: center;
	}
	.unique-packet-preview {
		margin: 1rem 0;
		width: 6rem;
		height: auto;
		align-self: center;
	}
	.unique-packet-scheme {
		align-self: center;
		width: 70%;
		height: auto;
		margin-right: 0;
	}
	.buttons {
		margin: 0 -0.5rem;
	}
	.buttons a {
		display: flex;
		flex-grow: 1;
	}
	.cutting-btn {
		flex-grow: 1;
		width: auto;
		height: auto;
		font-size: 16px;
		margin: 1rem 0.5rem;
	}
}

@media (max-width: 630px) {
	.mobile-information {
		width: auto;
	}
	.unique-packet-preview {
		width: 5rem;
		align-self: end;
	}
	.unique-packet-scheme {
		width: 100%;
	}
	.packet-size-input {
		flex-direction: column;
	}
	.card-shadow_input,
	.packet-size-input,
	.packet-size-input label {
		margin-right: 0;
		margin-bottom: 10px;
	}
	.packet-size-input {
		margin-bottom: 0;
		margin-top: 0;
	}
	.card-shadow_input {
		margin-top: 0;
	}
	.packet-size-input_mobile {
		flex-direction: inherit;
	}
	.card-shadow_input_width {
		width: auto;
	}
}
</style>
