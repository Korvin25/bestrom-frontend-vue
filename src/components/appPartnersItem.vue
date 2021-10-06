<template>
    <div class="partners-item">
        <img :src="pathToImage" alt="logo">
        <a :href="this.link">
        <app-hidden-item
                text="ПОДРОБНЕЕ"
        ></app-hidden-item></a>
    </div>
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";

    export default {
        props: {
            link: String,
            image: String
        },
        computed: {
            pathToImage() {
                if (!this.image) {
                    return
                }
                const fileName = this.image.toLowerCase();
                return require(`../assets/${fileName}`);
            }
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
    @media (max-width: 980px) {
        .partners-item {
            width: 100%;
            height: 7rem;
        }
    }
</style>