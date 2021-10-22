<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section">
            <h2>Клиенты</h2>
            <div class="flex-row partners">
                <app-partners-item link="https://yandex.ru" image="logo-babaevskiy.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-krasny-oktyabr.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-rot-front.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
            </div>
        </section>

        <section class="mobile-section section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-babaevskiy.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-krasny-oktyabr.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-rot-front.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
                <div class="mobile-partners-item">
                    <app-partners-item class="mobile-partners-item-logo" link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
                    <p>«Красный Октябрь»</p>
                </div>
            </div>
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appPartnersItem from "@/components/appPartnersItem";
    import { mapGetters, mapActions } from "vuex"

    export default {
        computed: {
            ...mapGetters({
                CLIENTS:'clients/CLIENTS'
            })
        },
        methods: {
            ...mapActions({
                GET_CLIENTS:'clients/GET_CLIENTS'
            })
        },
        mounted() {
            this.GET_CLIENTS()
        },
        components: {
            appHeader, appFooter, appPartnersItem
        },
        name: "appPageClients"
    }
</script>

<style scoped>
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
        }
        .mobile-section h2 {
            margin: 1rem 0 0 0;
        }
        .partners {
            flex-direction: column;
        }
        .mobile-partners-item {
            width: 100%;
        }
        .mobile-partners-item p {
            margin: 0 1rem;
            padding: 0 0 0.5rem 0;
            border-bottom: 1px solid #2FC1FF;
        }
        .mobile-partners-item-logo {
            width: auto;
        }
    }
</style>