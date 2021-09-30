<template>
    <nav class="nav flex-row">

        <!-- Image items in menu -->
        <div class="nav-logo-items flex-column" @mouseenter="showTitleMenu = true">
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
            <router-link @mouseenter="hoverItem = 9"
                         @mouseleave="hoverItem = 0"
                         :class="hoverItem === 9 ? 'img-hover' : ''"
                         @click="scrollToTop"
                         class="nav-item img"
                         to="">
                <img src="../assets/menu-item-9.png" alt="menu-item-img">
            </router-link>
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
        <transition name="fade">
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
                <router-link @mouseenter="hoverItem = 9"
                             @mouseleave="hoverItem = 0"
                             :class="hoverItem === 9 ? 'text-hover' : ''"
                             @click="scrollToTop"
                             class="nav-item text"
                             to="">
                    <p>Контакты</p>
                </router-link>
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
        </transition>
    </nav>

    <transition-group name="modal">
        <app-modal-menu-application v-if="showModalMenuApplication" @close="showModalMenuApplication = false"></app-modal-menu-application>
        <app-modal-menu-service v-if="showModalMenuService" @close="showModalMenuService = false"></app-modal-menu-service>
    </transition-group>

</template>

<script>
    import appModalMenuApplication from "@/components/appModalMenuApplication";
    import appModalMenuService from "@/components/appModalMenuService";

    export default {
        data() {
            return {
                hoverItem: 0,
                showTitleMenu: false,
                showModalMenuApplication: false,
                showModalMenuService: false,
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
        },
        components: {
            appModalMenuApplication, appModalMenuService
        },
        name: "appNavMenu"
    }
</script>

<style scoped>


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
</style>