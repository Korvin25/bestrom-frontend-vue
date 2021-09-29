<template>
    <div class="catalog-item-product flex-row card-shadow">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <p>{{ subTitle }}</p>
            <p class="text-about-content">{{ text }}</p>
            <button  class="btn" @click="scrollToTop">ПОДРОБНЕЕ</button>
        </div>
        <img class="content-image" :src="pathToImage" alt="content image">
    </div>
</template>

<script>
    export default {
        props: {
            id: String,
            title: String,
            subTitle: String,
            text: String,
            image: String
        },
        methods: {
            scrollToTop() {
                this.$router.push(`/catalog/${this.id}`)
                window.scrollTo(0,0);
            },
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
        name: "appCatalogItem"
    }
</script>

<style scoped>
    .catalog-item-product {
        flex-grow: 1;
        width: 40%;
        margin: 1rem 1rem;
        padding: 1rem 1.5rem;
    }
    .content-image {
        align-self: center;
        width: 100%;
    }
</style>