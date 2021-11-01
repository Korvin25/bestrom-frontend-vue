<template>
    <footer class="footer flex-row">
        <p>© ЗАО "Бестром" 2021, упаковочное оборудование</p>
        <p><a href="tel:88005557457">8-800-555-74-57</a></p>
        <p>ПРЕСС-ЦЕНТР</p>
    </footer>
    <!-- /.footer -->
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>
    .footer {
        justify-content: flex-start;
    }
    .footer p {
        margin-right: 4rem;
    }
    @media (max-width: 980px) {
        .footer {
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            padding: 0 1rem;
            margin: 1rem 0 5rem 0;
        }
        .footer p {
            margin: 0 0 1rem 0;
        }
    }
</style>