<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="all-news section">
            <h2>Последние новости</h2>
            <div class="title-news flex-row">

                <div class="big-title-news flex-column">
                    <router-link
                            class="image-news card-shadow"
                            :to="{ name: 'appPageNewsId', params: { newsId: '321' }, props: true }">
                        <img src="../assets/news-img.png" alt="news image">
                        <div class="hidden-item">
                            <div class="hidden-text">
                                <img src="../assets/eye.png" alt="show eye">
                            </div>
                        </div>
                    </router-link>
                    <h4>Новое поколение упаковочных машин</h4>
                    <p>Новейшие разработки компании Бестром в сфере упаковочного оборудования</p>
                </div>
                <!-- /.big-title-news -->

                <div class="small-title-news flex-column">
                    <router-link
                            class="image-news card-shadow"
                            :to="{ name: 'appPageNewsId', params: { newsId: '123' } }">
                        <img src="../assets/news-image-2.png" alt="news image">
                        <div class="hidden-item">
                            <div class="hidden-text">
                                <img src="../assets/eye.png" alt="show eye">
                            </div>
                        </div>
                    </router-link>
                    <h4>Новое поколение упаковочных машин</h4>
                    <p>Новейшие разработки компании Бестром в сфере упаковочного оборудования</p>
                </div>
                <!-- /.small-title-news -->

                <div class="small-title-news flex-column">
                    <router-link
                            class="image-news card-shadow"
                            :to="{ name: 'appPageNewsId', params: { newsId: '231' } }">
                        <img src="../assets/news-image-2.png" alt="news image">
                        <div class="hidden-item">
                            <div class="hidden-text">
                                <img src="../assets/eye.png" alt="show eye">
                            </div>
                        </div>
                    </router-link>
                    <h4>Новое поколение упаковочных машин</h4>
                    <p>Новейшие разработки компании Бестром в сфере упаковочного оборудования</p>
                </div>
                <!-- /.small-title-news -->
            </div>
            <!-- /.title-news flex-row -->

            <div class="other-news flex-row">
                <app-news-other-item
                        id="1"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="2"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="3"
                        title="БЕСТРОМ-3600П"
                        text="Рукавная оберточная машина"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="4"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="5"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="6"
                        title="БЕСТРОМ-3600П"
                        text="Рукавная оберточная машина"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="7"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="8"
                        title="Новое поколение упаковочных машин"
                        text="Новейшие разработки компании Бестром в сфере упаковочного оборудования"
                        image="news-image-2.png"
                ></app-news-other-item>
                <app-news-other-item
                        id="9"
                        title="БЕСТРОМ-3600П"
                        text="Рукавная оберточная машина"
                        image="news-image-2.png"
                ></app-news-other-item>
            </div>
            <!-- /.other-news flex-row -->
        </section>
        <!-- /.section -->
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appNewsOtherItem from "@/components/appNewsOtherItem";

    export default {
        components: {
            appHeader, appFooter, appNewsOtherItem
        },
        name: "appPageNews"
    }
</script>

<style scoped>
    .all-news h4 {
        margin: 1rem 0 0 0;
    }
    .title-news {
        padding: 0 0 1rem 0;
        justify-content: normal;
        align-items: flex-start;
        border-bottom: 1px solid #2FC1FF;
    }
    .big-title-news {
        width: 100%;
    }
    .small-title-news {
        margin-left: 2rem;
        width: 70%;
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
            height: 100%;
        }
        .image-news:hover .hidden-item {
            opacity: 1;
        }
        .image-news:hover > img {
            -webkit-filter: blur(4px);
            -ms-filter: blur(4px);
            filter: blur(4px);
        }
    .other-news {
        justify-content: space-between;
        flex-wrap: wrap;
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
        .all-news h2 {
            margin: 1rem 0 0 0;
        }
        .title-news {
            display: none;
        }
        .other-news {
            flex-direction: column;
        }
    }
</style>