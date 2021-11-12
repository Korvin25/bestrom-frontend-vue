<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section">
            <div class="catalog-select-card card-shadow flex-column">
                <div v-if="FILTERS.length > 0"  class="radio-type flex-row">
                    <div v-for="category in FILTERS" :key="category.id">
                        <input class="custom-radio"
                               name="radio-choice"
                               :id="category.id"
                               type="radio"
                               v-model="radioCatalogSelect"
                               :value="category.name"
                               :checked="radioCatalogSelect === category.name">
                        <label :for="category.id">{{ category.name }}</label>
                    </div>
                </div>
                <div  v-if="FILTERS.length > 0 && radioCatalogSelect !== ''" class="type-select flex-row">
                    <app-catalog-type-select
                            v-for="filters in FILTERS.find(e => e.name === radioCatalogSelect).Filters"
                            :key="filters.id"
                            :class="typeSelect === filters.name ? 'type-select-checked' : ''"
                            @click="typeSelect = filters.name"
                            :text="filters.name"
                    ></app-catalog-type-select>
                </div>
            </div>
            <!-- /.catalog-select-card -->
        </section>
        <!-- ./desktop-section -->

        <section class="mobile-section section">
            <div @click="showMobileFilter = true" class="mobile-filter card-shadow flex-column">
                <h2>{{ radioCatalogSelect }}</h2>
            </div>
            <section v-if="showMobileFilter" class="mobile-nav-elements flex-column">
                <img @click="showMobileFilter = false" class="close-mobile-menu" src="../assets/close-mobile-menu.png" alt="close-mobile-menu">
                <p class="mobile-menu-title">Каталог</p>
                <div class="flex-column">
                    <div class="catalog-select-shadow">
                        <carousel :snap-align="'center'" :wrap-around="true" :items-to-show="1.8">
                            <slide v-for="category in FILTERS" :key="category.id">
                                <p class="mobile-select-filter"
                                   @click="radioCatalogSelect = category.name"
                                   :class="radioCatalogSelect === category.name ? 'choice' : ''"
                                >{{ category.name }}</p>
                            </slide>
                        </carousel>
                    </div>
                    <div  v-if="FILTERS.length > 0 && radioCatalogSelect !== ''" class="type-select flex-row">
                        <app-catalog-type-select
                                v-for="filters in FILTERS.find(e => e.name === radioCatalogSelect).Filters"
                                :key="filters.id"
                                :class="typeSelect === filters.name ? 'type-select-checked' : ''"
                                @click="typeSelect = filters.name"
                                :text="filters.name"
                        ></app-catalog-type-select>
                    </div>
                </div>
            </section>
        </section>
        <!-- ./mobile-section -->

        <section class="catalog-item flex-row">
            <app-catalog-item
                    v-for="product in PRODUCT"
                    :key="product.id"
                    :id="product.id"
                    :title="product.name"
                    :text="product.description"
            ></app-catalog-item>
        </section>
        <!-- /.catalog-item -->
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appCatalogTypeSelect from "@/components/appCatalogTypeSelect";
    import appCatalogItem from "@/components/appCatalogItem";
    import {mapActions, mapGetters} from "vuex";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        data() {
          return {
              showMobileFilter: false,
              radioCatalogSelect: '',
              typeSelect: ''
          }
        },
        computed: {
            ...mapGetters({
                PRODUCT:'product/PRODUCT',
                FILTERS:'filters/FILTERS'
            }),
            filterInit() {
                if (this.FILTERS.length > 0) {
                    if (this.$route.query.category) {
                        return this.FILTERS.find(e => e.id === Number(this.$route.query.category)).name
                    }
                    else {
                        return this.FILTERS[0].name
                    }
                }
                return 0
            }
        },
        methods: {
            ...mapActions({
                GET_PRODUCT:'product/GET_PRODUCT',
                GET_FILTERS: 'filters/GET_FILTERS'
            }),
            routerPush(path) {
                window.scrollTo(0, 0);
                this.$router.push(`/product/${path}`)
            }
        },
        watch: {
            showMobileFilter() {
                if (this.showMobileFilter) {
                    document.body.classList.add('modal-open') 
                } else {
                    document.body.classList.remove('modal-open') 
                }
            },
            radioCatalogSelect() {
                this.typeSelect = this.FILTERS.find(e => e.name === this.radioCatalogSelect).Filters[0].name
            }
        },
        mounted() {
            this.GET_PRODUCT()
            this.GET_FILTERS().then(() => {
                this.radioCatalogSelect = this.filterInit
            })
        },
        components: {
            appHeader, appFooter, appCatalogTypeSelect, appCatalogItem,
            Carousel, Slide
        },
        name: "appPageCatalog"
    }
</script>

<style scoped>
    .catalog-select-card {
        margin: 1rem 0;
        padding: 1rem;
        justify-content: flex-start;
    }
    .radio-type {
        align-items: center;
        justify-content: space-between;
        margin: 0 0.5rem;
        width: 100%;
    }
    .type-select {
        margin: 1.5rem 0 1rem 0;
        width: 80%;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .type-select-checked {
        color: #FFFFFF;
        background: #2FC1FF;
        border: 1px solid #2FC1FF;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .catalog-item {
        margin: 0;
        gap: 1rem 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .desktop-section {
        display: block;
    }
    .mobile-section {
        display: none;
    }

    @media (max-width: 980px) {
        .desktop-section {
            display: none;
        }
        .mobile-section {
            display: block;
            margin-top: 1rem;
        }
        .mobile-filter {
            margin-bottom: 1rem;
        }
            .mobile-section h2 {
                align-self: center;
                margin: 1rem;
                font-size: 16px;
            }
        .mobile-nav-elements {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 9999;
            justify-content: flex-start;
            background-color: #FFFFFF;
            overflow: auto;
        }
        .close-mobile-menu {
            position: absolute;
            top: 0;
            right: 0;
            width: 2rem;
            height: 2rem;
            margin: 1rem;
        }
        .mobile-menu-title {
            text-align: center;
            font-weight: 500;
            font-size: 18px;
            line-height: 142%;
            text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
        }
        .catalog-select-shadow {
            background: #FFFFFF;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        }
        .mobile-select-filter {
            margin: 2rem 0;
            font-weight: 500;
            padding: 0 0.5rem;
            font-size: 16px;
            color: #6A6A6A;
        }
        .mobile-select-filter.choice {
            color: #2FC1FF;
        }
        .type-select {
            margin: 1rem 0.5rem;
            width: 90%;
        }
    }
</style>