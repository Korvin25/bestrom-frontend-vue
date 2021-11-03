<template>
    <div class="small-other-news flex-column">
        <router-link
                class="image-news card-shadow"
                :to="{ name: 'appPageNewsId', params: { newsId: this.id } }">
            <img :src="pathToImage" alt="news image">
            <div class="hidden-item">
                <div class="hidden-text">
                    <img src="../assets/eye.png" alt="show eye">
                </div>
            </div>
        </router-link>
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
    </div>
    <!-- /.small-title-news -->
</template>

<script>
    export default {
        props: {
            id: String,
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
        name: "appNewsOtherItem"
    }
</script>

<style scoped>
    .small-other-news {
        justify-content: flex-start;
        margin: 2rem 0;
        width: 31%;
    }
    .image-news {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        position: relative;
    }
    .image-news img {
        width: 100%;
        max-width: 15rem;
    }
        .image-news:hover .hidden-item {
            opacity: 1;
        }
        .image-news:hover > img {
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
        transition: opacity 0.5s;
        opacity: 0;
    }
    .hidden-item img {
        width: auto;
        height: auto;
    }
    .hidden-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    @media (max-width: 980px) {
        .small-other-news {
            width: 100%;
        }
            .small-other-news h4 {
                margin: 1rem 0;
            }
            .small-other-news p {
                margin: 0;
            }
    }
</style>