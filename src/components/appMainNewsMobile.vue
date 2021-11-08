<template>
    <div @click="routerPush" class="news-small-item flex-column card-shadow">
        <img class="news-small-item-image" :src="image" alt="news image">
        <h4>{{ title }}</h4>
        <div class="hidden-item">
            <div class="hidden-text">
                <img src="../assets/eye.png" alt="show eye">
            </div>
        </div>
    </div>
    <!-- /.news-small-item -->
</template>

<script>
    export default {
        props: {
            alt: String,
            title: String,
            image: String
        },
        methods: {
            routerPush() {
                this.$router.push(`/news/${this.alt}`)
                window.scrollTo(0,0);
            },
        },
        name: "appMainNewsSmallItem"
    }
</script>

<style scoped>
    .news-small-item {
        position: relative;
        width: 100%;
        flex-grow: 1;
        height: 19rem;
        margin: 1rem;
        padding: 0.5rem 1rem;
        align-items: center;
        justify-content: space-around;
    }
    .news-small-item:hover .hidden-item {
        opacity: 1;
    }
    .news-small-item-image {
        max-width: 15rem;
        width: 100%;
    }
    .news-small-item:hover h4,
    .news-small-item:hover .news-small-item-image {
        -webkit-filter: blur(4px);
        -ms-filter: blur(4px);
        filter: blur(4px);
    }
    .hidden-item {
        position: absolute;
        justify-content: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1rem;
        cursor: pointer;
        background: rgba(106, 106, 106, 0.8);
        box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        transition: opacity 0.4s;
        opacity: 0;
    }
    .hidden-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>