<template>
    <div @click="showModalPartnersItem = true" class="partners-item">
        <img :src="require(`../assets/${image}`)" alt="logo">
        <app-hidden-item
                text="ПОДРОБНЕЕ"
        ></app-hidden-item>
    </div>

    <app-modal-partners-item v-if="showModalPartnersItem"
                             @close="showModalPartnersItem = false"
                             :image="image"
                             :title="title"
                             :text="text"
                             :machines="machines"
    ></app-modal-partners-item>
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";
    import appModalPartnersItem from "@/components/appModalPartnersItem";

    export default {
        data() {
            return {
                showModalPartnersItem: false
            }
        },
        props: {
            title: String,
            text: String,
            image: String,
            machines: Boolean
        },
        components: {
            appHiddenItem, appModalPartnersItem
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
    @media (max-width: 980px) {
        .partners-item {
            width: auto;
            height: 7rem;
        }
    }
</style>