<template>
    <div class="modal-background">
        <div @click="$emit('close')" class="close-background"></div>
        <div class="modal-window card-shadow flex-column">
            <div @click="$emit('close')" class="close">
                <img class="close-desktop" src="../assets/close-image.png" alt="close">
                <img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close">
            </div>
            <h2>Примеры порошкообразной продукции</h2>
            <div class="details-select-products flex-row">
                <div v-for="item in productExamples" :key="item.id" class="details-select-products-item card-shadow">
                    <h4>{{ item.name }}</h4>
                    <img :src="'http://bexram.online:8001' + item.img" :alt="item.alt">
                    <app-hidden-item
                            text="ПОДРОБНЕЕ"
                    ></app-hidden-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";

    export default {
        props: {
            productExamples: {}
        },
        components: {
            appHiddenItem
        },
        name: "appModalCatalogProductExamples"
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
    .details-select-products {
        margin-top: 2rem;
        flex-wrap: wrap;
    }
    .details-select-products-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        padding: 0.5rem 1rem;
        text-align: center;
        width: 20%;
        margin: 1rem;
    }
    .details-select-products-item:hover .hidden-item {
        opacity: 1;
    }
    .details-select-products-item img {
        align-self: center;
        max-width: 10rem;
        width: 100%;
    }
    .details-select-products-item:hover img,
    .details-select-products-item:hover h4 {
        -webkit-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
    }
    .details-select-products-item h4 {
        font-weight: normal;
        margin-top: 0;
    }
    @media (max-width: 980px) {
        h2 {
            color: #6A6A6A;
        }
        .details-select-products {
            height: auto;
            margin: 0;
            gap: 1rem 1rem;
        }
        .details-select-products-item {
            margin: 0.5rem 0;
            width: 30%;
        }
        .details-select-products-item h4 {
            font-weight: 600;
            font-size: 12px;
        }
    }
</style>