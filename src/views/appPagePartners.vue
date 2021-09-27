<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <h2>Партнеры</h2>
            <div class="flex-row partners">
                <app-partners-item link="https://yandex.ru" image="logo-vtb.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-yamato.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-festo.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-siemens.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-interroll.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-rexroth.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-vtb.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-yamato.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-festo.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-siemens.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-interroll.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-rexroth.png"></app-partners-item>
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

</style>