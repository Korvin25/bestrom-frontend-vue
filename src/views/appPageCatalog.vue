<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <div class="catalog-select-card card-shadow flex-column">
                <div class="flex-row">
                    <div class="arrow">
                        <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                    </div>
                    <div class="radio-type flex-row">
                        <input class="custom-radio" name="radio-choice" id="radio-choice-1" type="radio" checked>
                        <label for="radio-choice-1">ПОДБОР ПО ТИПУ МАШИНЫ</label>
                        <input class="custom-radio" name="radio-choice" id="radio-choice-2" type="radio">
                        <label for="radio-choice-2">ПОДБОР ПО ТИПУ ПРОДУКТА</label>
                        <input class="custom-radio" name="radio-choice" id="radio-choice-3" type="radio">
                        <label for="radio-choice-3">ПОДБОР ПО ТИПУ УПАКОВКИ</label>
                        <input class="custom-radio" style="margin-right: 0;" name="radio-choice" id="radio-choice-4" type="radio">
                        <label for="radio-choice-4">ГОТОВЫЕ РЕШЕНИЯ</label>
                    </div>
                    <div class="arrow">
                        <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                    </div>
                </div>

                <div class="type-select flex-row">
                    <app-catalog-type-select
                            :class="typeSelect === 1 ? 'type-select-checked' : ''"
                            @click="typeSelect = 1"
                            text="Упаковочные машины вертикального типа"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 2 ? 'type-select-checked' : ''"
                            @click="typeSelect = 2"
                            text="Линии для фасовки и упаковки продуктов в готовую тару"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 3 ? 'type-select-checked' : ''"
                            @click="typeSelect = 3"
                            text="Упаковочные машины горизонтального типа"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 4 ? 'type-select-checked' : ''"
                            @click="typeSelect = 4"
                            text="Термотоннели"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 5 ? 'type-select-checked' : ''"
                            @click="typeSelect = 5"
                            text="Готовые решения"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 6 ? 'type-select-checked' : ''"
                            @click="typeSelect = 6"
                            text="Дозаторы"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 7 ? 'type-select-checked' : ''"
                            @click="typeSelect = 7"
                            text="Машины для формирования пакетов с плоским верхом"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 8 ? 'type-select-checked' : ''"
                            @click="typeSelect = 8"
                            text="Элеваторы"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 9 ? 'type-select-checked' : ''"
                            @click="typeSelect = 9"
                            text="Конвейры"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 10 ? 'type-select-checked' : ''"
                            @click="typeSelect = 10"
                            text="Транспортеры"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 11 ? 'type-select-checked' : ''"
                            @click="typeSelect = 11"
                            text="Система динамического взвешивания для контроля веса"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 12 ? 'type-select-checked' : ''"
                            @click="typeSelect = 12"
                            text="Дополнительное оборудование"
                    ></app-catalog-type-select>
                    <app-catalog-type-select
                            :class="typeSelect === 13 ? 'type-select-checked' : ''"
                            @click="typeSelect = 13"
                            text="Оборудование для групповой упаковки пакетов в термоусадочную пленку"
                    ></app-catalog-type-select>
                </div>
            </div>
            <!-- /.catalog-select-card -->
            <div class="catalog-item flex-row">
                <app-catalog-item
                        id="1"
                        title="БЕСТРОМ-420C"
                        sub-title="Упаковочная машина вертикального типа"
                        text="Предназначена для упаковки сыпучих, гранулированных и мелкоштучных продуктов в пакеты из термосвариваемых пленок, подаваемых с рулона в виде полотна."
                        image="content_image.png"
                ></app-catalog-item>
                <app-catalog-item
                        id="2"
                        title="БЕСТРОМ-420C"
                        sub-title="Упаковочная машина вертикального типа"
                        text="Предназначена для упаковки сыпучих, гранулированных и мелкоштучных продуктов в пакеты из термосвариваемых пленок, подаваемых с рулона в виде полотна."
                        image="content_image.png"
                ></app-catalog-item>
                <app-catalog-item
                        id="3"
                        title="БЕСТРОМ-420C"
                        sub-title="Упаковочная машина вертикального типа"
                        text="Предназначена для упаковки сыпучих, гранулированных и мелкоштучных продуктов в пакеты из термосвариваемых пленок, подаваемых с рулона в виде полотна."
                        image="content_image.png"
                ></app-catalog-item>
                <app-catalog-item
                        id="4"
                        title="БЕСТРОМ-420C"
                        sub-title="Упаковочная машина вертикального типа"
                        text="Предназначена для упаковки сыпучих, гранулированных и мелкоштучных продуктов в пакеты из термосвариваемых пленок, подаваемых с рулона в виде полотна."
                        image="content_image.png"
                ></app-catalog-item>
            </div>
            <!-- /.catalog-item -->
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appCatalogTypeSelect from "@/components/appCatalogTypeSelect";
    import appCatalogItem from "@/components/appCatalogItem";

    export default {
        data() {
          return {
              typeSelect: 0
          }
        },
        components: {
            appHeader, appFooter, appCatalogTypeSelect, appCatalogItem
        },
        name: "appPageCatalog"
    }
</script>

<style scoped>
    .catalog-select-card {
        margin: 1rem 0;
        padding: 1rem;
        justify-content: flex-start;
    }
    .radio-type {
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin: 0 1rem;
    }
    /* для элемента input c type="radio" */
    .custom-radio {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    /* для элемента label связанного с .custom-radio */
    .custom-radio+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        font-weight: bold;
        font-size: 16px;
        color: #B8B8B8;
        margin-right: 1rem;
    }
    label:hover {
        cursor: pointer;
    }
    /* создание в label псевдоэлемента  before со следующими стилями */
    .custom-radio+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 50%;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    /* стили при наведении курсора на радио */
    .custom-radio:not(:disabled):not(:checked)+label:hover::before {
        cursor: pointer;
        border-color: #b3d7ff;
    }
    /* стили для активной радиокнопки (при нажатии на неё) */
    .custom-radio:not(:disabled):active+label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }
    /* стили для радиокнопки, находящейся в состоянии checked */
    .custom-radio:checked+label::before {
        border-color: #2FC1FF;
        background-color: #2FC1FF;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }
    .custom-radio:checked+label {
        color: #6A6A6A;
    }
    /* стили для радиокнопки, находящейся в состоянии disabled */
    .custom-radio:disabled+label::before {
        background-color: #e9ecef;
    }
    .type-select {
        margin: 1.5rem 0 1rem 0;
        width: 80%;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .type-select-checked {
        color: #FFFFFF;
        background: #2FC1FF;
        border: 1px solid #2FC1FF;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .catalog-item {
        margin: 1rem -1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>