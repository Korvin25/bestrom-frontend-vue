<template>
	<div class="desktop-section catalog-item-product flex-row card-shadow">
		<div class="about-content flex-column">
			<h3>{{ product.name }}</h3>
			<p>{{ property }}</p>
			<p class="text-about-content">{{ product.description }}</p>
			<button class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
		</div>
		<section class="section">
			<carousel class="carousel" :items-to-show="1" :wrap-around="true">
				<slide v-for="slide in product.SliderProd" :key="slide.id">
					<img class="content-image" :src="'http://bexram.online:8001' + slide.img" :alt="slide.alt" />
				</slide>
				<template #addons>
					<Pagination />
				</template>
			</carousel>
		</section>
	</div>
	<!-- ./desktop-section -->

	<div class="mobile-section catalog-item-product flex-row card-shadow">
		<div class="about-content flex-column">
			<h3>{{ product.name }}</h3>
			<section class="section">
				<carousel class="carousel" :items-to-show="1" :wrap-around="true">
					<slide v-for="slide in product.SliderProd" :key="slide.id">
						<img class="content-image" :src="'http://bexram.online:8001' + slide.img" :alt="slide.alt" />
					</slide>
					<template #addons>
						<Pagination />
					</template>
				</carousel>
			</section>
			<section class="section">
				<carousel class="carousel" :autoplay="4000" :items-to-show="1" :wrap-around="true">
					<slide v-for="slide in product.ProductPropertyValue" :key="slide.id">
						<div class="flex-column">
							<h4>{{ slide.product_property.name }}</h4>
							<p>{{ slide.name }}</p>
						</div>
					</slide>
					<template #addons>
						<Pagination />
					</template>
				</carousel>
			</section>

			<button class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
		</div>
	</div>
	<!-- ./mobile-section -->
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
	name: 'AppCatalogItem',
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	props: {
		product: {
			type: Object,
			default: new Object(),
		},
	},
	computed: {
		property() {
			return this.product.ProductPropertyValue.find((e) => e.product_property.name === 'Тип машины')
				.name
		},
	},
	methods: {
		scrollToTop() {
			this.$router.push(`/catalog/${this.product.id}`)
			window.scrollTo(0, 0)
		},
	},
}
</script>

<style scoped>
.catalog-item-product {
	align-items: center;
	padding: 1rem 1.5rem;
	min-width: 30rem;
	width: 30%;
	flex-grow: 1;
}
.catalog-item-product .about-content {
	width: 100%;
	flex-grow: 1;
}
.content-image {
	max-width: 15rem;
	width: 100%;
	flex-grow: 1;
}
.desktop-section {
	display: flex;
}
.mobile-section {
	display: none;
}
@media (max-width: 980px) {
	.catalog-item-product {
		flex-direction: column;
		min-width: auto;
		width: auto;
		padding: 1rem;
	}
	.catalog-item-product .about-content {
		text-align: center;
		justify-content: space-between;
		align-items: center;
		margin: 0;
	}
	.content-image {
		max-width: 12rem;
		align-self: center;
	}
	.catalog-item-product .about-content h3 {
		margin-bottom: 3rem;
		align-self: normal;
	}
	.catalog-item-product .about-content h4 {
		font-weight: 500;
		font-size: 16px;
	}
	.catalog-item-product .about-content .btn {
		margin: 2rem 0 1rem 0;
	}
	.desktop-section {
		display: none;
	}
	.mobile-section {
		display: flex;
	}
}
</style>
