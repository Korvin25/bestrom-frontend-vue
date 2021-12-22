<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2 class="title">{{ title }}</h2>
			<div class="flex-row about-partner">
				<img class="partner-logo" :src="imageLogoComputed" :alt="alt" />
				<p v-html="text"></p>
			</div>

			<section v-if="machines">
				<h2>
					{{
						$store.state.language === 'RU'
							? 'Машины приобретенные данным клиентом'
							: 'Machines purchased by this customer'
					}}
				</h2>
				<div v-if="CLIENTS.length > 0" class="slider-content card-shadow">
					<carousel :breakpoints="breakpoints">
						<slide v-for="slide in CLIENTS.find((e) => e.alt === alt).Product" :key="slide.id">
							<app-machines-item
								:id="slide.id"
								:title="$store.state.language === 'RU' ? slide.name : slide.name_en"
								:image="slide.SliderProd.length > 0 ? slide.SliderProd[0].img : 'no-image'"
								@close="$emit('close')"></app-machines-item>
						</slide>
						<template #addons="{ slidesCount }">
							<navigation v-if="slidesCount > 1" />
							<pagination v-if="slidesCount > 1" />
						</template>
					</carousel>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import appMachinesItem from '../components/appMachinesItem.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'AppModalPartnersItem',
	components: {
		appMachinesItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
		alt: {
			type: String,
			default: '',
		},
		machines: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['close'],
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
				},
			},
		}
	},
	computed: {
		...mapGetters({
			CLIENTS: 'clients/CLIENTS',
		}),
		imageLogoComputed() {
			if (this.image.includes(this.$store.state.server.slice(0, -1))) {
				return this.image
			} else {
				return this.$store.state.server.slice(0, -1) + this.image
			}
		},
	},
	mounted() {
		if (this.CLIENTS.length === 0) {
			this.GET_CLIENTS()
		}
	},
	methods: {
		...mapActions({
			GET_CLIENTS: 'clients/GET_CLIENTS',
		}),
	},
}
</script>

<style scoped>
h2 {
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.title {
	align-self: center;
	text-align: center;
	margin-bottom: 2rem;
}
.about-partner {
	justify-content: space-between;
}
.partner-logo {
	align-self: center;
	max-width: 10rem;
	margin: 0 2rem 0 0;
}
@media (max-width: 980px) {
	.modal-window {
		max-height: 90%;
		height: auto;
	}
	h2 {
		text-shadow: none;
	}
	.about-partner {
		flex-direction: column;
	}
	.partner-logo {
		margin: 0 0 1rem 0;
	}
}
</style>
