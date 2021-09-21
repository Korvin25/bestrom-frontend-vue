<template>
    <nav class="nav flex-row">
        <div class="nav-logo-items flex-column" @mouseenter="showTitleMenu = true">
            <div class="nav-item img">
                <img src="../assets/bestrom_logo.png" alt="menu-item-img">
            </div>
            <div class="nav-item img">
                <img src="../assets/menu-item-2.png" alt="menu-item-img">
            </div>
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
            <div class="nav-item">
                <p>Главная</p>
            </div>
            <div class="nav-item">
                <p>О компании</p>
            </div>
            <div class="nav-item">
                <p>Каталог</p>
            </div>
            <div class="nav-item">
                <p>Раскрой пакета</p>
            </div>
            <div class="nav-item">
                <p>Сервис</p>
            </div>
            <div class="nav-item">
                <p>Новости</p>
            </div>
            <div class="nav-item">
                <p>Партнеры</p>
            </div>
            <div class="nav-item">
                <p>Партнеры</p>
            </div>
            <div class="nav-item">
                <p>Контакты</p>
            </div>
            <div class="nav-item">
                <p>Вакансии</p>
            </div>
            <div class="nav-item">
                <p>Оставить заявку</p>
            </div>
            <div class="nav-item">
                <p>ВКонтакте</p>
            </div>
            <div class="nav-item">
                <p>YouTube</p>
            </div>
            <div class="nav-item">
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
        width: 162px;
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
    .nav-item:hover {
        cursor: pointer;
    }
        .nav-item.img {
            width: 37px;
            height: 37px;
        }
        .nav-item.img.logo {
            background: #6A6A6A;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 99px;
        }
        .nav-item.img.logo:hover {
            background: #2FC1FF;
        }
        .nav-item p {
            font-size: 16px;
            line-height: 142%;
            letter-spacing: 0.005em;
            font-feature-settings: 'tnum' on, 'lnum' on;
        }
</style>