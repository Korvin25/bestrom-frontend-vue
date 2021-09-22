<template>
    <nav class="nav flex-row">
        <div class="nav-logo-items flex-column" @mouseenter="showTitleMenu = true">
            <router-link
                    @click="scrollToTop"
                    class="nav-item img"
                    to="/">
                <img src="../assets/bestrom_logo.png" alt="menu-item-img">
            </router-link>
            <router-link
                    @click="scrollToTop"
                    class="nav-item img"
                    to="/about">
                <img src="../assets/menu-item-2.png" alt="menu-item-img">
            </router-link>
            <div class="nav-item img">
                <img src="../assets/menu-item-3.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-4.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-6.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-7.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-5,8.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-9.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-10.png" alt="menu-item-img">
            </div>
            <div class="nav-item img logo">
                <img src="../assets/mobile.png" alt="menu-item-img">
            </div>
            <div class="nav-item img logo">
                <img style="width: 33px;" src="../assets/vk.png" alt="menu-item-img">
            </div>
            <div class="nav-item img logo">
                <img style="width: 25px;" src="../assets/youtube.png" alt="menu-item-img">
            </div>
            <div class="nav-item img logo">
                <img style="width: 30px;" src="../assets/instagram.png" alt="menu-item-img">
            </div>
        </div>
        <div class="nav-text-items flex-column" v-if="showTitleMenu" @mouseleave="showTitleMenu = false">
            <router-link
                    @click="scrollToTop"
                    class="nav-item text"
                    to="/">
                <p>Главная</p>
            </router-link>
            <router-link
                    @click="scrollToTop"
                    class="nav-item text"
                    to="/about">
                <p>О компании</p>
            </router-link>
            <div class="nav-item text">
                <p>Каталог</p>
            </div>
            <div class="nav-item text">
                <p>Раскрой пакета</p>
            </div>
            <div class="nav-item text">
                <p>Сервис</p>
            </div>
            <div class="nav-item text">
                <p>Новости</p>
            </div>
            <div class="nav-item text">
                <p>Партнеры</p>
            </div>
            <div class="nav-item text">
                <p>Партнеры</p>
            </div>
            <div class="nav-item text">
                <p>Контакты</p>
            </div>
            <div class="nav-item text">
                <p>Вакансии</p>
            </div>
            <div class="nav-item text">
                <p>Оставить заявку</p>
            </div>
            <div class="nav-item text">
                <p>ВКонтакте</p>
            </div>
            <div class="nav-item text">
                <p>YouTube</p>
            </div>
            <div class="nav-item text">
                <p>Instagram</p>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                showTitleMenu: false
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
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
        height: 100%;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    }
    .nav-logo-items {
        align-items: center;
        height: 100%;
        width: 71px;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    }
    .nav-text-items {
        align-items: flex-start;
        height: 100%;
        width: 170px;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    }
        .nav-text-items .nav-item {
            box-shadow: none;
        }
    .nav-item {
        height: 37px;
        margin: 14px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .nav-item.text {
        text-decoration: none;
        background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
        background-size: 0 2px;
        transition: background-size .3s ease;
        border-radius: 0;
    }
    .nav-item.text:hover {
        transform: scale(1.04);
        background-size: 100% 2px;
    }
    .nav-item:hover {
        cursor: pointer;
    }
        .nav-item.img {
            width: 37px;
            height: 37px;
        }
        .nav-item.img:hover {
            background: rgba(47, 193, 255, 0.3);
        }
        .nav-item.img.logo {
            background: #6A6A6A;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 99px;
        }
        .nav-item.img.logo:hover {
            background: #2FC1FF;
        }
        .nav .nav-item.img.logo:hover .nav-item.text {
            transform: scale(1.04);
            background-size: 100% 2px;
        }
        .nav-item p {
            font-size: 16px;
            line-height: 142%;
            letter-spacing: 0.005em;
            font-feature-settings: 'tnum' on, 'lnum' on;
        }
</style>