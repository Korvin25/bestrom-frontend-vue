<template>
    <!-- Desktop navigation menu -->
    <nav class="nav flex-row">
        <!-- Image items in menu -->
        <div class="nav-logo-items flex-column">
            <router-link
                    @mouseenter="hoverItem = 1"
                    @mouseleave="hoverItem = 0"
                    :class="hoverItem === 1 || this.$route.path === '/' ? 'img-hover' : ''"
                    @click="scrollToTop"
                    class="nav-item img"
                    to="/">
                <img src="../assets/bestrom_logo.png" alt="menu-item-img">
            </router-link>
            <router-link
                    @mouseenter="hoverItem = 2"
                    @mouseleave="hoverItem = 0"
                    :class="hoverItem === 2 || this.$route.path.includes('/about') ? 'img-hover' : ''"
                    @click="scrollToTop"
                    class="nav-item img"
                    to="/about">
                <img src="../assets/menu-item-2.png" alt="menu-item-img">
            </router-link>
            <router-link @mouseenter="hoverItem = 3"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 3 || this.$route.path.includes('/catalog') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/catalog">
                <img src="../assets/menu-item-3.png" alt="menu-item-img">
            </router-link>
            <router-link @mouseenter="hoverItem = 4"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 4 || this.$route.path.includes('/cutting') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/cutting">
                <img src="../assets/menu-item-4.png" alt="menu-item-img">
            </router-link>
            <a @mouseenter="hoverItem = 5"
               @mouseleave="hoverItem = 0"
               :class="hoverItem === 5 ? 'img-hover' : ''"
               @click="showModalMenuService = true"
               class="nav-item img">
                <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
            </a>
            <router-link @mouseenter="hoverItem = 6"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 6 || this.$route.path.includes('/news') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/news">
                <img src="../assets/menu-item-6.png" alt="menu-item-img">
            </router-link>
            <router-link @mouseenter="hoverItem = 7"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 7 || this.$route.path.includes('/partners') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/partners">
                <img src="../assets/menu-item-7.png" alt="menu-item-img">
            </router-link>
            <router-link @mouseenter="hoverItem = 8"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 8 || this.$route.path.includes('/clients') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/clients">
                <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
            </router-link>
            <a @mouseenter="hoverItem = 9"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 9 ? 'img-hover' : ''"
                         @click="showModalMenuContacts = true"
                         class="nav-item img">
                <img src="../assets/menu-item-9.png" alt="menu-item-img">
            </a>
            <router-link @mouseenter="hoverItem = 10"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 10 || this.$route.path.includes('/jobs') ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="/jobs">
                <img src="../assets/menu-item-10.png" alt="menu-item-img">
            </router-link>
            <a @mouseenter="hoverItem = 11"
               @mouseleave="hoverItem = 0"
               :class="hoverItem === 11 || showModalMenuApplication ? 'logo-hover' : ''"
               @click="showModalMenuApplication = true"
               class="nav-item img logo">
                <img src="../assets/mobile.png" alt="menu-item-img">
            </a>
            <a @mouseenter="hoverItem = 12"
               @mouseleave="hoverItem = 0"
               href="https://vk.com"
               :class="hoverItem === 12 ? 'logo-hover' : ''"
               class="nav-item img logo">
                <img style="width: 33px;" src="../assets/vk.png" alt="menu-item-img">
            </a>
            <a @mouseenter="hoverItem = 13"
               @mouseleave="hoverItem = 0"
               href="https://youtube.com"
               :class="hoverItem === 13 ? 'logo-hover' : ''"
               class="nav-item img logo">
                <img style="width: 25px;" src="../assets/youtube.png" alt="menu-item-img">
            </a>
            <a @mouseenter="hoverItem = 14"
               @mouseleave="hoverItem = 0"
               href="https://instagram.com"
               :class="hoverItem === 14 ? 'logo-hover' : ''"
               class="nav-item img logo">
                <img style="width: 30px;" src="../assets/instagram.png" alt="menu-item-img">
            </a>
        </div>

        <!-- Text items in menu  !!  !! -->
        <div class="nav-text-items flex-column" >
            <router-link
                    @mouseenter="hoverItem = 1"
                    @mouseleave="hoverItem = 0"
                    :class="hoverItem === 1 || this.$route.path === '/' ? 'text-hover' : ''"
                    @click="scrollToTop"
                    class="nav-item text"
                    to="/">
                <p>Главная</p>
            </router-link>
            <router-link
                    @mouseenter="hoverItem = 2"
                    @mouseleave="hoverItem = 0"
                    :class="hoverItem === 2 || this.$route.path.includes('/about') ? 'text-hover' : ''"
                    @click="scrollToTop"
                    class="nav-item text"
                    to="/about">
                <p>О компании</p>
            </router-link>
            <router-link @mouseenter="hoverItem = 3"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 3 || this.$route.path.includes('/catalog') ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/catalog">
                <p>Каталог</p>
            </router-link>
            <router-link @mouseenter="hoverItem = 4"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 4 || this.$route.path.includes('/cutting') ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/cutting">
                <p>Раскрой пакета</p>
            </router-link>
            <a @mouseenter="hoverItem = 5"
               @mouseleave="hoverItem = 0"
               :class="hoverItem === 5 ? 'text-hover' : ''"
               @click="showModalMenuService = true"
               class="nav-item text">
                <p>Сервис</p>
            </a>
            <router-link @mouseenter="hoverItem = 6"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 6 || this.$route.path.includes('/news') ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/news">
                <p>Новости</p>
            </router-link>
            <router-link @mouseenter="hoverItem = 7"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 7 || this.$route.path.includes('/partners') ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/partners">
                <p>Партнеры</p>
            </router-link>
            <router-link @mouseenter="hoverItem = 8"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 8 || this.$route.path.includes('/clients') ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/clients">
                <p>Клиенты</p>
            </router-link>
            <a @mouseenter="hoverItem = 9"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 9 ? 'text-hover' : ''"
                         @click="showModalMenuContacts = true"
                         class="nav-item text">
                <p>Контакты</p>
            </a>
            <router-link @mouseenter="hoverItem = 10"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 10 || this.$route.path.includes('/jobs')  ? 'text-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item text"
                         to="/jobs">
                <p>Вакансии</p>
            </router-link>
            <a @mouseenter="hoverItem = 11"
               @mouseleave="hoverItem = 0"
               :class="hoverItem === 11 || showModalMenuApplication ?  'text-hover' : ''"
               @click="showModalMenuApplication = true"
               class="nav-item text">
                <p>Оставить заявку</p>
            </a>
            <a @mouseenter="hoverItem = 12"
               @mouseleave="hoverItem = 0"
               href="https://vk.com"
               :class="hoverItem === 12 ? 'text-hover' : ''"
               class="nav-item text">
                <p>ВКонтакте</p>
            </a>
            <a @mouseenter="hoverItem = 13"
               @mouseleave="hoverItem = 0"
               href="https://youtube.com"
               :class="hoverItem === 13 ? 'text-hover' : ''"
               class="nav-item text">
                <p>YouTube</p>
            </a>
            <a @mouseenter="hoverItem = 14"
               @mouseleave="hoverItem = 0"
               href="https://instagram.com"
               :class="hoverItem === 14 ? 'text-hover' : ''"
               class="nav-item text">
                <p>Instagram</p>
            </a>
        </div>
    </nav>

    <!-- Mobile navigation menu -->
    <div class="mobile-nav">
        <div class="mobile-nav-buttons">
            <div class="mobile-nav-buttons-item" @click="showMobileMenu = true">
                <img src="../assets/menu-burger.png" alt="menu-burger">
                <p>Меню</p>
            </div>
            <a href="tel:+78005557457" class="mobile-nav-buttons-item">
                <p>Позвонить</p>
            </a>
        </div>

        <transition-group name="modal">
            <nav v-if="showMobileMenu" class="mobile-nav-elements flex-column">
                <img @click="showMobileMenu = false" class="close-mobile-menu" src="../assets/close-mobile-menu.png" alt="close-mobile-menu">
                <p class="mobile-menu-title">Меню</p>

                <div class="mobile-menu-logo flex-row">
                    <a href="https://vk.com" class="nav-item img logo">
                        <img style="width: 33px;" src="../assets/vk.png" alt="menu-item-img">
                    </a>
                    <a href="https://youtube.com" class="nav-item img logo">
                        <img style="width: 25px;" src="../assets/youtube.png" alt="menu-item-img">
                    </a>
                    <a href="https://instagram.com" class="nav-item img logo">
                        <img style="width: 30px;" src="../assets/instagram.png" alt="menu-item-img">
                    </a>
                </div>

                <div @click="showMobileMenu = false" class="mobile-menu-nav-items flex-column">
                    <router-link @click="scrollToTop"
                            class="nav-mobile-item flex-row"
                            to="/">
                        <div :class="hoverItem === 1 || this.$route.path === '/' ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/bestrom_logo.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 1 || this.$route.path === '/' ? 'text-hover' : ''">Главная</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                            class="nav-mobile-item flex-row"
                            to="/about">
                        <div :class="hoverItem === 2 || this.$route.path.includes('/about') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-2.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 2 || this.$route.path.includes('/about') ? 'text-hover' : ''">О компании</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/catalog">
                        <div :class="hoverItem === 3 || this.$route.path.includes('/catalog') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-3.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 3 || this.$route.path.includes('/catalog') ? 'text-hover' : ''">Каталог</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/cutting">
                        <div :class="hoverItem === 4 || this.$route.path.includes('/cutting') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-4.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 4 || this.$route.path.includes('/cutting') ? 'text-hover' : ''">Раскрой пакета</p>
                    </router-link>
                    <a @click="showModalMenuService = true"
                       class="nav-mobile-item flex-row">
                        <div :class="hoverItem === 5 ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 5 ? 'text-hover' : ''">Сервис</p>
                    </a>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/news">
                        <div :class="hoverItem === 6 || this.$route.path.includes('/news') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-6.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 6 || this.$route.path.includes('/news') ? 'text-hover' : ''">Новости</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/partners">
                        <div :class="hoverItem === 7 || this.$route.path.includes('/partners') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-7.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 7 || this.$route.path.includes('/partners') ? 'text-hover' : ''">Партнеры</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/clients">
                        <div :class="hoverItem === 8 || this.$route.path.includes('/clients') ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
                            <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 8 || this.$route.path.includes('/clients') ? 'text-hover' : ''">Клиенты</p>
                    </router-link>
                    <router-link @click="scrollToTop"
                                 class="nav-mobile-item flex-row"
                                 to="/jobs">
                        <div class="nav-mobile-item-img card-shadow">
                            <img :class="hoverItem === 10 || this.$route.path.includes('/jobs')  ? 'img-hover' : ''" src="../assets/menu-item-10.png" alt="menu-item-img">
                        </div>
                        <p :class="hoverItem === 10 || this.$route.path.includes('/jobs')  ? 'text-hover' : ''">Вакансии</p>
                    </router-link>

                    <div class="mobile-menu-nav-bottom flex-row">
                        <div @click="showModalMenuApplication = true" class="mobile-menu-nav-bottom-item card-shadow flex-column">
                            <img src="../assets/menu-mobile-call.png" alt="menu-mobile-call">
                            <p>Заявка</p>
                        </div>
                        <div @click="showModalMenuContactsQuestion = true" class="mobile-menu-nav-bottom-item card-shadow flex-column">
                            <img src="../assets/menu-mobile-message.png" alt="menu-mobile-message">
                            <p>Написать</p>
                        </div>
                        <div @click="showModalMenuContacts = true" class="mobile-menu-nav-bottom-item card-shadow flex-column">
                            <img src="../assets/menu-mobile-contacts.png" alt="menu-mobile-contacts">
                            <p>Контакты</p>
                        </div>
                    </div>
                </div>
            </nav>
        </transition-group>
    </div>


    <transition-group name="modal">
        <app-modal-menu-application v-if="showModalMenuApplication" @close="showModalMenuApplication = false"></app-modal-menu-application>
        <app-modal-menu-service v-if="showModalMenuService" @close="showModalMenuService = false"></app-modal-menu-service>
        <app-modal-menu-contacts v-if="showModalMenuContacts"
                                 @close="showModalMenuContacts = false"
                                 @call="showModalMenuContactsCallFunc"
                                 @question="showModalMenuContactsQuestionFunc"
        ></app-modal-menu-contacts>
        <app-modal-menu-contacts-call v-if="showModalMenuContactsCall" @close="showModalMenuContactsCall = false"></app-modal-menu-contacts-call>
        <app-modal-menu-contacts-question v-if="showModalMenuContactsQuestion" @close="showModalMenuContactsQuestion = false"></app-modal-menu-contacts-question>
    </transition-group>

</template>

<script>
    import appModalMenuApplication from "@/components/appModalMenuApplication";
    import appModalMenuService from "@/components/appModalMenuService";
    import appModalMenuContacts from "@/components/appModalMenuContacts";
    import appModalMenuContactsCall from "@/components/appModalMenuContactsCall";
    import appModalMenuContactsQuestion from "@/components/appModalMenuContactsQuestion";

    export default {
        data() {
            return {
                hoverItem: 0,
                showMobileMenu: false,
                showModalMenuApplication: false,
                showModalMenuService: false,
                showModalMenuContacts: false,
                showModalMenuContactsCall: false,
                showModalMenuContactsQuestion: false
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
            showModalMenuContactsCallFunc() {
                this.showModalMenuContactsCall = true
                this.showModalMenuContacts = false
            },
            showModalMenuContactsQuestionFunc() {
                this.showModalMenuContactsQuestion = true
                this.showModalMenuContacts = false
            }
        },
        components: {
            appModalMenuApplication, appModalMenuService, appModalMenuContacts,
            appModalMenuContactsCall, appModalMenuContactsQuestion
        },
        name: "appNavMenu"
    }
</script>

<style scoped>
    .mobile-nav {
        display: none;
    }
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        align-items: center;
        min-height: 600px;
        background: transparent;
    }
    .nav-logo-items {
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 0 0.5rem;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    }
        .nav-logo-items:hover + .nav-text-items {
            -webkit-transform: scaleX(1);
            -ms-transform: scaleX(1);
            transform: scaleX(1);
        }
    .nav-text-items {
        align-items: flex-start;
        justify-content: space-around;
        padding: 0 2rem 0 0;
        height: 100%;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        transition: all 0.3s;
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
    }
        .nav-text-items:hover {
            -webkit-transform: scaleX(1);
            -ms-transform: scaleX(1);
            transform: scaleX(1);
        }
        .nav-text-items .nav-item {
            box-shadow: none;
        }
    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .nav-item.text {
        margin-left: 1rem;
        text-decoration: none;
        background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
        background-size: 0 2px;
        transition: background-size .3s ease;
        border-radius: 0;
    }
    .nav-item.text.text-hover {
        transform: scale(1.04);
        background-size: 100% 2px;
    }
    .nav-item:hover {
        cursor: pointer;
    }
        .nav-item.img {
            width: 2.5rem;
            height: 2.5rem;
        }
        .nav-item.img.img-hover {
            transition: all 0.5s;
            background: rgba(47, 193, 255, 0.3);
        }
        .nav-item.img.logo {
            background: #6A6A6A;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 50%;
        }
        .nav-item.img.logo.logo-hover {
            background: rgba(47, 193, 255, 0.9);
        }
        .nav-item p {
            font-size: 16px;
            margin: 0.5rem 0;
        }

    @media (max-width: 980px) {
        .nav {
            display: none;
        }
        .mobile-nav {
            width: 100%;
            height: 100%;
            display: block;
        }
        .mobile-nav-buttons {
            z-index: 999;
            position: fixed;
            bottom: 1rem;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        .mobile-nav-buttons-item {
            margin: 0 1rem;
            flex-grow: 1;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(0deg, #2FC1FF -40%, #7DD8FF 100%);
            border: 3px solid #FFFFFF;
            box-sizing: border-box;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
        }
        .mobile-nav-buttons-item p {
            text-align: center;
            padding: 0 0.5rem;
            font-weight: 500;
            font-size: 16px;
            line-height: 142%;
            color: #FFFFFF;
            text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
        }
        .mobile-nav-elements {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 9999;
            justify-content: flex-start;
            background-color: #FFFFFF;
        }
        .close-mobile-menu {
            position: absolute;
            top: 0;
            right: 0;
            width: 2rem;
            height: 2rem;
            margin: 1rem;
        }
        .mobile-menu-title {
            text-align: center;
            font-weight: 500;
            font-size: 18px;
            line-height: 142%;
            text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
        }
        .mobile-menu-logo {
            justify-content: space-around;
            padding: 0 2rem 1rem 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #2FC1FF;
        }
        .mobile-menu-nav-items {
            height: 100%;
            justify-content: space-around;
        }
        .nav-mobile-item {
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 0.5rem;
        }
            .nav-mobile-item p {
                font-size: 18px;
                margin: 0;
                padding: 0.5rem 0;
                text-decoration: none;
                background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
                background-size: 0 2px;
                transition: background-size .3s ease;
                border-radius: 0;
            }
            .nav-mobile-item p.text-hover {
                transform: scale(1.04);
                background-size: 100% 2px;
            }
        .nav-mobile-item-img {
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.5rem;
            height: 2.5rem;
            margin: 0 1rem;
        }
            .nav-mobile-item-img.img-hover {
                transition: all 0.5s;
                background: rgba(47, 193, 255, 0.2);
            }
        .mobile-menu-nav-bottom {
            margin: 0 0.5rem;
        }
        .mobile-menu-nav-bottom-item {
            justify-content: center;
            align-items: center;
            padding: 1rem;
            margin: 0 0.5rem;
            width: 30%;
            flex-grow: 1;
        }
            .mobile-menu-nav-bottom-item p {
                margin: 0;
            }
    }
</style>