<script setup>
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Pagination, Mousewheel } from 'swiper'
import { useStore } from 'vuex'

const store = useStore()
const history = store.getters['history/HISTORY']

console.log(history)

const pagination = {
	dynamicBullets: true,
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + history[index].year + '</span>'
	},
}

const modules = [Pagination, Mousewheel]
</script>

<template>
	<swiper
		:direction="'vertical'"
		:observer="true"
		:observe-parents="true"
		:observe-slide-children="true"
		:pagination="pagination"
		:mousewheel="true"
		:modules="modules"
		class="mySwiper">
		<swiper-slide v-for="item in history" :key="item.id" class="swiper-slide">
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
::v-deep .swiper {
	width: 100%;
	height: 100%;
}

::v-deep .swiper-slide {
	margin: 3rem 0;
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

::v-deep .swiper-slide img {
	display: block;
	width: 5rem;
	height: auto;
	object-fit: cover;
}
::v-deep .swiper-pagination {
	width: auto;
	bottom: auto;
}
::v-deep .swiper-pagination-bullet {
	width: 10rem;
	height: auto;
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
