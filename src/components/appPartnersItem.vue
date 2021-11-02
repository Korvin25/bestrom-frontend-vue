<template>
    <div class="partners-item">
        <img :src="image" :alt="alt">
        <app-hidden-item
                text="ПОДРОБНЕЕ"
        ></app-hidden-item>
    </div>
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";


    export default {
        props: {
            image: String,
            alt: String,
        },
        components: {
            appHiddenItem
        },
        name: "appPartnersItem"
    }
</script>

<style scoped>
    .partners-item {
        flex-grow: 1;
        width: 25%;
        height: 8rem;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .partners-item:hover .hidden-item {
        opacity: 1;
    }
    .partners-item:hover img {
        -webkit-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
    }
    .partners-item img {
        max-width: 10rem;
        max-height: 5rem;
    }
    @media (max-width: 1248px) {
        .partners-item {
            width: auto;
            height: 7rem;
        }
    }
</style>