<template>
    <app-header></app-header>

    <main class="main-content flex-column">
        <!-- Packet type section -->
        <section class="section">
            <h2>Тип пакета</h2>

            <div class="packet-mobile">
                <carousel :items-to-show="1.4">
                    <slide v-for="packet in packetType" :key="packet">
                        <div @click="checkType = packet.id"
                             :class="checkType === packet.id ? 'check-item' : ''"
                             class="carousel__item packet-type-item flex-column card-shadow">
                            <div class="hidden-item"></div>
                            <img :src="require(`../assets/${packet.img}`)" :alt="packet.name">
                            <p>{{ packet.name }}</p>
                        </div>
                    </slide>
                </carousel>
            </div>

            <div class="packet-desktop packet-type flex-row">
                <div @click="checkType = 1"
                     :class="checkType === 1 ? 'check-item' : ''"
                     class="packet-type-item flex-column card-shadow">
                    <h3>Подушка</h3>
                    <img src="../assets/packet-type-1.png" alt="packet-type">
                    <div class="hidden-item"></div>
                </div>
                <div @click="checkType = 2"
                     :class="checkType === 2 ? 'check-item' : ''"
                     class="packet-type-item  flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <h3>Сплоским дном</h3>
                    <img src="../assets/packet-type-2.png" alt="packet-type">
                </div>
                <div @click="checkType = 3"
                     :class="checkType === 3 ? 'check-item' : ''"
                     class="packet-type-item  flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <h3>С проваренными гранями</h3>
                    <img src="../assets/packet-type-3.png" alt="packet-type">
                </div>
                <div @click="checkType = 4"
                     :class="checkType === 4 ? 'check-item' : ''"
                     class="packet-type-item  flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <h3>Сплоским дном</h3>
                    <img src="../assets/packet-type-2.png" alt="packet-type">
                </div>
            </div>
        </section>

        <!-- Packet options section -->
        <section class="section">
            <h2>Дополнительные опции</h2>
            <div class="packet-mobile">
                <carousel :items-to-show="1.4">
                    <slide v-for="packet in packetOptions" :key="packet">
                        <div @click="checkOptions = packet.id"
                             :class="checkOptions === packet.id ? 'check-item' : ''"
                             class="carousel__item packet-options-item flex-column card-shadow">
                            <div class="hidden-item"></div>
                            <img :src="require(`../assets/${packet.img}`)" :alt="packet.name">
                            <p>{{ packet.name }}</p>
                        </div>
                    </slide>
                </carousel>
            </div>

            <div class="packet-desktop packet-options flex-row card-shadow">
                <div v-for="packet in packetOptions" :key="packet.id"
                     @click="checkOptions = packet.id"
                     :class="checkOptions === packet.id ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img :src="require(`../assets/${packet.img}`)" :alt="packet.name">
                    <p>{{ packet.name }}</p>
                </div>
            </div>
        </section>

        <!-- Packet seam section -->
        <section class="section">
            <h2>Тип шва</h2>
            <div class="packets-seam flex-row card-shadow">
                <div @click="checkSeam = 1"
                     :class="checkSeam === 1 ? 'check-item' : ''"
                     class="packets-seam-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/seam-type-1.png" alt="seam-type">
                    <p>В нахлест влево</p>
                </div>
                <div  @click="checkSeam = 2"
                      :class="checkSeam === 2 ? 'check-item' : ''"
                      class="packets-seam-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/seam-type-2.png" alt="seam-type">
                    <p>Плавник влево</p>
                </div>
                <div  @click="checkSeam = 3"
                      :class="checkSeam === 3 ? 'check-item' : ''"
                      class="packets-seam-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/seam-type-3.png" alt="seam-type">
                    <p>В нахлест вправо</p>
                </div>
                <div  @click="checkSeam = 4"
                      :class="checkSeam === 4 ? 'check-item' : ''"
                      class="packets-seam-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/seam-type-4.png" alt="seam-type">
                    <p>Плавник вправо</p>
                </div>
            </div>
        </section>

        <!-- Packet size section -->
        <form class="flex-column" action="">
            <section class="section">
                <h2>Размеры пакета</h2>
                <div class="packet-size flex-row card-shadow">
                    <div class="packet-size-parameters flex-column">
                        <label>
                            <p>Ширина пакета (A):</p>
                            <input class="input" type="text" placeholder="100">
                        </label>
                        <label>
                            <p>Глубина пакета (B):</p>
                            <input class="input" type="text" placeholder="100">
                        </label>
                    </div>
                    <div class="packet-size-description flex-column card-shadow">
                        <h4>Примечание</h4>
                        <p>Глубина пакета  B  —  оне более 110мм</p>
                        <p>Сумма ширины и глубины  A + B  —  от 60мм до 600мм</p>
                        <p>Соотношение ширины и глубины   A / B  —  от 1,2 до 4.45</p>
                    </div>
                    <img src="../assets/packet-size.png" alt="packet-size">
                </div>
            </section>
            <router-link
                    class="router-button"
                    :to="{ name: 'appPageUniqueCutting', params: { packetId: '1' } }">
                <button class="cutting-btn btn" @click="scrollToTop">Подобрать</button>
            </router-link>
        </form>
    </main>

    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        data() {
            return {
                checkType: 0,
                checkOptions: 0,
                checkSeam: 0,
                packetOptions: [
                    {
                      id: 1,
                      name: 'Ручка под ладонь',
                      img: 'packet-option-1.png'
                    },
                    {
                        id: 2,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-3.png'
                    },
                    {
                        id: 3,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-2.png'
                    },
                    {
                        id: 4,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-1.png'
                    },
                    {
                        id: 5,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-2.png'
                    },
                    {
                        id: 6,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-3.png'
                    },
                    {
                        id: 7,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-1.png'
                    },
                    {
                        id: 8,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-2.png'
                    },
                    {
                        id: 9,
                        name: 'Ручка под ладонь',
                        img: 'packet-option-3.png'
                    },
                ],
                packetType: [
                    {
                        id: 1,
                        name: 'Подушка',
                        img: 'packet-type-1.png'
                    },
                    {
                        id: 2,
                        name: 'Сплоским дном',
                        img: 'packet-type-2.png'
                    },
                    {
                        id: 3,
                        name: 'С проваренными гранями',
                        img: 'packet-type-3.png'
                    },
                    {
                        id: 4,
                        name: 'Сплоским дном',
                        img: 'packet-type-1.png'
                    },
                ]
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
        },
        components: {
            appHeader, appFooter, Carousel, Slide
        },
        name: "appPageCutting"
    }
</script>

<style scoped>
    .packet-type {
        flex-wrap: wrap;
        margin: 0 -1rem;
    }
    .packet-type-item {
        position: relative;
        width: 11rem;
        flex-grow: 1;
        margin: 1rem;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .packet-type-item:hover .hidden-item {
        opacity: 1;
    }
        .packet-type-item h3 {
            margin-bottom: 1rem;
            align-self: normal;
        }
    .packet-options {
        flex-wrap: wrap;
        padding: 1rem;
    }
    .packet-options-item {
        position: relative;
        margin: 1rem;
        width: 25%;
        flex-grow: 1;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .packet-options-item:hover .hidden-item {
        opacity: 1;
    }
        .packet-options-item p,
        .packets-seam-item p {
            font-size: 1.2rem;
            margin: 2rem 0 1rem 0;
        }
        .packet-type-item img,
        .packet-options-item img,
        .packets-seam-item img {
            width: 6rem;
        }
    .packets-seam {
        padding: 1rem;
        flex-wrap: wrap;
    }
    .packets-seam-item {
        position: relative;
        margin: 1rem;
        width: 8rem;
        flex-grow: 1;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .packets-seam-item:hover .hidden-item {
        opacity: 1;
    }
    .packet-size {
        padding: 2rem;
        justify-content: stretch;
    }
        .packet-size img {
            align-self: flex-start;
            width: 15rem;
        }
    .packet-size-parameters {
        justify-content: flex-start;
        width: 20rem;
        margin-right: 2rem;
    }
        .packet-size-parameters p {
            margin: 0;
        }
    .packet-size-description {
        align-self: flex-start;
        width: 100%;
        margin-right: 2rem;
        padding: 1rem 2rem;
    }
        .packet-size-description h4 {
            margin: 0;
            padding: 1rem 0;
            border-bottom: 1px solid #2FC1FF;
        }
    .cutting-btn {
        width: auto;
        height: auto;
        padding: 0.5rem 2rem;
        font-size: 2rem;
        margin-bottom: 3rem;
    }
    .router-button {
        align-self: center;
    }
    .check-item {
        transition: all 0.5s;
        background: #FFFFFF;
        box-shadow: 0 1px 8px 8px rgba(47, 193, 255, 0.7);
        border-radius: 6px;
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
        background: rgba(106, 106, 106, 0.5);
        box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        transition: opacity 0.5s;
        opacity: 0;
        z-index: 999;
     }
    .packet-desktop {
        display: flex;
    }
    .packet-mobile {
        display: none;
    }
    
    @media (max-width: 1200px) {
        .packet-size {
            position: relative;
            flex-direction: column;
            flex-wrap: nowrap;
            padding: 1rem;
        }
        .packet-size img {
            margin: 1rem 0;
            width: auto;
            align-self: center;
        }
        .packet-size-parameters {
            width: 100%;
        }
        .packet-size-parameters label {
            display: flex;
            flex-direction: column;
        }
        .packet-size-parameters .input {
            flex-grow: 1;
        }
        .packet-size-description {
            align-self: center;
            margin: 1rem 0;
            flex-grow: 1;
            width: auto;
        }
    }

    @media (max-width: 980px) {
        .packet-desktop {
            display: none;
        }
        .packet-mobile {
            display: block;
        }
        h2 {
            margin-bottom: 0;
        }
        .flex-row {
            flex-wrap: wrap;
        }
        .packet-type-item {
            margin: 1rem;
        }
        .packet-options {
            padding: 0;
            box-shadow: none;
        }
        .packet-options-item {
            margin: 1rem;
        }
        .packets-seam {

            padding: 0;
            box-shadow: none;
        }
        .packets-seam-item {
            margin: 1rem;
            align-items: center;
            width: 40%;
            flex-grow: 1;
        }
        .router-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .cutting-btn {
            font-size: 20px;
            width: 90%;
        }
        .packet-size {
            box-shadow: none;
            padding: 1rem;
        }
        .packet-options-item p,
        .packets-seam-item p {
            font-size: 14px;
        }
    }

    @media (max-width: 675px) {
        .packet-size-description {
            align-self: flex-start;
        }
        .packet-size img {
            align-self: flex-start;
        }
        .packet-type-item img,
        .packet-options-item img,
        .packets-seam-item img {
            width: 4rem;
        }
        .packets-seam-item {
            width: 30%;
        }
    }
</style>