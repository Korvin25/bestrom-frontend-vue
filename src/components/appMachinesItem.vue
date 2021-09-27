<template>
    <div class="machine-item flex-column">
        <h3>{{ title }}</h3>
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
            title: String,
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
        name: "appMachinesItem"
    }
</script>

<style scoped>
    .machine-item {
        width: 24%;
        height: 15rem;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
        .machine-item h3 {
            align-self: auto;
        }
    .machine-item:hover .hidden-item {
        display: block;
    }
    .machine-item img {
        margin-top: 1rem;
        max-width: 20rem;
        max-height: 10rem;
    }
</style>