<template>
    <div class="modal-background">
        <div @click="$emit('close')" class="close-background"></div>
        <div class="modal-window card-shadow flex-column">
            <div @click="$emit('close')" class="close">
                <img class="close-desktop" src="../assets/close-image.png" alt="close">
                <img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close">
            </div>
            <h2 class="title">{{ title }}</h2>
            <div class="flex-row about-partner">
                <img class="partner-logo" :src="require(`../assets/${image}`)" alt="logo">
                <p>{{ text }}</p>
            </div>

            <div v-if="machines">

                <section class="desktop">
                    <h2>Машины приобретенные данным клиентом</h2>
                    <div class="slider-content flex-row card-shadow">
                        <div class="arrow">
                            <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                        </div>
                        <!-- /.arrow -->
                        <div class="flex-row machines">
                            <app-machines-item
                                    title="Б-420"
                                    image="content_image.png"
                            ></app-machines-item>
                            <app-machines-item
                                    title="Б-420"
                                    image="content_image.png"
                            ></app-machines-item>
                            <app-machines-item
                                    title="Б-420"
                                    image="content_image.png"
                            ></app-machines-item>
                        </div>
                        <!-- /.partners -->
                        <div class="arrow">
                            <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                        </div>
                        <!-- /.arrow -->
                        <!-- точки перехода для слайдера -->
                    </div>
                </section>

                <section class="mobile">
                    <h2>Машины приобретенные данным клиентом</h2>
                    <carousel :items-to-show="1.3">
                        <slide v-for="slide in 3" :key="slide">
                            <app-machines-item
                                    class="carousel__item"
                                    title="Б-420"
                                    image="content_image.png"
                            ></app-machines-item>
                        </slide>
                    </carousel>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
    import appMachinesItem from "@/components/appMachinesItem";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        props: {
            title: String,
            text: String,
            image: String,
            machines: Boolean
        },
        components: {
            appMachinesItem, Carousel, Slide
        },
        name: "appModalPartnersItem"
    }
</script>

<style scoped>
    h2 {
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .title {
        align-self: center;
        text-align: center;
        margin-bottom: 2rem;
    }
    .about-partner {
        justify-content: space-between;
    }
    .partner-logo {
        align-self: center;
        max-width: 20rem;
        margin:0 1rem 0 0;
        width: 100%;
    }
    .desktop {
        display: block;
    }
    .mobile {
        display: none;
    }
    @media (max-width: 980px) {
        .modal-window {
            max-height: 90%;
            height: auto;
        }
        h2 {
            text-shadow: none;
        }
        .desktop {
            display: none;
        }
        .mobile {
            display: block;
        }
        .about-partner {
            flex-direction: column;
        }
        .partner-logo {
            align-self: center;
            max-width: 15rem;
            margin-bottom: 1rem;
        }
    }
</style>