<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section flex-column">
            <h2 v-if="VACANCY.length !== 0">Вакансии</h2>
            <h2 v-else>Вакансий нет</h2>
            <app-job-item
                    v-for="job in VACANCY"
                    :key="job.id"
                    :alt="job.alt"
                    :image="job.img"
                    :title="job.name"
                    :requirements="job.requirements"
                    :skills="job.skills"
                    :pay="job.salary"
            ></app-job-item>
        </section>
        <!-- ./desktop-section -->

        <section class="mobile-section section flex-column">
            <div class="vacation card-shadow">
                <h2>ВАКАНСИИ</h2>
            </div>

            <carousel :items-to-show="1.3">
                <slide v-for="job in VACANCY" :key="job.id">
                    <div class="flex-column job-item card-shadow">
                        <h4>{{ job.name }}</h4>
                        <img :src="job.img" :alt="job.alt">
                        <h4>Заработная плата</h4>
                        <p>{{ job.salary }}</p>
                        <button @click="routerPush(job.alt)" class="btn">ОТКЛИКНУТЬСЯ</button>
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
    import {mapActions, mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters({
                VACANCY:'vacancy/VACANCY'
            })
        },
        methods: {
            ...mapActions({
                GET_VACANCY: 'vacancy/GET_VACANCY'
            }),
            routerPush(path) {
                window.scrollTo(0, 0);
                this.$router.push(`/jobs/${path}`)
            }
        },
        mounted() {
            this.GET_VACANCY()
        },
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
            align-items: center;
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