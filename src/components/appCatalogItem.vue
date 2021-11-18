<template>
    <div class="desktop-section catalog-item-product flex-row card-shadow" v-if="searchBoolean">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <p>{{ property }}</p>
            <p class="text-about-content">{{ text }}</p>
            <button  class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
        </div>
        <section class="section">
            <carousel class="carousel" :items-to-show="1" :wrap-around="true">
                <slide v-for="slide in PRODUCT_ID.SliderProd" :key="slide.id">
                    <img class="content-image" :src="'http://bexram.online:8001' + slide.img" :alt="slide.alt">
                </slide>
                <template #addons>
                    <Pagination />
                </template>
            </carousel>
        </section>
    </div>
    <!-- ./desktop-section -->

    <div class="mobile-section catalog-item-product flex-row card-shadow" v-if="searchBoolean">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <section class="section">
                <carousel class="carousel" :items-to-show="1" :wrap-around="true">
                    <slide v-for="slide in PRODUCT_ID.SliderProd" :key="slide.id">
                        <img class="content-image" :src="'http://bexram.online:8001' + slide.img" :alt="slide.alt">
                    </slide>
                    <template #addons>
                        <Pagination />
                    </template>
                </carousel>
            </section>
            <section class="section">
                <carousel class="carousel" :autoplay="4000" :items-to-show="1" :wrap-around="true">
                    <slide v-for="slide in PRODUCT_ID.ProductPropertyValue" :key="slide.id">
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

            <button  class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
        </div>
    </div>
    <!-- ./mobile-section -->
</template>

<script>
    import { Carousel, Slide, Pagination } from 'vue3-carousel';
    import {mapActions, mapGetters} from "vuex";

    export default {
        props: {
            id: Number,
            title: String,
            text: String,
            search: String
        },
        computed: {
            ...mapGetters({
                PRODUCT_ID:'product/PRODUCT_ID',
            }),
            searchBoolean() {
                for (let key in this.PRODUCT_ID) {
                    if (typeof this.PRODUCT_ID[key] === 'object') {
                        for (let item of this.PRODUCT_ID[key]) {
                            if (item.name && this.search && item.name.toLowerCase() === this.search.toLowerCase()) {
                                return true
                            }
                        }
                    }
                }
                return false
            },
            property() {
                return this.PRODUCT_ID.ProductPropertyValue.find( e => e.product_property.name === 'Тип машины').name
            }
        },
        methods: {
            ...mapActions({
                GET_PRODUCT_ID:'product/GET_PRODUCT_ID'
            }),
            scrollToTop() {
                this.$router.push(`/catalog/${this.id}`)
                window.scrollTo(0,0);
            },
        },
        mounted() {
            this.GET_PRODUCT_ID(this.id)
        },
        components: {
            Carousel, Slide, Pagination
        },
        name: "appCatalogItem"
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
            width: 100%;
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
            width: 100%;
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