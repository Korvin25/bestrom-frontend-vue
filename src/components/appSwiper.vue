<script>
import { Mousewheel, Pagination } from 'swiper'
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { toRefs } from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	props: {
		HISTORY: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		const { HISTORY } = toRefs(props)
		return {
			pagination: {
				clickable: true,
				dynamicBullets: true,
				renderBullet: function (index, className) {
					if (HISTORY.value[index]) {
						return '<span class="' + className + '">' + HISTORY.value[index].year + '</span>'
					}
					return '<span class="' + className + '"></span>'
				},
			},
			modules: [Pagination, Mousewheel],
		}
	},
	computed: {
		...mapGetters({
			HISTORY: 'history/HISTORY',
		}),
	},
	mounted() {
		this.GET_HISTORY()
	},
	methods: {
		...mapActions({
			GET_HISTORY: 'history/GET_HISTORY',
		}),
	},
}
</script>

<template>
	<swiper
		:direction="'vertical'"
		:pagination="pagination"
		:mousewheel="true"
		:initial-slide="HISTORY.length - 1"
		on
		:modules="modules"
		class="mySwiper">
		<swiper-slide v-for="item in HISTORY" :key="item.id" class="swiper-slide">
			<img
				v-if="item.img"
				:alt="$store.state.language === 'RU' ? item.description : item.description_en"
				:src="item.img" />
			<p v-if="$store.state.language === 'RU' ? item.description : item.description_en">
				{{ $store.state.language === 'RU' ? item.description : item.description_en }}
			</p>
		</swiper-slide>
	</swiper>
</template>

<style scoped>
.mySwiper {
	height: 500px;
}
.mySwiper .swiper {
	width: 100%;
	height: 100%;
}

.mySwiper .swiper-slide {
	padding-left: 7rem;
	width: auto;
	font-size: 18px;
	color: #2fc1ff;
	text-align: center;
	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}

.mySwiper .swiper-slide img {
	display: block;
	width: 5rem;
	height: auto;
	object-fit: cover;
}
::v-deep .swiper-pagination {
	width: 5rem !important;
	height: 100% !important;
	right: auto;
	background: transparent;
}
::v-deep .swiper-pagination-bullet {
	width: 5rem !important;
	height: 20% !important;
	text-align: center;
	line-height: 20px;
	font-size: 26px;
	color: #2fc1ff;
	opacity: 1;
	background: none;
}

::v-deep .swiper-pagination-bullet-active {
	color: #2fc1ff;
	background: none;
}
</style>
