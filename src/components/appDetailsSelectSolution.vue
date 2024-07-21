<template>
	<div class="details-select-solution">

		<section class="section">

			<div class="content flex-row card-shadow resheni-desktop">
				<div class="about-content flex-column">
					<h3>
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks[0].contents[0].name
								: PAGE_ID[0].blocks[0].contents[0].name_en
						}}
					</h3>
					<p class="text-about-content" style="padding: 1rem 0">
						{{
							$store.state.language === 'RU'
								? PAGE_ID[0].blocks[0].contents[0].text
								: PAGE_ID[0].blocks[0].contents[0].text_en
						}}
					</p>
				</div>
				<div class="image-content">
					<img
						:alt="PAGE_ID[0].blocks[0].contents[0].file[0].alt"
						class="image-world"
						:src="
							$store.state.server_media.slice(0, -1) +
							PAGE_ID[0].blocks[0].contents[0].file[0].file
						" />
				</div>
			</div>
			
		</section>
		
		<div class="slider-content">
			<carousel :breakpoints="breakpoints">
				<slide v-for="item in complexSolution" :key="item.id">
					<div class="details-select-solution-item flex-column card-shadow">
						<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
						<img :src="$store.state.server_media.slice(0, -1) + item.img" :alt="item.alt" />
						<app-hidden-item
							:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
					</div>
				</slide>
				<template #addons="{ slidesCount }">
					<navigation v-if="slidesCount > 1" />
					<pagination v-if="slidesCount > 1" />
				</template>
			</carousel>
		</div>
	</div>
	<!-- /.details-select-inventory -->
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'AppDetailsSelectSolution',
	components: {
		appHiddenItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	props: {
		complexSolution: {
			type: Object,
			default: new Object(),
		},
	},
	data() {
		return {
			breakpoints: {
				0: {
					itemsToShow: 1.2,
					snapAlign: 'start',
					wrapAround: true,
				},
				1248: {
					itemsToShow: 1,
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
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(11)
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
	},
}
</script>

<style scoped>
.resheni-desktop-text {
	padding: 1em;
} 
.resheni-desktop {
	margin: 1em;
}
.details-select-solution {
	margin: 2rem 0 1rem 0;
	overflow: hidden;
}
.details-select-solution-item {
	position: relative;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	padding: 1rem 2rem;
}
.details-select-solution-item:hover .hidden-item {
	opacity: 1;
}
.details-select-solution-item:hover img,
.details-select-solution-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-solution-item h4 {
	margin-top: 0;
}
@media (max-width: 980px) {
	.details-select-solution {
		margin: 2rem 0.5rem 0 0.5rem;
	}
	.details-select-solution-item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem 1rem;
		text-align: center;
		height: 16rem;
		margin: 0.5rem;
		width: 100%;
	}
	.details-select-solution-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
	.details-select-solution-item img {
		align-self: center;
		max-width: 10rem;
		width: 100%;
	}
}
</style>
