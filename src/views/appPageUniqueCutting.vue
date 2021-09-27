<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <div class="section">
            <h2 style="margin-bottom: 2rem">Рекомендуемый формат F150</h2>
            <h2 style="margin: 0">Пакет плоское дно.</h2>
            <h2 style="margin: 5rem 0 0 0">ОСНОВНАЯ ИНФОРМАЦИЯ</h2>
        </div>
        <section class="section flex-column">
            <div class="unique-packet flex-row">
                <img class="unique-packet-scheme" src="../assets/unique-packet-scheme.png" alt="unique-packet-scheme">
                <img class="unique-packet-preview" src="../assets/unique-packet-preview.png" alt="unique-packet-preview">
            </div>
            <div class="flex-row buttons">
                <button class="cutting-btn btn">Напечатать</button>
                <button class="cutting-btn btn">Сохранить</button>
            </div>
        </section>
        <section class="section">
            <h2>Машины работающие с данным форматом</h2>

            <div class="slider-content flex-row card-shadow">
                <div class="arrow">
                    <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                </div>
                <!-- /.arrow -->
                <div class="flex-row machines">
                    <app-machines-item
                            title="Б-420"
                            image="content_image.png"
                    ></app-machines-item>
                    <app-machines-item
                            title="Б-420"
                            image="content_image.png"
                    ></app-machines-item>
                    <app-machines-item
                            title="Б-420"
                            image="content_image.png"
                    ></app-machines-item>
                </div>
                <!-- /.partners -->
                <div class="arrow">
                    <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                </div>
                <!-- /.arrow -->
                <!-- точки перехода для слайдера -->
            </div>
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appMachinesItem from "@/components/appMachinesItem";

    export default {
        components: {
            appHeader, appFooter, appMachinesItem
        },
        name: "appPageUniqueCutting"
    }
</script>

<style scoped>
    .unique-packet {
        justify-content: space-around;
        align-items: center;
    }
    .unique-packet-scheme {
        width: 35rem;
        height: 45rem;
        margin-right: 2rem;
    }
    .unique-packet-preview {
        width: 15rem;
        height: 20rem;
    }
    .buttons {
        justify-content: center;
        align-items: center;
    }
    .cutting-btn {
        width: auto;
        height: auto;
        padding: 0.5rem 2rem;
        font-size: 2rem;
        margin: 6rem 3rem 0 3rem;
    }
    .machines {
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>