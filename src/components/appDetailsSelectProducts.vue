<template>
    <div class="details-select-products flex-row">
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
        <div class="details-select-products-item card-shadow">
            <h4>Продукция с мелкой фракцией</h4>
            <img src="../assets/details-product.png" alt="product">
            <app-hidden-item
                    text="ПОДРОБНЕЕ"
            ></app-hidden-item>
        </div>
    </div>
    <!-- /.details-select-products -->
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";

    export default {
        components: {
            appHiddenItem
        },
        name: "appDetailsSelectProducts"
    }
</script>

<style scoped>
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
</style>