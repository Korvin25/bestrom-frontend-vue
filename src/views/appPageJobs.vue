<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section flex-column">
            <h2>Вакансии</h2>
            <app-job-item
                    id="1"
                    image="job-image.png"
                    title="Грузчик"
                    requirements="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum eius enim eveniet excepturi, facere facilis ipsa libero minus nisi nostrum odit quaerat recusandae rem sint tempore tenetur velit voluptate."
                    skills="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum eius enim eveniet excepturi, facere facilis ipsa libero minus nisi nostrum odit quaerat recusandae rem sint tempore tenetur velit voluptate."
                    pay="45 000 руб."
            ></app-job-item>
            <app-job-item
                    id="2"
                    image="job-image.png"
                    title="Грузчик"
                    requirements="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum eius enim eveniet excepturi, facere facilis ipsa libero minus nisi nostrum odit quaerat recusandae rem sint tempore tenetur velit voluptate."
                    skills="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum eius enim eveniet excepturi, facere facilis ipsa libero minus nisi nostrum odit quaerat recusandae rem sint tempore tenetur velit voluptate."
                    pay="45 000 руб."
            ></app-job-item>
        </section>
        <!-- ./desktop-section -->

        <section class="mobile-section section flex-column">
            <div class="vacation card-shadow">
                <h2>ВАКАНСИИ</h2>
            </div>

            <carousel :items-to-show="1.3">
                <slide v-for="(slide, index) in 3" :key="index">
                    <div class="flex-column job-item card-shadow">
                        <h4>Грузчик</h4>
                        <img src="../assets/job-image.png" alt="job image">
                        <h4>Заработная плата</h4>
                        <p>45 000 руб</p>
                        <router-link :to="{ name: 'appPageJobId', params: { jobId: slide } }">
                            <button class="btn">ОТКЛИКНУТЬСЯ</button>
                        </router-link>
                    </div>
                </slide>
                <template #addons>
                    <pagination />
                </template>
            </carousel>

        </section>
        <!-- ./mobile-section -->
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appJobItem from "@/components/appJobItem";
    import { Carousel, Slide, Pagination } from 'vue3-carousel';

    export default {
        components: {
            appHeader, appFooter, appJobItem, Carousel, Slide, Pagination
        },
        name: "appPageJobs"
    }
</script>

<style scoped>
    .desktop-section {
        display: flex;
    }
    .mobile-section {
        display: none;
    }
    @media (max-width: 980px) {
        .desktop-section {
            display: none;
        }
        .mobile-section {
            margin-top: 1rem;
            display: flex;
        }
        .vacation {
            margin: 0 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
            .vacation h2 {
                margin: 1rem 0;
            }
        .job-item {
            flex-grow: 1;
            align-self: stretch;
            margin: 1rem 0.5rem;
            padding: 2rem 0 1rem 0;
        }
            .job-item img {
                margin: 2rem 0;
                align-self: center;
            }
            .job-item h4 {
                margin: 0;
                font-weight: 600;
                font-size: 16px;
            }
            .job-item p {
                font-weight: 600;
                font-size: 16px;
                margin: 5rem 0;
            }
            .job-item .btn {
                width: 90%;
            }
    }
</style>