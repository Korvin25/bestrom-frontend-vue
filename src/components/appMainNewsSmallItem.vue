<template>
    <div class="news-small-item flex-column">
        <h4>{{ title }}</h4>
        <img :src="pathToImage" alt="news image">
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
        name: "appMainNewsSmallItem"
    }
</script>

<style scoped>
    .news-small-item {
        width: 25%;
        position: relative;
        padding: 1rem 2rem;
        justify-content: space-between;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .news-small-item h4 {
        border-bottom: 1px solid #2FC1FF;
        height: 3rem;
    }
    .news-small-item img {
        max-width: 398px;
        max-height: 320px;
    }
    .news-small-item:hover .hidden-item {
        display: block;
    }
</style>