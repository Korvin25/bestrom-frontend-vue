<template>
    <app-header></app-header>
    <main class="main-content flex-column">

        <section class="section">
            <h2>О компании</h2>
            <div class="content flex-row card-shadow">
                <div @click="this.$router.push('/about/history')" class="about-content flex-column">
                    <h3>История Бестром</h3>
                    <p class="text-about-content">В 1989 году Королевская Нидерландская Компания "Бегеманн" и производственное объединение "Стромоборудование" учредили совместное предприятие, которое было названо "Бестром" - по начальным буквам названия компаний.</p>
                    <button class="content-btn btn" @click="this.$router.push('/about/history')">ПОДРОБНЕЕ</button>
                </div>
                <div class="image-content">
                    <a href="http://youtube.com" class="video flex-column card-shadow">
                        <div class="video-title flex-row">
                            <img class="logo" src="../assets/bestrom_logo.png" alt="bestrom logo">
                            <h1>БЕСТРОМ</h1>
                        </div>
                        <div class="video-play flex-column">
                            <img src="../assets/video-play.png" alt="video play button">
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <!-- /.section -->

        <section class="history-development-mobile section">
            <h2>История развития</h2>
            <div class="card-shadow">
                <carousel :autoplay="3000" :items-to-show="1.5" :wrap-around="true">
                    <slide v-for="year in years" :key="year">
                        <div class="carousel__item history-development flex-row">
                            <div class="history-years flex-column">
                                <p>{{ year }}</p>
                            </div>
                            <div class="history-description">
                                <img src="../assets/bestrom_logo_big.png" alt="bestrom_logo_big">
                                <h3>БЕСТРОМ</h3>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>
        <!-- /.section -->

        <section class="section">
            <h2>Почему выбирают нас</h2>

            <div class="content flex-row card-shadow">
                <div class="about-content flex-column">
                    <h3>Высококачественные комплектующие мировых брендов</h3>
                    <p style="padding: 1rem 0" class="text-about-content">Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем.</p>
                    <button class="content-btn btn">ПОДРОБНЕЕ</button>
                </div>
                <div class="image-content">
                    <img class="image-world" src="../assets/logo-world.png" alt="logo world">
                </div>
            </div>

            <div class="our-choice flex-column">
                <div class="reasons flex-row">
                    <div class="item-reason card-shadow">
                        <img src="../assets/psychology.png" alt="psychology">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/engineering.png" alt="engineering">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/departure_board.png" alt="departure_board">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                </div>

                <div class="reasons flex-row">
                    <div class="item-reason card-shadow">
                        <img src="../assets/all_inclusive.png" alt="all_inclusive">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/hourglass_top.png" alt="hourglass_top">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/headset_mic.png" alt="headset_mic">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                </div>

                <div class="reasons flex-row">
                    <div class="item-reason card-shadow">
                        <img src="../assets/signal_cellular_alt.png" alt="signal_cellular_alt">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/gps_fixed.png" alt="gps_fixed">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                    <div class="item-reason card-shadow">
                        <img src="../assets/touch_app.png" alt="touch_app">
                        <app-hidden-item text="ВЫСОКАЯ ТЕХНОЛОГИЧНОСТЬ"></app-hidden-item>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.section -->

        <section class="directors-desktop section">
            <h2>Руководство БЕСТРОМ</h2>
            <div class="directors flex-row">
                <div class="director-item flex-column">
                    <img src="../assets/photo-bogdanov.jpg" alt="bogdanov">
                    <h5>Богданов Олег Анатольевич</h5>
                    <p>Генеральный директор</p>
                </div>
                <div class="director-item flex-column">
                    <img src="../assets/photo-krivopalov.jpg" alt="krivopalov">
                    <h5>Кривопалов Александр Васильевич</h5>
                    <p>Главный инженер</p>
                </div>
                <div class="director-item flex-column">
                    <img src="../assets/photo-puzikov.jpg" alt="puzikov">
                    <h5>Пузиков Александр Михайлович</h5>
                    <p>Коммерческий директор</p>
                </div>
            </div>
        </section>
        <!-- /.section -->

        <section class="section">
            <h2>Мы производим и реализуем</h2>

            <carousel :autoplay="3000" :items-to-show="1.3" :wrap-around="true" class="our-choice-mobile">
                <slide v-for="slide in reasons" :key="slide">
                    <div class="carousel__item reason-mobile item-reason card-shadow">
                        <h5>{{slide}}</h5>
                    </div>
                </slide>
            </carousel>

            <div class="our-choice flex-column">
                <div class="reasons flex-row">
                    <div class="item-reason card-shadow">
                        <h5>УПАКОВОЧНЫЕ МАШИНЫ ВЕРТИКАЛЬНОГО ТИПА</h5>
                    </div>
                    <div class="item-reason card-shadow">
                        <h5>УПАКОВОЧНЫЕ МАШИНЫ ГОРИЗОНТАЛЬНОГО ТИПА</h5>
                    </div>
                    <div class="item-reason card-shadow">
                        <h5>КОМПЛЕКСЫ ГРУППОВОЙ УПАКОВКИ</h5>
                    </div>
                </div>

                <div class="reasons flex-row">
                    <div class="item-reason card-shadow">
                        <h5>Машины для формирования пакетов с плоским верхом и плоским дном</h5>
                    </div>
                    <div class="item-reason card-shadow">
                        <h5>ДОЗАТОРЫ</h5>
                    </div>
                    <div class="item-reason card-shadow">
                        <h5>ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ</h5>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.section -->

        <section class="directors-mobile section">
            <h2>Руководство БЕСТРОМ</h2>

            <carousel :autoplay="4000" :items-to-show="1.3" :wrap-around="true" class="our-choice-mobile">
                <slide v-for="slide in directors" :key="slide">
                    <div class="carousel__item director-item flex-column">
                        <img :src="require(`../assets/${slide.img}`)" :alt="slide.name">
                        <h5>{{ slide.name }}</h5>
                        <p>{{ slide.place }}</p>
                    </div>
                </slide>
            </carousel>
        </section>

        <section class="history-development-desktop section">
            <h2>История развития</h2>

            <div class="history-development flex-row card-shadow">
                <div class="history-years flex-column">
                    <p style="font-size: 14px;">1989</p>
                    <p style="font-size: 16px;">1993</p>
                    <p style="font-size: 18px;">1997</p>
                    <p style="font-weight: bold">2000</p>
                    <p style="font-size: 18px;">2004</p>
                    <p style="font-size: 16px;">2007</p>
                    <p style="font-size: 14px;">2009</p>
                </div>
                <div class="history-description">
                    <img src="../assets/bestrom_logo_big.png" alt="bestrom_logo_big">
                    <h3>БЕСТРОМ</h3>
                </div>
            </div>
        </section>
        <!-- /.section -->

        <section class="clients-desktop section">
            <h2>Клиенты</h2>

            <div class="slider-content flex-row card-shadow">
                <div class="arrow">
                    <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                </div>
                <div class="partners flex-row">
                    <app-partners-item image="logo-babaevskiy.png"></app-partners-item>
                    <app-partners-item image="logo-krasny-oktyabr.png"></app-partners-item>
                    <app-partners-item image="logo-rot-front.png"></app-partners-item>
                    <app-partners-item image="logo-jacobs.png"></app-partners-item>
                    <app-partners-item image="logo-faberlic.png"></app-partners-item>
                    <app-partners-item image="logo-baisad.png"></app-partners-item>
                    <app-partners-item image="logo-jacobs.png"></app-partners-item>
                    <app-partners-item image="logo-faberlic.png"></app-partners-item>
                    <app-partners-item image="logo-baisad.png"></app-partners-item>
                </div>
                <div class="arrow">
                    <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                </div>
                <!-- точки перехода для слайдера -->
            </div>
        </section>
        <!-- /.section -->

        <section class="purpose-desktop section">
            <h2>Цель компании</h2>
            <div class="purpose card-shadow flex-column">
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consequuntur culpa eaque enim modi omnis optio quam, quisquam repellendus repudiandae sed tenetur vel. Eligendi ipsum maxime officia ullam ut.</h5>
            </div>
        </section>
        <!-- /.section -->

        <section class="mission-desktop section">
            <h2>Миссия компании</h2>
            <div class="mission card-shadow flex-column">
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consequuntur culpa eaque enim modi omnis optio quam, quisquam repellendus repudiandae sed tenetur vel. Eligendi ipsum maxime officia ullam ut.</h5>
            </div>
        </section>
        <!-- /.section -->
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appFooter from "@/components/appFooter";
    import appHeader from "@/components/appHeader";
    import appHiddenItem from "@/components/appHiddenItem";
    import appPartnersItem from "@/components/appPartnersItem";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        data() {
            return {
                years: [
                    '1989', '1993','1997','2000','2004','2007', '2009'
                ],
                reasons: [
                    'УПАКОВОЧНЫЕ МАШИНЫ ВЕРТИКАЛЬНОГО ТИПА',
                    'УПАКОВОЧНЫЕ МАШИНЫ ГОРИЗОНТАЛЬНОГО ТИПА',
                    'КОМПЛЕКСЫ ГРУППОВОЙ УПАКОВКИ',
                    'Машины для формирования пакетов с плоским верхом и плоским дном',
                    'ДОЗАТОРЫ',
                    'ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ',
                ],
                directors: [
                    {
                       name: 'Богданов Олег Анатольевич',
                       place: 'Генеральный директор',
                       img: `photo-bogdanov.jpg`
                    },
                    {
                        name: 'Кривопалов Александр Васильевич',
                        place: 'Главный инженер',
                        img: `photo-krivopalov.jpg`
                    },
                    {
                        name: 'Пузиков Александр Михайлович',
                        place: 'Коммерческий директор',
                        img: `photo-puzikov.jpg`
                    }
                ]
            }
        },
        components: {
            appHeader, appFooter, appHiddenItem, appPartnersItem, Carousel, Slide
        },
        name: "appPageAbout"
    }
</script>

<style scoped>
    .reasons {
        margin: 1rem 0;
    }
    .item-reason {
        text-align: center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 7rem;
        padding: 1rem 0;
    }
        .item-reason h5 {
            width: 90%;
        }
        .item-reason:hover .hidden-item {
            opacity: 1;
        }
        .item-reason:hover > img {
            -webkit-filter: blur(4px);
            -ms-filter: blur(4px);
            filter: blur(4px);
        }
    .director-item {
        justify-content: space-between;
        width: 30%;
    }
        .director-item h5 {
            margin: 0.5rem 0;
        }
        .director-item p {
            margin: 0;
            padding-top: 0.5rem;
            border-top: 1px solid #2FC1FF;
        }
    .history-development {
        padding: 2rem 3rem;
    }
        .history-development p {
            font-size: 18px;
            color: #2FC1FF;
        }
    .history-years {
        align-items: center;
    }
    .history-description {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
        .history-description img {
            width: 6rem;
            height: 6rem;
        }
        .history-description h3 {
            font-weight: bold;
            font-size: 93px;
            margin: 0 0.5rem;
            align-self: auto;
        }
    .purpose {
        padding: 1rem 2rem;
        height: 20rem;
    }
    .mission {
        padding: 1rem 2rem;
        height: 20rem;
    }
    .directors-mobile,
    .history-development-mobile,
    .our-choice-mobile {
        display: none;
    }
    @media (max-width: 980px) {
        .about-content {
            margin: 0 1rem;
            width: 100%;
        }
        .text-about-content {
            padding: 1rem 0;
        }
        .image-content {
            width: 100%;
        }
        .directors-mobile,
        .history-development-mobile,
        .our-choice-mobile {
            display: block;
            margin-bottom: 0.5rem;
        }
        .history-development {
            flex-direction: column;
            justify-content: space-around;
            height: 15rem;
            padding: 0;
        }
        .history-years {
            flex-direction: row;
            width: 90%;
        }
            .history-years p {
                margin: 0 0.2rem;
            }
            .history-description img {
                width: 3rem;
                height: 3rem;
            }
            .history-description h3 {
                font-size: 16px;
            }
        .content-btn, .our-choice,
        .directors-desktop,
        .history-development-desktop,
        .clients-desktop, .purpose-desktop,
        .mission-desktop, .image-world {
            display: none;
        }
        .reason-mobile {
            width: 100%;
            margin: 1rem 1rem 1rem 0.1rem;
        }
        .director-item {
            margin: 0 1rem;
            width: 95%;
        }
        .director-item img {
            width: 100%;
            align-self: center;
        }
    }
</style>