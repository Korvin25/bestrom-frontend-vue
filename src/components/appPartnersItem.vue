<template>
    <div class="partners-item">
        <img :src="pathToImage" alt="logo">
        <app-hidden-item
                text="ПОДРОБНЕЕ"
        ></app-hidden-item>
    </div>
</template>

<script>
    import appHiddenItem from "@/components/appHiddenItem";

    export default {
        props: {
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
        width: 11rem;
        height: 6rem;
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
        display: block;
    }
    .partners-item img {
        max-width: 10rem;
        max-height: 5rem;
    }
</style>