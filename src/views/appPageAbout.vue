<template>
    <app-header></app-header>
    <main>

    </main>
    <app-footer></app-footer>
</template>

<script>
    import appFooter from "@/components/appFooter";
    import appHeader from "@/components/appHeader";

    export default {
        components: {
            appHeader, appFooter
        },
        name: "appPageAbout"
    }
</script>

<style scoped>

</style>