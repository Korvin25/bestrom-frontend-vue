<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="desktop-section section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <app-partners-item
                        title="«Красный Октябрь»"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        image="logo-vtb.png"
                        :machines="false"
                ></app-partners-item>
                <app-partners-item
                        title="«Красный Октябрь»"
                        image="logo-yamato.png"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        :machines="false"
                ></app-partners-item>
                <app-partners-item
                        title="«Красный Октябрь»"
                        image="logo-festo.png"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        :machines="false"
                ></app-partners-item>
            </div>
        </section>

        <section class="mobile-section section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <div class="mobile-partners-item">
                    <app-partners-item title="«Красный Октябрь»"
                                       image="logo-rexroth.png"
                                       text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                                       :machines="false"
                    ></app-partners-item>
                    <p>«Красный Октябрь»</p>
                    <app-partners-item title="«Красный Октябрь»"
                                       image="logo-rexroth.png"
                                       text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                                       :machines="false"
                    ></app-partners-item>
                    <p>«Красный Октябрь»</p>
                    <app-partners-item title="«Красный Октябрь»"
                                       image="logo-rexroth.png"
                                       text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                                       :machines="false"
                    ></app-partners-item>
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

    export default {
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