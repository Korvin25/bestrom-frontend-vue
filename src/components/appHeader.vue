<template>
    <header class="header flex-row">
        <div class="header-title">
            <img class="logo-img" src="../assets/bestrom_logo.png" alt="bestrom logo">
            <h1>БЕСТРОМ</h1>
        </div>
        <img class="light-bulb" src="../assets/light.png" alt="light bulb">
        <p class="language">EN</p>
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
    .logo-img {
        margin-right: 0.3rem;
    }
    .light-bulb {
        width: 0.8rem;
    }
    .language {
        letter-spacing: 0.005em;
        margin: 0 1rem;
    }
</style>