<template>
    <div class="details-select-settings flex-column">
        <div class="details-select-settings-item">
            <h4>Размер пакета</h4>
            <p>длина (мин.-макс.) – 250-450 мм, ширина (мин.-макс.) – 150-350 мм, макс. масса - 10 кг</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Производительность</h4>
            <p>при объёме пакета 2.5л, не более: 50 мех.циклов, при объёме пакета 5л, не более: 45 мех.циклов, при объёме пакета 10, не более: 35 мех.циклов</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Давление сжатого воздуха</h4>
            <p>0,6 Мпа</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Расход сжатого воздуха</h4>
            <p>до 1200 л/мин</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Габаритные размеры</h4>
            <p>1810х2100х2600/3800 (с дозатором) мм</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Тип пленки</h4>
            <p>полиэтилен</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Размеры рулона пленки</h4>
            <p>Ширина, не более - 730 мм</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Масса рулона не более</h4>
            <p>80кг</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Наружный диаметр рулона не более</h4>
            <p>450мм</p>
        </div>
        <div class="details-select-settings-item">
            <h4>Внутренний диаметр рулона не более</h4>
            <p>76мм</p>
        </div>
    </div>
    <!-- /.details-select-settings -->
</template>

<script>
    export default {
        name: "appDetailsSelectSettings"
    }
</script>

<style scoped>
    .details-select-settings {
        margin: 2rem 1rem 0 1rem;
        height: 25rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .details-select-settings-item {
        width: 15rem;
    }
    .details-select-settings-item h4 {
        margin: 1rem 0;
    }
    @media (max-width: 980px) {
        .details-select-settings {
            flex-direction: column;
            margin: 1rem 0.5rem;
            height: auto;
            width: 100%;
        }
        .details-select-settings-item {
            width: 100%;
        }
        .details-select-settings-item h4 {
            font-weight: 600;
            font-size: 12px;
            margin: 0.5rem 0;
         }
        .details-select-settings-item p {
            margin: 0.5rem 0;
        }
    }
</style>