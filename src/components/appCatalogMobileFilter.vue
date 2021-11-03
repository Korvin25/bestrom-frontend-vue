<template>
    <section class="mobile-nav-elements flex-column">
        <img @click="$emit('close')" class="close-mobile-menu" src="../assets/close-mobile-menu.png" alt="close-mobile-menu">
        <p class="mobile-menu-title">Каталог</p>

        <div class="catalog-select-card flex-column">
            <div class="flex-column">

                <div class="catalog-select-shadow">
                    <carousel :snap-align="'center'" :items-to-show="1.6">
                        <slide v-for="(item, index) in catalogSelect" :key="index">
                            <p class="mobile-select-filter"
                               @click="this.$store.state.radioCatalogSelect = item"
                               :class="this.$store.state.radioCatalogSelect === item ? 'choice' : ''"
                            >{{ item }}</p>
                        </slide>
                    </carousel>
                </div>


                <div class="type-select flex-row">
                    <app-catalog-type-select
                            :class="typeSelect === 1 ? 'type-select-checked' : ''"
                            @click="typeSelect = 1"
                            text="Упаковочные машины вертикального типа"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 2 ? 'type-select-checked' : ''"
                            @click="typeSelect = 2"
                            text="Линии для фасовки и упаковки продуктов в готовую тару"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 3 ? 'type-select-checked' : ''"
                            @click="typeSelect = 3"
                            text="Упаковочные машины горизонтального типа"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 4 ? 'type-select-checked' : ''"
                            @click="typeSelect = 4"
                            text="Термотоннели"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 5 ? 'type-select-checked' : ''"
                            @click="typeSelect = 5"
                            text="Готовые решения"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 6 ? 'type-select-checked' : ''"
                            @click="typeSelect = 6"
                            text="Дозаторы"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 7 ? 'type-select-checked' : ''"
                            @click="typeSelect = 7"
                            text="Машины для формирования пакетов с плоским верхом"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 8 ? 'type-select-checked' : ''"
                            @click="typeSelect = 8"
                            text="Элеваторы"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 9 ? 'type-select-checked' : ''"
                            @click="typeSelect = 9"
                            text="Конвейры"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 10 ? 'type-select-checked' : ''"
                            @click="typeSelect = 10"
                            text="Транспортеры"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 11 ? 'type-select-checked' : ''"
                            @click="typeSelect = 11"
                            text="Система динамического взвешивания для контроля веса"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 12 ? 'type-select-checked' : ''"
                            @click="typeSelect = 12"
                            text="Дополнительное оборудование"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 13 ? 'type-select-checked' : ''"
                            @click="typeSelect = 13"
                            text="Оборудование для групповой упаковки пакетов в термоусадочную пленку"
                    ></app-catalog-type-select>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import appCatalogTypeSelect from "@/components/appCatalogTypeSelect";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        data() {
            return {
                catalogSelect: [
                    'ПОДБОР ПО ТИПУ МАШИНЫ',  'ПОДБОР ПО ТИПУ ПРОДУКТА',  'ПОДБОР ПО ТИПУ УПАКОВКИ', 'ГОТОВЫЕ РЕШЕНИЯ'
                ],
                typeSelect: 1
            }
        },
        components: {
            appCatalogTypeSelect, Carousel, Slide
        },
        name: "appCatalogMobileFilter"
    }
</script>

<style scoped>
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
        margin: 1rem 0;
        font-weight: 500;
        font-size: 16px;
        color: #6A6A6A;
    }
    .mobile-select-filter.choice {
        color: #2FC1FF;
    }
    .type-select {
        margin: 1rem 0.5rem 2rem 0.5rem;
        width: auto;
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
</style>