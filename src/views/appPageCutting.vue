<template>
    <app-header></app-header>

    <main class="main-content flex-column">
        <!-- Packet type section -->
        <section class="section">
            <h2>Тип пакета</h2>
            <div class="packet-type flex-row">
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
            <div class="packet-options flex-row card-shadow">
                <div @click="checkOptions = 1"
                     :class="checkOptions === 1 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-1.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 2"
                     :class="checkOptions === 2 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-1.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 3"
                     :class="checkOptions === 3 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-2.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 4"
                     :class="checkOptions === 4 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-1.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 5"
                     :class="checkOptions === 5 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-3.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 6"
                     :class="checkOptions === 6 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-2.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 7"
                     :class="checkOptions === 7 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-1.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 8"
                     :class="checkOptions === 8 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-2.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
                </div>
                <div @click="checkOptions = 9"
                     :class="checkOptions === 9 ? 'check-item' : ''"
                     class="packet-options-item flex-column card-shadow">
                    <div class="hidden-item"></div>
                    <img src="../assets/packet-option-3.png" alt="packet-type">
                    <p>Ручка под ладонь</p>
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
                class="cutting-btn"
                :to="{ name: 'appPageUniqueCutting', params: { packetId: '1' } }">
            <button class="cutting-btn btn">Подобрать</button>
        </router-link>
    </main>

    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";

    export default {
        data() {
            return {
                checkType: 0,
                checkOptions: 0,
                checkSeam: 0
            }
        },
        components: {
            appHeader, appFooter
        },
        name: "appPageCutting"
    }
</script>

<style scoped>
    .packet-type-item {
        position: relative;
        width: 19%;
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
        padding: 0 3rem;
    }
    .packet-options-item {
        position: relative;
        margin: 2rem 0;
        width: 25%;
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
        flex-wrap: wrap;
        padding: 0 3rem;
    }
    .packets-seam-item {
        position: relative;
        margin: 2rem 0;
        width: 18%;
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
        align-self: center;
        width: auto;
        height: auto;
        padding: 0.5rem 2rem;
        font-size: 2rem;
        margin-bottom: 3rem;
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

</style>