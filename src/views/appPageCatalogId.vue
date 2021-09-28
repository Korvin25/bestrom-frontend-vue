<template>
    <app-header></app-header>

    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";

    export default {
        components: {
            appHeader, appFooter
        },
        name: "appPageCatalogId"
    }
</script>

<style scoped>

</style>