<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<div class="desktop-section section">
			<h2 style="margin-bottom: 2rem">
				{{ $store.state.language === 'RU' ? 'Рекомендуемый формат F150' : 'Recommended format F150' }}
			</h2>
			<h2 style="margin: 0">
				{{ $store.state.language === 'RU' ? 'Пакет плоское дно.' : 'Flat bottom package.' }}
			</h2>
			<h2 style="margin: 3rem 0 0 0">
				{{ $store.state.language === 'RU' ? 'ОСНОВНАЯ ИНФОРМАЦИЯ' : 'BASIC INFORMATION' }}
			</h2>
		</div>
		<section class="desktop-section section flex-column">
			<div class="unique-packet flex-row">
				<img
					class="unique-packet-scheme"
					src="../assets/unique-packet-scheme.png"
					alt="unique-packet-scheme" />
				<img
					class="unique-packet-preview"
					src="../assets/unique-packet-preview.png"
					alt="unique-packet-preview" />
			</div>
			<div class="flex-row buttons">
				<button class="cutting-btn btn">
					{{ $store.state.language === 'RU' ? 'Напечатать' : 'Print' }}
				</button>
				<a href="../assets/unique-packet-preview.png" download>
					<button class="cutting-btn btn">
						{{ $store.state.language === 'RU' ? 'Сохранить' : 'Save' }}
					</button>
				</a>
			</div>
		</section>

		<section class="mobile-section section flex-column">
			<div class="mobile-preview flex-row">
				<div class="mobile-information flex-column">
					<h2>{{ $store.state.language === 'RU' ? 'Тип пакета' : 'Package type' }}</h2>
					<h4>
						{{ $store.state.language === 'RU' ? 'Рекомендуемый формат F150' : 'Recommended format F150'
						}}<br />{{ $store.state.language === 'RU' ? 'Пакет плоское дно.' : 'Flat bottom package.' }}
					</h4>
					<h4>{{ $store.state.language === 'RU' ? 'ОСНОВНАЯ ИНФОРМАЦИЯ' : 'BASIC INFORMATION' }}</h4>
				</div>
				<div class="mobile-information flex-column">
					<img
						class="unique-packet-preview"
						src="../assets/unique-packet-preview.png"
						alt="unique-packet-preview" />
				</div>
			</div>
			<h2>
				{{
					$store.state.language === 'RU' ? 'Рекомендуемый раскрой пакета' : 'Recommended package size'
				}}
			</h2>
			<img
				class="unique-packet-scheme"
				src="../assets/unique-packet-scheme.png"
				alt="unique-packet-scheme" />
			<div class="flex-row buttons">
				<button class="cutting-btn btn">
					{{ $store.state.language === 'RU' ? 'Напечатать' : 'Print' }}
				</button>
				<a href="../assets/unique-packet-preview.png" download>
					<button class="cutting-btn btn">
						{{ $store.state.language === 'RU' ? 'Сохранить' : 'Save' }}
					</button>
				</a>
			</div>
		</section>

		<section class="section">
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
		</section>
		<!-- ./mobile-section -->
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appMachinesItem from '../components/appMachinesItem.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

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
		}
	},
}
</script>

<style scoped>
.desktop-section {
	display: block;
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
	width: 35rem;
	height: 45rem;
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
}
</style>
