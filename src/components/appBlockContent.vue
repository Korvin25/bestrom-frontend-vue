<template>
    <div class="block-content flex-row">
        <div class="about-content flex-column">
            <h3>{{ title }}</h3>
            <p class="text-about-content">{{ text }}</p>
            <button @click="routerPush" class="btn">ПОДРОБНЕЕ</button>
        </div>
        <img class="content-image" :src="pathToImage" alt="content image">
    </div>
</template>

<script>
    export default {
        props: {
            id: String,
            title: String,
            text: String,
            image: String
        },
        methods: {
            routerPush() {
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
        name: "appMainSliderContent"
    }
</script>

<style scoped>
    .block-content {
        align-items: center;
    }
    .content-image {
        width: 355px;
        height: 434px;
    }
    .text-about-content {
        padding: 1rem 0;
        text-align: left;
    }
    @media (max-width: 1248px) {
        .block-content button, .content-image {
            display: none;
        }
        .about-content {
            text-align: left;
            margin: 1rem;
            width: 100%;
        }
    }
</style>