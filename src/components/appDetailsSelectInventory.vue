<template>
    <div class="details-select-inventory flex-row">
        <div class="arrow">
            <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>

        <div class="details-select-inventory-item flex-column card-shadow">
            <h4>ДОЗАТОР MULTIPOND</h4>
            <img src="../assets/details-inventory.png" alt="details-inventory">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-inventory-item flex-column card-shadow">
            <h4>ДОЗАТОР MULTIPOND</h4>
            <img src="../assets/details-inventory.png" alt="details-inventory">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-inventory-item flex-column card-shadow">
            <h4>ДОЗАТОР MULTIPOND</h4>
            <img src="../assets/details-inventory.png" alt="details-inventory">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-inventory-item flex-column card-shadow">
            <h4>ДОЗАТОР MULTIPOND</h4>
            <img src="../assets/details-inventory.png" alt="details-inventory">
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
        name: "appDetailsSelectInventory"
    }
</script>

<style scoped>
    .details-select-inventory {
        margin: 2rem 1rem 1rem 1rem;
        align-items: center;
        flex-wrap: wrap;
    }
    .details-select-inventory-item {
        position: relative;
        width: 15%;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        padding: 1rem 2rem;
    }
    .details-select-inventory-item:hover .hidden-item {
        opacity: 1;
    }
    .details-select-inventory-item:hover img,
    .details-select-inventory-item:hover h4 {
        -webkit-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
    }
    .details-select-inventory-item h4 {
        margin-top: 0;
    }
    .details-select-inventory-item img {
        width: 100%;
    }
    @media (max-width: 980px) {
        .details-select-inventory {
            margin: 0 -0.5rem;
            align-items: center;
            flex-wrap: wrap;
        }
        .details-select-inventory-item {
            position: relative;
            flex-grow: 1;
            width: 25%;
            text-align: center;
            justify-content: center;
            align-items: center;
            margin: 0.5rem;
            padding: 1rem 2rem;
        }
            .details-select-inventory-item img {
                align-self: center;
            }
            .details-select-inventory-item h4 {
                font-weight: 600;
                font-size: 12px;
             }
    }
</style>