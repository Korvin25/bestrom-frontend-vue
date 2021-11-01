<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <app-partners-item
                        v-for="partner in PARTNERS"
                        :key="partner.id"
                        :image="partner.logo"
                        :alt="partner.alt"
                        :title="partner.name"
                        :text="partner.description"
                        :machines="false"
                ></app-partners-item>
            </div>
        </section>

        <section class="mobile-section section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <div class="mobile-partners-item" v-for="partner in PARTNERS" :key="partner.id">
                    <app-partners-item
                            :image="partner.logo"
                            :alt="partner.alt"
                            :title="partner.name"
                            :text="partner.description"
                            :machines="false"
                    ></app-partners-item>
                    <p>{{ partner.name }}</p>
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
                PARTNERS:'partners/PARTNERS'
            })
        },
        methods: {
            ...mapActions({
                GET_PARTNERS:'partners/GET_PARTNERS'
            })
        },
        mounted() {
            this.GET_PARTNERS()
        },
        components: {
            appHeader, appFooter, appPartnersItem
        },
        name: "appPagePartners"
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
    }
</style>