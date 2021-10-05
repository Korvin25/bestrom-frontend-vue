<template>
    <div class="modal-background">
        <div @click="$emit('close')" class="close-background"></div>
        <div class="modal-window card-shadow flex-column">
            <div @click="$emit('close')" class="close">
                <img class="close-desktop" src="../assets/close-image.png" alt="close">
                <img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close">
            </div>
            <h2 v-if="switchContent">Сервисное обслуживание</h2>
            <h2 v-if="!switchContent">Заказ запчастей</h2>
            <div class="service-buttons flex-row">
                <button @click="switchContent = true" :class="!switchContent ? 'btn-disabled' : 'btn'">ВЫЗОВ СПЕЦИАЛИСТА</button>
                <button @click="switchContent = false" :class="switchContent ? 'btn-disabled' : 'btn'">ЗАКАЗ ЗАПЧАСТЕЙ</button>
            </div>

            <!-- Call to specialist -->
            <form v-if="switchContent" class="form-call flex-column" action="">
                <label for="company-call">Компания</label>
                <input id="company-call" type="text" class="input" placeholder="БЕСТРОМ">
                <label for="fio-call">Ф.И.О</label>
                <input id="fio-call" type="text" class="input" placeholder="Иван Иванович">
                <label for="telephone-call">Телефон</label>
                <input id="telephone-call" type="text" class="input" placeholder="89199966203">
                <label for="email-call">E-mail</label>
                <input id="email-call" type="text" class="input" placeholder="partner@thedimension.com">
                <label for="model-call">Модель оборудования</label>
                <input id="model-call" type="text" class="input" placeholder="БЕСТРОМ - 420С">
                <label for="number-model">Заводской номер</label>
                <input id="number-model" type="text" class="input" placeholder="420С2801">

                <p>Наименование запчасти</p>
                <div class="flex-row call-inputs">
                    <input type="text" class="input" placeholder="0253121" v-model.trim="inputDetailValue">
                    <div @click="pushInput" class="add-btn">Добавить</div>
                </div>

                <transition-group name="modal">
                <div v-for="input in this.inputsDetails" :key="input.id" class="flex-row call-inputs">
                    <input type="text" class="input" :value="input.content" readonly>
                    <div @click="removeInput(input.id)" class="del-btn">Удалить</div>
                </div>
                </transition-group>

                <p>Вложение (Добавте фото интересующей Вас детали)</p>
                <div class="flex-row call-inputs">
                    <input type="text" class="input" placeholder="File name" v-model.trim="inputFileName">
                    <div @click="pushInputFile" class="add-btn">Добавить</div>
                </div>

                <transition-group name="modal">
                    <div v-for="input in this.inputsFile" :key="input.id" class="flex-row call-inputs">
                        <input type="text" class="input" :value="input.content" readonly>
                        <div @click="removeInputFile(input.id)" class="del-btn">Удалить</div>
                    </div>
                </transition-group>

                <div class="radio-type flex-row">
                    <input class="custom-radio"
                           name="delivery-choice"
                           id="delivery-choice-1"
                           type="radio"
                           :value="1" checked>
                    <label for="delivery-choice-1">Доставка</label>
                    <input class="custom-radio"
                           name="delivery-choice"
                           id="delivery-choice-2"
                           type="radio"
                           :value="2">
                    <label for="delivery-choice-2">Самовывоз</label>
                </div>
                <input id="address" type="text" class="input" placeholder="г. Красногорск, Ильинское шоссе, д.15,">
                <label for="comment">Комментарий</label>
                <textarea id="comment" rows="5" class="textarea"/>
                <button class="call btn">ОТПРАВИТЬ</button>
            </form>

            <!-- Ordering spare parts -->
            <form v-if="!switchContent" class="form-call flex-column" action="">
                <label for="company">Компания</label>
                <input id="company" type="text" class="input" placeholder="БЕСТРОМ">
                <label for="fio">Ф.И.О</label>
                <input id="fio" type="text" class="input" placeholder="Иван Иванович">
                <label for="telephone">Телефон</label>
                <input id="telephone" type="text" class="input" placeholder="89199966203">
                <label for="email">E-mail</label>
                <input id="email" type="text" class="input" placeholder="partner@thedimension.com">
                <label for="model">Модель оборудования</label>
                <input id="model" type="text" class="input" placeholder="БЕСТРОМ - 420С">

                <p>Вид обслуживания</p>
                <div @click="active = !active" class="__select" :data-state="active ? 'active' : ''">
                    <div :class="active ? 'active' : ''" class="__select__title">{{ this.selectItem }}</div>
                    <div class="__select__content">
                        <input id="singleSelect" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect" class="__select__label"></label>
                        <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked/>
                        <label @click="selectOption('Пуско-наладочные работы')" for="singleSelect0" class="__select__label">Пуско-наладочные работы</label>
                        <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
                        <label @click="selectOption('Гарантийное обслуживание')" for="singleSelect1" class="__select__label">Гарантийное обслуживание</label>
                        <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                        <label @click="selectOption('Сервисное обслуживание')" for="singleSelect2" class="__select__label">Сервисное обслуживание</label>
                        <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
                        <label @click="selectOption('Другое')" for="singleSelect3" class="__select__label">Другое</label>
                    </div>
                </div>

                <label for="date">Желаемая дата прибытия специалиста</label>
                <input id="date" type="text" class="input" placeholder="Сегодня">
                <button class="call btn">ОТПРАВИТЬ</button>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                switchContent: true,
                active: false,
                selectItem: 'Пуско-наладочные работы',
                inputDetailValue: '',
                inputFileName: '',
                inputsDetails: [],
                inputsFile: []
            }
        },
        methods: {
            selectOption(item) {
                this.selectItem = item
                this.active = !this.active
            },
            pushInput() {
                if (this.inputDetailValue.trim() !== '') {
                    this.inputsDetails.push({
                        id: this.inputsDetails.length,
                        content: this.inputDetailValue
                    })
                }
                this.inputDetailValue = ''
            },
            removeInput(id) {
                for (let input of this.inputsDetails) {
                    if (input.id === id) {
                        this.inputsDetails.splice(this.inputsDetails.indexOf(input), 1)
                    }
                }
            },
            pushInputFile() {
                if (this.inputFileName.trim() !== '') {
                    this.inputsFile.push({
                        id: this.inputsFile.length,
                        content: this.inputFileName
                    })
                }
                this.inputFileName = ''
            },
            removeInputFile(id) {
                for (let input of this.inputsFile) {
                    if (input.id === id) {
                        this.inputsFile.splice(this.inputsFile.indexOf(input), 1)
                    }
                }
            }
        },
        name: "appModalMenuService"
    }
</script>

<style scoped>
    .service-buttons {
        margin: 1rem -1rem;
    }
        .service-buttons .btn {
            transition: all .3s;
            flex-grow: 1;
            width: 100%;
            margin: 0 1rem;
            box-shadow: inset 0 1px 10px 1px rgba(0, 0, 0, 0.25);
            min-height: 4rem;
        }
    .btn-disabled {
        flex-grow: 1;
        width: 100%;
        margin: 0 1rem;
        transition: all .3s;
        background: #B8B8B8;
        min-height: 4rem;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 6px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 142%;
        letter-spacing: 0.005em;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: #FFFFFF;
    }
    .btn-disabled:hover {
        cursor: pointer;
        transition: all .3s;
        background: rgba(47, 193, 255, 0.5);
    }
    .form-call p {
        margin: 0;
    }
    .form-call .input, .form-call .textarea {
        margin: 0.5rem 0;
    }
    .call {
        margin: 1rem 0;
        flex-grow: 1;
        width: 100%;
    }
    .call-inputs {
        align-items: center;
    }
    .call-inputs input {
        flex-grow: 1;
    }
    .add-btn, .del-btn {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        font-weight: normal;
        min-height: 1rem;
        padding: 0 1rem;
        height: 2rem;
        margin-left: 1rem;
        color: #FFFFFF;
        border-radius: 6px;
    }
    .add-btn {
        background-color: #4cc4ff;
    }
    .del-btn {
        background-color: #ff5454;
    }
    .radio-type {
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin: 0.5rem 0;
    }
    .radio-type label {
        font-weight: normal;
        font-size: 1rem;
    }


    .__select {
        position: relative;
        margin: 0.5rem 0;
        box-shadow: inset 0 0 10px -4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border: none;
    }
    .__select[data-state=active] .__select__title::before {
        transform: translate(-3px, -50%) rotate(-45deg);
    }
    .__select[data-state=active] .__select__title::after {
        transform: translate(3px, -50%) rotate(45deg);
    }
    .__select[data-state=active] .__select__content {
        opacity: 1;
    }
    .__select[data-state=active] .__select__label + .__select__input + .__select__label {
        max-height: 2rem;
        border-top-width: 1px;
    }
    .__select__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
    }
    .__select__title::before, .__select__title::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 16px;
        display: block;
        width: 10px;
        height: 2px;
        transition: all 0.3s ease-out;
        background-color: #333333;
        transform: translate(-3px, -50%) rotate(45deg);
    }
    .__select__title::after {
        transform: translate(3px, -50%) rotate(-45deg);
    }
    .__select__title:hover {
        border-color: #2FC1FF;
    }
    .__select__title:hover::before, .__select__title:hover::after {
        background-color: #2FC1FF;
    }
    .__select__content {
        position: absolute;
        top: 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #ffffff;
        border-radius: 6px;
        border: none;
        box-shadow: inset 0 0 10px -4px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease-out;
        opacity: 0;
        z-index: 8;
    }
    .__select__input {
        display: none;
    }
    .__select__input:checked + label {
        background-color: #dedede;
    }
    .__select__input:disabled + label {
        opacity: 0.6;
        pointer-events: none;
    }
    .__select__label {
        display: flex;
        align-items: center;
        height: 2rem;
        max-height: 0;
        padding: 0 1rem;
        transition: all 0.2s ease-out;
        cursor: pointer;
        overflow: hidden;
    }
    .__select__label + input + .__select__label {
        border-top: 0 solid #c7ccd160;
    }
    .__select__label:hover {
        background-color: #2FC1FF !important;
        color: #ffffff;
    }

    @media (max-width: 980px) {
        h2 {
            align-self: center;
            text-align: center;
            color: #6A6A6A;
        }
        .service-buttons {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 0 1rem 0;
        }
           .service-buttons .btn {
            font-size: 16px;
            margin: 0.5rem 1rem;
            min-height: 3.5rem;
        }
        .btn-disabled {
            font-size: 16px;
            min-height: 3.5rem;
            margin: 0.5rem 1rem;
        }
    }
</style>