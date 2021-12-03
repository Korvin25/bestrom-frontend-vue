<template>
	<div class="details-select-inventory">
		<div class="slider-content">
			<carousel :breakpoints="breakpoints">
				<slide v-for="item in equipment" :key="item.id">
					<div class="details-select-inventory-item flex-column card-shadow">
						<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
						<img :src="'http://bexram.online:8001' + item.img" :alt="item.alt" />
						<app-hidden-item
							:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item>
					</div>
				</slide>
				<template #addons="{ slidesCount }">
					<navigation v-if="slidesCount > 3" />
					<pagination v-if="slidesCount > 3" />
				</template>
			</carousel>
		</div>
	</div>
	<!-- /.details-select-inventory -->
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

export default {
	name: 'AppDetailsSelectInventory',
	components: {
		appHiddenItem,
		Carousel,
		Slide,
		Navigation,
		Pagination,
	},
	props: {
		equipment: {
			type: Object,
			default: new Object(),
		},
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
					itemsToShow: 1.9,
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
.details-select-inventory {
	margin: 2rem 1rem 1rem 1rem;
}
.details-select-inventory-item {
	position: relative;
	flex-grow: 1;
	height: 15rem;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;
	padding: 1rem 2rem;
}
.details-select-inventory-item:hover .hidden-item {
	opacity: 1;
}
.details-select-inventory-item:hover img,
.details-select-inventory-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.details-select-inventory-item h4 {
	margin-top: 0;
}
.details-select-inventory-item img {
	max-width: 13rem;
	width: 100%;
}
@media (max-width: 980px) {
	.details-select-inventory {
		margin: 2rem 0 0 0;
	}
	.details-select-inventory-item {
		position: relative;
		flex-grow: 1;
		height: 13rem;
		text-align: center;
		margin: 0.5rem;
		padding: 1rem 2rem;
	}
	.details-select-inventory-item img {
		align-self: center;
	}
	.details-select-inventory-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
}
</style>
