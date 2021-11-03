<template>
    <div class="details-select-solution">
        <div class="slider-content">
            <carousel :breakpoints='breakpoints'>
                <slide v-for="item in 4"  :key="item">
                    <div class="details-select-solution-item flex-column card-shadow">
                        <h4>КОМПЛЕКСНАЯ ЛИНИЯ ДЛЯ УПАКОВКИ КОФЕ В ГОТОВУЮ ТАРУ</h4>
                        <img src="../assets/details-solution.png" alt="details-solution">
                        <app-hidden-item
                                text="ПОДРОБНЕЕ"
                        ></app-hidden-item>
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
    import appHiddenItem from "@/components/appHiddenItem";
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

    export default {
        data() {
            return {
                breakpoints: {
                    0: {
                        itemsToShow: 1.5,
                        snapAlign: 'center',
                        wrapAround: true
                    },
                    1248: {
                        itemsToShow: 1,
                        snapAlign: 'center',
                        mouseDrag: false,
                        touchDrag: false,
                        wrapAround: true
                    },
                },
            }
        },
        components: {
            appHiddenItem, Carousel, Slide, Navigation, Pagination
        },
        name: "appDetailsSelectSolution"
    }
</script>

<style scoped>
    .details-select-solution {
        margin: 2rem 1rem 1rem 1rem;
    }
    .details-select-solution-item {
        position: relative;
        flex-grow: 1;
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
            margin: 2rem 0 0 0;
        }
        .details-select-solution-item {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            text-align: center;
            width: 25%;
            flex-grow: 1;
            margin: 0.5rem;
        }
        .details-select-solution-item h4 {
            font-weight: 600;
            font-size: 12px;
        }
        .details-select-solution-item img {
            align-self: center;
            max-width: 15rem;
            width: 100%;
        }
    }
</style>