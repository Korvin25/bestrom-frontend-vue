<template>
	<div class="desktop-section catalog-item-product flex-row card-shadow">
		<div class="about-content flex-column">
			<h3>{{ $store.state.language === 'RU' ? product.name : product.name_en }}</h3>
			<div v-html="property"></div>
			<p
				class="text-about-content"
				v-html="$store.state.language === 'RU' ? product.description : product.description_en"></p>
			<button class="btn" @click="scrollToTop">
				{{ $store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
			</button>
		</div>
		<section class="section" @click="scrollToTop">
			<carousel
				v-if="product.SliderProd.length > 0"
				class="carousel"
				:items-to-show="1"
				:wrap-around="true">
				<slide v-for="slide in product.SliderProd.slice(0, 4)" :key="slide.id">
					<img loading="lazy" class="content-image" :src="imageComputed(slide.img)" :alt="slide.alt" />
				</slide>
				<template #addons>
					<Pagination />
				</template>
			</carousel>
			<div v-else class="flex-row else-flex">
				<img class="content-image" :src="require('../assets/no-image.jpg')" alt="no-image" />
			</div>
		</section>
	</div>
	<!-- ./desktop-section -->

	<div class="mobile-section catalog-item-product flex-row card-shadow">
		<div class="about-content flex-column">
			<h3>{{ $store.state.language === 'RU' ? product.name : product.name_en }}</h3>
			<section class="section">
				<carousel
					v-if="product.SliderProd.length > 0"
					class="carousel"
					:items-to-show="1"
					:wrap-around="true">
					<slide v-for="slide in product.SliderProd" :key="slide.id">
						<img loading="lazy" class="content-image" :src="imageComputed(slide.img)" :alt="slide.alt" />
					</slide>
					<template #addons>
						<Pagination />
					</template>
				</carousel>
				<div v-else class="flex-row else-flex">
					<img class="content-image" :src="require('../assets/no-image.jpg')" alt="no-image" />
				</div>
			</section>
			<section class="section" @click="scrollToTop">
				<carousel class="carousel" :autoplay="4000" :items-to-show="1" :wrap-around="true">
					<slide v-for="slide in product.ProductPropertyValue.slice(0, 4)" :key="slide.id">
						<div class="flex-column">
							<h4>
								{{
									$store.state.language === 'RU'
										? slide.product_property.name
										: slide.product_property.name_en
								}}
							</h4>
							<p>{{ $store.state.language === 'RU' ? slide.name : slide.name_en }}</p>
						</div>
					</slide>
					<template #addons>
						<Pagination />
					</template>
				</carousel>
			</section>

			<button class="btn" @click="scrollToTop">
				{{ $store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE' }}
			</button>
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
			return this.$store.state.language === 'RU'
				? this.product.ProductPropertyValue.find((e) => e.product_property.name === 'Тип машины').name
				: this.product.ProductPropertyValue.find((e) => e.product_property.name === 'Тип машины')
						.name_en
		},
	},
	methods: {
		scrollToTop() {
			this.$router.push(`/catalog/machine/${this.product.slug}`)
			window.scrollTo(0, 0)
		},
		imageComputed(image) {
			if (image.includes(this.$store.state.server_media.slice(0, -1))) {
				return image
			} else {
				return this.$store.state.server_media.slice(0, -1) + image
			}
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
.else-flex {
	align-items: center;
	justify-content: center;
}
.content-image {
	max-width: 100%;
	max-height: 100%;
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
