<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <h2>БЕСТРОМ - 420С</h2>
            <div class="catalog-item-card flex-row card-shadow">
                <div class="arrow">
                    <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                </div>
                <img class="catalog-item-card-image" src="../assets/content_image.png" alt="content_image">
                <div class="arrow">
                    <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                </div>
            </div>
            <!-- ./catalog-item-card -->
            <div class="details flex-column card-shadow">
                <div class="details-select flex-row">
                    <div @click="isSelected = 1" :class="isSelected === 1 ? 'details-select-item-choice' : ''" class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== 1" src="../assets/catalog-details-settings.png" alt="catalog-details">
                        <img v-if="isSelected === 1" src="../assets/catalog-details-settings-active.png" alt="catalog-details">
                        <p>технические характеристики</p>
                    </div>
                    <div @click="isSelected = 2" :class="isSelected === 2 ? 'details-select-item-choice' : ''" class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== 2" src="../assets/catalog-details-products.png" alt="catalog-details">
                        <img v-if="isSelected === 2" src="../assets/catalog-details-products-active.png" alt="catalog-details">
                        <p>продукты</p>
                    </div>
                    <div @click="isSelected = 3" :class="isSelected === 3 ? 'details-select-item-choice' : ''" class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== 3" src="../assets/catalog-details-inventory.png" alt="catalog-details">
                        <img v-if="isSelected === 3" src="../assets/catalog-details-inventory-active.png" alt="catalog-details">
                        <p>доп. оборудование</p>
                    </div>
                    <div @click="isSelected = 4"  :class="isSelected === 4 ? 'details-select-item-choice' : ''" class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== 4" src="../assets/catalog-details-packet.png" alt="catalog-details">
                        <img v-if="isSelected === 4" src="../assets/catalog-details-packet-active.png" alt="catalog-details">
                        <p>тип пакета</p>
                    </div>
                    <div @click="isSelected = 5" :class="isSelected === 5 ? 'details-select-item-choice' : ''" class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== 5" src="../assets/catalog-details-solution.png" alt="catalog-details">
                        <img v-if="isSelected === 5" src="../assets/catalog-details-solution-active.png" alt="catalog-details">
                        <p>готовые решения</p>
                    </div>
                </div>
                <!-- /.details-select -->
                <app-details-select-settings v-if="isSelected === 1"></app-details-select-settings>
                <app-details-select-products v-if="isSelected === 2"></app-details-select-products>
                <app-details-select-inventory v-if="isSelected === 3"></app-details-select-inventory>
                <app-details-select-packet v-if="isSelected === 4"></app-details-select-packet>
                <app-details-select-solution v-if="isSelected === 5"></app-details-select-solution>

            </div>
            <!-- /.details -->

            <div class="catalog-ig-buttons flex-row">
                <button class="btn">ЗАКАЗАТЬ ЗВОНОК</button>
                <button class="btn">ОТПРАВИТЬ ЗАЯВКУ</button>
            </div>
        </section>
        <section class="section">
            <h2>Бренды купившие эту машину</h2>
            <div class="flex-row">
                <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
                <app-partners-item link="https://yandex.ru" image="logo-babaevskiy.png"></app-partners-item>
            </div>
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appDetailsSelectSettings from "@/components/appDetailsSelectSettings";
    import appDetailsSelectProducts from "@/components/appDetailsSelectProducts";
    import appDetailsSelectInventory from "@/components/appDetailsSelectInventory";
    import appDetailsSelectPacket from "@/components/appDetailsSelectPacket";
    import appDetailsSelectSolution from "@/components/appDetailsSelectSolution";
    import appPartnersItem from "@/components/appPartnersItem";

    export default {
        data() {
          return {
              isSelected: 1
          }
        },
        components: {
            appHeader, appFooter, appDetailsSelectSettings, appDetailsSelectProducts,
            appDetailsSelectInventory, appDetailsSelectPacket, appDetailsSelectSolution,
            appPartnersItem
        },
        name: "appPageCatalogId"
    }
</script>

<style scoped>
    .catalog-item-card {
        padding: 1rem;
        align-items: center;
    }
        .catalog-item-card-image {
            width: 20rem;
            height: 25rem;
        }
    .details {
        transition: all .5s;
        margin: 2rem 0;
        height: 100%;
        padding: 2rem 1rem;
    }
    .details-select {
        justify-content: flex-start;
    }
    .details-select-item {
        transition: all .5s;
        cursor: pointer;
        text-align: center;
        padding: 0.5rem 1rem;
        align-items: center;
        margin: 0 1rem;
    }
        .details-select-item:hover {
            transition: all .5s;
            background: rgba(0, 0, 0, 0.1);
        }
    .details-select-item-choice {
        transition: all .5s;
        color: #FFFFFF;
        background: #2FC1FF;
        box-shadow: inset 0 1px 10px 1px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .details-select-item-choice:hover {
        background: #2FC1FF;
    }
    .catalog-ig-buttons {
        margin: 0 -1rem;
    }
    .catalog-ig-buttons .btn {
        flex-grow: 1;
        margin: 0 1rem;
    }
</style>