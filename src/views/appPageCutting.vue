<template>
	<app-header></app-header>

	<main class="main-content flex-column">
		<!-- Packet type section -->
		<section v-if="PACKETS.length > 0" id="packetType" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Тип пакета' : 'Package type' }}</h2>

			<div class="packet-mobile">
				<carousel :items-to-show="1.4">
					<slide v-for="packet in PACKETS" :key="packet.id">
						<a
							v-smooth-scroll="{ updateHistory: false, offset: -60 }"
							:class="checkType === packet.id ? 'check-item' : ''"
							class="packet-type-item flex-column card-shadow"
							href="#packetOptions"
							@click="checkType = packet.id">
							<div class="hidden-item"></div>
							<img :src="packet.img" :alt="packet.alt" />
							<p>{{ $store.state.language === 'RU' ? packet.name : packet.name_en }}</p>
						</a>
					</slide>
					<template #addons>
						<pagination />
					</template>
				</carousel>
			</div>

			<div class="packet-desktop packet-type flex-row">
				<a
					v-for="packet in PACKETS"
					:key="packet.id"
					v-smooth-scroll="{ updateHistory: false, offset: -50 }"
					:class="checkType === packet.id ? 'check-item' : ''"
					class="packet-type-item flex-column card-shadow"
					href="#packetOptions"
					@click="checkType = packet.id">
					<h3>{{ $store.state.language === 'RU' ? packet.name : packet.name_en }}</h3>
					<img :src="packet.img" :alt="packet.alt" />
					<div class="hidden-item"></div>
				</a>
			</div>
		</section>

		<!-- Packet options section -->
		<section v-if="PACKETS_OPTIONS.length > 0" id="packetOptions" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Дополнительные опции' : 'Additional options' }}</h2>
			<div class="packet-mobile">
				<carousel :items-to-show="1.4">
					<slide v-for="packetOptions in PACKETS_OPTIONS" :key="packetOptions.id">
						<div
							:class="checkOptions === packetOptions.id ? 'check-item' : ''"
							class="packet-options-item flex-column card-shadow"
							@click="checkOptionsFunc(packetOptions.id)">
							<div class="hidden-item"></div>
							<img :src="packetOptions.img" :alt="packetOptions.alt" />
							<p>{{ $store.state.language === 'RU' ? packetOptions.name : packetOptions.name_en }}</p>
						</div>
					</slide>
					<template #addons>
						<pagination />
					</template>
				</carousel>
			</div>

			<div class="packet-desktop packet-options flex-row card-shadow">
				<div
					v-for="packetOptions in PACKETS_OPTIONS"
					:key="packetOptions.id"
					:class="checkOptions === packetOptions.id ? 'check-item' : ''"
					class="packet-options-item flex-column card-shadow"
					@click="checkOptionsFunc(packetOptions.id)">
					<div class="hidden-item"></div>
					<img :src="packetOptions.img" :alt="packetOptions.alt" />
					<p>{{ $store.state.language === 'RU' ? packetOptions.name : packetOptions.name_en }}</p>
				</div>
			</div>
		</section>

		<!-- Packet seam section -->
		<section v-if="PACKETS_SEAMS.length > 0" id="packetSeam" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Тип шва' : 'Seam type' }}</h2>
			<div class="packets-seam flex-row card-shadow">
				<div
					v-for="packetSeams in PACKETS_SEAMS"
					:key="packetSeams.id"
					:class="checkSeam === packetSeams.id ? 'check-item' : ''"
					class="packets-seam-item flex-column card-shadow"
					@click="checkSeamFunc(packetSeams.id)">
					<div class="hidden-item"></div>
					<img :src="packetSeams.img" :alt="packetSeams.alt" />
					<p>{{ $store.state.language === 'RU' ? packetSeams.name : packetSeams.name_en }}</p>
				</div>
			</div>
		</section>

		<!-- Packet size section -->
		<section id="packetSize" class="section">
			<h2>{{ $store.state.language === 'RU' ? 'Размеры пакета' : 'Package dimensions' }}</h2>
			<div class="packet-size flex-row card-shadow">
				<div class="packet-size-parameters flex-column">
					<label>
						<p>{{ $store.state.language === 'RU' ? 'Ширина пакета (A), мм:' : 'Bag width (A), mm:' }}</p>
						<input class="input" type="text" placeholder="100" />
					</label>
					<label>
						<p>
							{{ $store.state.language === 'RU' ? 'Глубина пакета (B), мм:' : 'Package depth (B), mm:' }}
						</p>
						<input class="input" type="text" placeholder="100" />
					</label>
				</div>
				<img src="../assets/packet-size.png" alt="packet-size" />
			</div>
		</section>
		<div class="router-button">
			<button class="cutting-btn btn" @click="routerPush(1)">
				{{ $store.state.language === 'RU' ? 'Подобрать' : 'Pick up' }}
			</button>
		</div>
	</main>

	<transition-group name="modal">
		<app-modal-cutting-alert
			v-if="modalAlert.show"
			:text="modalAlert.text"
			@close="modalAlert.show = false"></app-modal-cutting-alert>
	</transition-group>

	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import AppModalCuttingAlert from '../components/appModalCuttingAlert.vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageCutting',
	components: {
		appHeader,
		appFooter,
		AppModalCuttingAlert,
		Carousel,
		Slide,
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
			keywords:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].keywords
					: 'keywords',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			modalAlert: {
				show: false,
				text: 'Alert',
			},
			checkType: 0,
			checkOptions: 0,
			checkSeam: 0,
		}
	},
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
			PACKETS: 'packets/PACKETS',
			PACKETS_OPTIONS: 'packets/PACKETS_OPTIONS',
			PACKETS_SEAMS: 'packets/PACKETS_SEAMS',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(5)
		if (this.PACKETS.length === 0) {
			this.GET_PACKETS()
		}
		if (this.PACKETS_OPTIONS.length === 0) {
			this.GET_PACKETS_OPTIONS()
		}
		if (this.PACKETS_SEAMS.length === 0) {
			this.GET_PACKETS_SEAMS()
		}
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
			GET_PACKETS: 'packets/GET_PACKETS',
			GET_PACKETS_OPTIONS: 'packets/GET_PACKETS_OPTIONS',
			GET_PACKETS_SEAMS: 'packets/GET_PACKETS_SEAMS',
		}),
		routerPush(id) {
			if (this.checkType !== 0 && this.checkOptions !== 0 && this.checkSeam !== 0) {
				this.$router.push('/cutting/' + id)
				window.scrollTo(0, 0)
			} else if (this.checkType === 0) {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите тип пакета!!!'
						: 'First select the type of package !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetType'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			} else if (this.checkOptions === 0) {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите дополнительные опции!!!'
						: 'Please select additional options first !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetOptions'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			} else if (this.checkSeam === 0) {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите тип шва!!!'
						: 'First select the type of seam !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetSeam'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			}
		},
		checkOptionsFunc(id) {
			if (this.checkType !== 0) {
				this.checkOptions = id
				this.$smoothScroll({
					scrollTo: document.getElementById('packetSeam'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			} else {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите тип пакета!!!'
						: 'First select the type of package !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetType'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			}
		},
		checkSeamFunc(id) {
			if (this.checkType === 0 && this.checkOptions === 0) {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите тип пакета!!!'
						: 'First select the type of package !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetType'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			} else if (this.checkType !== 0 && this.checkOptions === 0) {
				this.modalAlert.text =
					this.$store.state.language === 'RU'
						? 'Сначала выберите дополнительные опции!!!'
						: 'Please select additional options first !!!'
				this.modalAlert.show = true
				this.$smoothScroll({
					scrollTo: document.getElementById('packetOptions'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			} else if (this.checkType !== 0 && this.checkOptions !== 0) {
				this.checkSeam = id
				this.$smoothScroll({
					scrollTo: document.getElementById('packetSize'), // scrollTo is also allowed to be number
					updateHistory: false,
					offset: -50,
				})
			}
		},
	},
}
</script>

<style scoped>
.packet-type {
	flex-wrap: wrap;
	margin: 0 -1rem;
}
.packet-type-item {
	position: relative;
	width: 11rem;
	flex-grow: 1;
	margin: 1rem;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
.packet-type-item:hover .hidden-item {
	opacity: 1;
}
.packet-type-item h3 {
	margin-bottom: 1rem;
	align-self: normal;
}
.packet-options {
	flex-wrap: wrap;
	padding: 1rem;
}
.packet-options-item {
	position: relative;
	margin: 1rem;
	width: 25%;
	flex-grow: 1;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
.packet-options-item:hover .hidden-item {
	opacity: 1;
}
.packet-options-item p,
.packets-seam-item p {
	font-size: 1.2rem;
	margin: 2rem 0 1rem 0;
}
.packet-type-item img,
.packet-options-item img,
.packets-seam-item img {
	width: 6rem;
}
.packets-seam {
	padding: 1rem;
	flex-wrap: wrap;
}
.packets-seam-item {
	position: relative;
	margin: 1rem;
	width: 8rem;
	flex-grow: 1;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
.packets-seam-item:hover .hidden-item {
	opacity: 1;
}
.packet-size {
	padding: 2rem;
	justify-content: space-around;
}
.packet-size img {
	align-self: flex-start;
	width: 15rem;
}
.packet-size-parameters {
	justify-content: flex-start;
	margin-right: 3rem;
	width: 100%;
}
.packet-size-parameters p {
	margin: 0;
}
.packet-size-parameters .input {
	width: 100%;
}
.packet-size-description {
	align-self: flex-start;
	width: 100%;
	margin-right: 2rem;
	padding: 1rem 2rem;
}
.packet-size-description h4 {
	margin: 0;
	padding: 1rem 0;
	border-bottom: 1px solid #2fc1ff;
}
.cutting-btn {
	width: auto;
	height: auto;
	padding: 0.5rem 2rem;
	font-size: 2rem;
}
.router-button {
	margin: 1rem 0;
	align-self: center;
}
.check-item {
	transition: all 0.5s;
	background: #ffffff;
	box-shadow: 0 1px 8px 8px rgba(47, 193, 255, 0.7);
	border-radius: 6px;
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
	background: rgba(106, 106, 106, 0.5);
	box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	transition: opacity 0.5s;
	opacity: 0;
	z-index: 999;
}
.packet-desktop {
	display: flex;
}
.packet-mobile {
	display: none;
}

@media (max-width: 1200px) {
	.packet-size {
		position: relative;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 1rem;
	}
	.packet-size img {
		margin: 1rem 0;
		width: auto;
		align-self: center;
	}
	.packet-size-parameters {
		width: 100%;
	}
	.packet-size-parameters label {
		display: flex;
		flex-direction: column;
	}
	.packet-size-parameters .input {
		width: auto;
		flex-grow: 1;
	}
	.packet-size-description {
		align-self: center;
		margin: 1rem 0;
		flex-grow: 1;
		width: auto;
	}
}

@media (max-width: 980px) {
	.packet-desktop {
		display: none;
	}
	.packet-mobile {
		display: block;
	}
	h2 {
		margin-bottom: 0;
	}
	.flex-row {
		flex-wrap: wrap;
	}
	.packet-type-item {
		align-self: stretch;
		margin: 1rem;
	}
	.packet-options {
		padding: 0;
		box-shadow: none;
	}
	.packet-options-item {
		margin: 1rem;
		align-self: stretch;
	}
	.packets-seam {
		padding: 0;
		box-shadow: none;
	}
	.packets-seam-item {
		margin: 1rem;
		align-items: center;
		width: 40%;
		flex-grow: 1;
	}
	.router-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.cutting-btn {
		font-size: 20px;
		width: 90%;
	}
	.packet-size {
		box-shadow: none;
		padding: 1rem;
	}
	.packet-options-item p,
	.packets-seam-item p {
		font-size: 14px;
	}
	.packet-type-item:hover .hidden-item {
		opacity: 0;
	}
	.packet-options-item:hover .hidden-item {
		opacity: 0;
	}
	.packets-seam-item:hover .hidden-item {
		opacity: 0;
	}
}

@media (max-width: 675px) {
	.packet-size-description {
		align-self: flex-start;
	}
	.packet-size img {
		align-self: flex-start;
	}
	.packet-type-item img,
	.packet-options-item img,
	.packets-seam-item img {
		width: 4rem;
	}
	.packets-seam-item {
		width: 30%;
	}
}
</style>
