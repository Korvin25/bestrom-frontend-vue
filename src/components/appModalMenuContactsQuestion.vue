<template>
    <div class="modal-background">
        <div @click="$emit('close')" class="close-background"></div>
        <div class="modal-window card-shadow flex-column">
            <div @click="$emit('close')" class="close">
                <img class="close-desktop" src="../assets/close-image.png" alt="close">
                <img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close">
            </div>
            <h2>Задать вопрос</h2>
            <form class="form-call flex-column" action="">
                <label for="company">Компания</label>
                <input id="company" type="text" class="input" placeholder="БЕСТРОМ">
                <label for="fio">Ф.И.О</label>
                <input id="fio" type="text" class="input" placeholder="Иван Иванович">
                <label for="telephone">Телефон</label>
                <input id="telephone" type="text" class="input" placeholder="89199966203">
                <label for="email">E-mail</label>
                <input id="email" type="text" class="input" placeholder="partner@thedimension.com">
                <label for="product">Продукт</label>
                <input id="product" type="text" class="input" placeholder="Фисташки">
                <label for="weight">Дозировка</label>
                <input id="weight" type="text" class="input" placeholder="100г">
                <label for="speed">Требуемая производительность</label>
                <input id="speed" type="text" class="input" placeholder="60 п/м">
                <label for="comment">Комментарий</label>
                <textarea id="comment" rows="5" class="textarea"/>
                <button class="call btn">ОТПРАВИТЬ</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "appModalMenuContactsQuestion"
    }
</script>

<style scoped>
    .form-call {
        margin-top: 1rem;
        padding: 0rem 1rem;
    }
    .form-call .input, .form-call .textarea {
        margin: 0.5rem 0;
    }
    .call {
        margin: 1rem 0;
        flex-grow: 1;
        width: 100%;
    }
        .call.btn {
            margin: 0;
        }
    @media (max-width: 980px) {
        h2 {
            align-self: center;
            text-align: center;
            color: #6A6A6A;
        }
    }
</style>