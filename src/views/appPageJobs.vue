<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section flex-column">
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
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appJobItem from "@/components/appJobItem";

    export default {
        components: {
            appHeader, appFooter, appJobItem
        },
        name: "appPageJobs"
    }
</script>

<style scoped>

</style>