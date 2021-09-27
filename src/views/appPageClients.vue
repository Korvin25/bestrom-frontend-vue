<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
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
        name: "appPageClients"
    }
</script>

<style scoped>

</style>