<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<div class="desktop-section section">
			<h2>
				{{ $store.state.language === 'RU' ? 'Пакет': 'Package' }} - "{{ $store.state.language === 'RU' ? objectType.name :  objectType.name_en }}"
			</h2>
			<h2>
				{{ $store.state.language === 'RU' ? 'Шов': 'Seam' }} - "{{ $store.state.language === 'RU' ?  objectSeam.name :  objectSeam.name_en }}"
			</h2>
			<h2>
				{{ $store.state.language === 'RU' ? 'Ширина пакета (A):': 'Package width (A)' }} - "{{ w_pak }}{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}"
			</h2>
			<h2 v-if="optionCheckType">
				{{ $store.state.language === 'RU' ? 'Глубина пакета (B):': 'Package depth (B):' }} - "{{ d_pak }}{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}"
			</h2>
			<h2>
				{{ $store.state.language === 'RU' ? 'Ширина шва (S):': 'Seam width (S):' }} - "{{ w_sh }}{{ $store.state.language === 'RU' ? 'мм' : 'mm' }}"
			</h2>
		</div>
		<section class="desktop-section section flex-column">
			<div class="unique-packet flex-row">
				<img
					v-if="imgName"
					class="unique-packet-scheme"
					:src="imgName"
					alt="unique-packet-scheme" />
			</div>
		</section>
		<section class="desktop-section section flex-column">
			<div class="flex-row buttons">
				<button class="cutting-btn btn" @click="printPage()">
					{{ $store.state.language === 'RU' ? 'Напечатать' : 'Print' }}
				</button>
				<a :href="imgName" download target="_blank">
					<button class="cutting-btn btn">
						{{ $store.state.language === 'RU' ? 'Сохранить' : 'Save' }}
					</button>
				</a>
			</div>
		</section>

	<!-- <section class="section">
			<h2>
				{{
					$store.state.language === 'RU'
						? 'Машины работающие с данным форматом'
						: 'Machines working with this format'
				}}
			</h2>
			<div class="slider-content card-shadow">
				<carousel :breakpoints="breakpoints">
					<slide v-for="slide in 3" :key="slide">
						<app-machines-item
							:title="$store.state.language === 'RU' ? 'Б-420' : 'B-420'"
							image="content_image.png"></app-machines-item>
					</slide>
					<template #addons="{ slidesCount }">
						<navigation v-if="slidesCount > 2" />
						<pagination v-if="slidesCount > 2" />
					</template>
				</carousel>
			</div>	
		</section> -->
		<!-- ./mobile-section -->
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
	name: 'AppPageResultCutting',
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
			d_pak: '',
			w_pak: '',
			w_sh: ''
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
			const { checkType,  checkSeam, wPak, dPak, wSh } = this.$route.params;
			this.optionCheckType = this.contains([1, 3, 6, 8], checkType);
			this.objectType = this.PACKETS.find((e) => e.essid == checkType);
			this.objectSeam = this.PACKETS_SEAMS.find((e) => e.essid == checkSeam);
			this.d_pak = dPak;
			this.w_pak = wPak;
			this.w_sh = wSh;
			if (this.optionCheckType) {
				this.imgName = `${this.$store.state.server_raskroy}service/raskroy-paketov/cp${checkType}_i.php?w_pak=${this.w_pak}&d_pak=${this.d_pak}&w_sh=${this.w_sh}&sh=${checkSeam}`
			} else {
				this.imgName = `${this.$store.state.server_raskroy}service/raskroy-paketov/cp${checkType}_i.php?w_pak=${this.w_pak}&w_sh=${this.w_sh}&sh=${checkSeam}`
			}
		},
		routerBack() {
			this.$router.push('/cutting')
		},
		contains(arr, elem) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == elem) {
					return false;
				}
			}
			return true;
		},
		printPage() {
			window.print();
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
	text-align: center;
}

#packetSize h2 {
	text-align: center;
}

/* .mobile-section,
.mobile-section-block {
	display: none;
} */
.unique-packet {
	margin-top: 2rem;
	justify-content: space-around;
	align-items: center;
}
/* .unique-packet-scheme {
	width: 100%;
} */
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
}
.mr10 {
	margin-right: 10px;
}
.result {
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
}
 @media (max-width: 980px) {
	 .unique-packet-scheme {
	width: 100%;
}
	/* .desktop-section {
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
	} */
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

/* @media (max-width: 630px) {
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
} */
</style>
