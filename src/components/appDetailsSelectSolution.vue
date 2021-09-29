<template>
    <div class="details-select-solution flex-row">
        <div class="arrow">
            <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>

        <div class="details-select-solution-item flex-column card-shadow">
            <h4>КОМПЛЕКСНАЯ ЛИНИЯ ДЛЯ УПАКОВКИ КОФЕ В ГОТОВУЮ ТАРУ</h4>
            <img src="../assets/details-solution.png" alt="details-solution">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>

        <div class="arrow">
            <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
        </div>
    </div>
    <!-- /.details-select-inventory -->
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";

    export default {
        components: {
            appHiddenItem
        },
        name: "appDetailsSelectSolution"
    }
</script>

<style scoped>
    .details-select-solution {
        margin: 2rem 1rem 1rem 1rem;
        align-items: center;
        flex-wrap: wrap;
    }
    .details-select-solution-item {
        position: relative;
        width: 40%;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        padding: 1rem 2rem;
    }
    .details-select-solution-item:hover .hidden-item {
        opacity: 1;
    }
    .details-select-solution-item:hover img,
    .details-select-solution-item:hover h4 {
        -webkit-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
    }
    .details-select-solution-item h4 {
        margin-top: 0;
    }
</style>