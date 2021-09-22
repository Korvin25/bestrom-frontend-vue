<template>
    <div class="flex-row">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <p class="text-about-content">{{ text }}</p>
            <button class="btn">ПОДРОБНЕЕ</button>
        </div>
        <img class="content-image" :src="pathToImage" alt="content image">
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
        name: "appMainSliderContent"
    }
</script>

<style scoped>
    .content-image {
        width: 355px;
        height: 434px;
    }
</style>