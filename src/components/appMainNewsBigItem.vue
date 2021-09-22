<template>
    <div class="news-item-big flex-row">
        <div class="about-content flex-column">
            <h4>{{ title }}</h4>
            <p class="text-about-content">{{ text }}</p>
        </div>
        <img :src="pathToImage" alt="news image">
        <div class="hidden-item">
            <div class="hidden-text">
                <img src="../assets/eye.png" alt="show eye">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            text: String,
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
        name: "appMainNewsBigItem"
    }
</script>

<style scoped>
    .news-item-big {
        width: 100%;
        position: relative;
        justify-content: space-around;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .news-item-big img {
        max-width: 398px;
        max-height: 320px;
        margin: 2rem;
    }
    .news-item-big:hover .hidden-item {
        display: block;
    }
</style>