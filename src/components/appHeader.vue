<template>
    <header class="header flex-row">
        <router-link class="header-title" to="/">
            <img class="logo-img" src="../assets/bestrom_logo.png" alt="bestrom logo">
            <h1>БЕСТРОМ</h1>
        </router-link>
        <img class="desktop-language light-bulb" src="../assets/light.png" alt="light bulb">
        <p class="desktop-language language">EN</p>
        <div class="mobile-language flex-row">
            <img src="../assets/language-world.png" alt="language-world">
            <p class="language">Rus</p>
            <img src="../assets/language-arrow.png" alt="language-arrow">
        </div>
    </header>
</template>

<script>
    export default {
        name: "appHeader"
    }
</script>

<style scoped>
    .header {
        width: 100%;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .header-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2rem;
    }
        .header-title h1 {
            font-weight: bold;
            font-size: 24px;
            line-height: 142%;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.005em;
            font-feature-settings: 'tnum' on, 'lnum' on;
            color: #2FC1FF;
        }
    .desktop-language {
        display: block;
    }
    .mobile-language {
        display: none;
    }
    .logo-img {
        margin-right: 0.3rem;
    }
    .light-bulb {
        width: 0.8rem;
    }
    .language {
        margin: 0 1rem;
    }
    @media (max-width: 1248px) {
        .header-title {
            width: auto;
            justify-content: space-between;
            margin-left: 1rem;
        }
        .desktop-language {
            display: none;
        }
        .mobile-language {
            display: flex;
            align-items: center;
            margin-right: 2rem;
        }
        .header {
            justify-content: space-between;
            box-shadow: 0 -1px 9px rgba(0, 0, 0, 0.25);
            border-radius: 0 0 40px 40px;
        }
        .language {
            color: #2FC1FF;
            font-weight: bold;
            margin: 0 0.4rem;
        }
    }
</style>