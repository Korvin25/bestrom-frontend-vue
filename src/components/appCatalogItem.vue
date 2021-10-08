<template>
    <div class="desktop-section catalog-item-product flex-row card-shadow">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <p>{{ subTitle }}</p>
            <p class="text-about-content">{{ text }}</p>
            <button  class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
        </div>
        <img class="content-image" :src="require(`../assets/${image}`)" alt="content image">
    </div>
    <!-- ./desktop-section -->

    <div class="mobile-section catalog-item-product flex-row card-shadow">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <img class="content-image" :src="require(`../assets/${image}`)" alt="content image">

            <carousel class="carousel" :autoplay="2000" :items-to-show="1.5" :wrap-around="true">
                <slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item flex-column">
                        <h4>Размер пакета</h4>
                        <p>длина  – 250-450 мм<br>ширина  – 150-350 мм<br>макс. масса - 10 кг</p>
                    </div>
                </slide>
            </carousel>

            <button  class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
        </div>
    </div>
    <!-- ./mobile-section -->
</template>

<script>
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        props: {
            id: String,
            title: String,
            subTitle: String,
            text: String,
            image: String
        },
        methods: {
            scrollToTop() {
                this.$router.push(`/catalog/${this.id}`)
                window.scrollTo(0,0);
            },
        },
        components: {
            Carousel, Slide
        },
        name: "appCatalogItem"
    }
</script>

<style scoped>
    .catalog-item-product {
        flex-grow: 1;
        width: 40%;
        margin: 1rem 1rem;
        padding: 1rem 1.5rem;
    }
    .content-image {
        align-self: center;
        width: 100%;
    }
    .desktop-section {
        display: flex;
    }
    .mobile-section {
        display: none;
    }

    @media (max-width: 980px) {
        .catalog-item-product .about-content {
            text-align: center;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            width: 100%;
        }
            .catalog-item-product .about-content img {
                align-self: center;
                max-width: 13rem;
                margin-bottom: 3rem;
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
                 margin-top: 5rem;
             }
        .desktop-section {
            display: none;
        }
        .mobile-section {
            display: flex;
        }
    }
</style>