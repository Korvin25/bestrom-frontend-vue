<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')" />
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="/assets/close-image.png" alt="close" />
				<img class="close-mobile" src="/assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>{{ language === 'RU' ? 'Заказать звонок' : 'Request a call' }}</h2>
			<div class="catalog-name flex-row">
				<h2 class="catalog-name-item">{{ nameMachine }}</h2>
				<a href="tel:+78005557457">
					<h2 class="catalog-name-item">+7-800-555-74-57</h2>
				</a>
			</div>
			<section class="form-call flex-column">
				<label for="company">{{ language === 'RU' ? 'Компания' : 'Company' }}</label>
				<input
					id="company"
					v-model="inputCompany"
					type="text"
					class="input"
					:placeholder="language === 'RU' ? 'БЕСТРОМ' : 'BESTROM'" />
				<label for="fio">{{ language === 'RU' ? 'Ф.И.О' : 'Full name' }}</label>
				<input
					id="fio"
					v-model="inputName"
					type="text"
					class="input"
					:placeholder="language === 'RU' ? 'Иван Иванович' : 'Ivan Ivanovich'" />
				<label for="telephone">{{ language === 'RU' ? 'Телефон' : 'Telephone' }}</label>
				<input
					id="telephone"
					v-model="inputTelephone"
					type="text"
					class="input"
					placeholder="89199966203" />
				<label for="email">E-mail</label>
				<input
					id="email"
					v-model="inputEmail"
					type="text"
					class="input"
					placeholder="partner@thedimension.com" />
				<label for="product">{{ language === 'RU' ? 'Продукт' : 'Product' }}</label>
				<input
					id="product"
					v-model="inputProduct"
					type="text"
					class="input"
					:placeholder="language === 'RU' ? 'Фисташки' : 'Pistachio'" />
				<label for="weight">{{ language === 'RU' ? 'Дозировка' : 'Dosage' }}</label>
				<input
					id="weight"
					v-model="inputDosage"
					type="text"
					class="input"
					:placeholder="language === 'RU' ? '100г' : '100g'" />
				<label for="speed">
					{{ language === 'RU' ? 'Требуемая производительность' : 'Required performance' }}
				</label>
				<input
					id="speed"
					v-model="inputPerformance"
					type="text"
					class="input"
					:placeholder="language === 'RU' ? '60 п/м' : '60 p/m'" />
				<label for="comment">{{ language === 'RU' ? 'Комментарий' : 'Comment' }}</label>
				<textarea id="comment" v-model="inputComment" rows="5" class="textarea" />
				<div class="checkbox-container">
					<input id="agreement" v-model="agreement" type="checkbox" />
					<label for="agreement">
						{{ language === 'RU' ? 'Согласен на ' : 'I agree to the ' }}
						<NuxtLink to="/politic">
							{{ language === 'RU' ? 'обработку персональных данных' : 'processing of personal data' }}
						</NuxtLink>
					</label>
				</div>
				<button class="call btn" type="button" :disabled="!agreement" @click="sendPost">
					{{ language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
				<h4 v-if="statusSend.length > 0" class="send-status">{{ statusSend }}</h4>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { usePageStore } from '~/stores/page'

defineEmits(['close'])

defineProps({
	nameMachine: {
		type: String,
		default: '',
	},
})

const appStore = useAppStore()
const pageStore = usePageStore()
const { language } = storeToRefs(appStore)

const statusSend = ref('')
const inputCompany = ref('')
const inputName = ref('')
const inputTelephone = ref('')
const inputEmail = ref('')
const inputProduct = ref('')
const inputDosage = ref('')
const inputPerformance = ref('')
const inputComment = ref('')
const agreement = ref(true)

onMounted(() => {
	pageStore.loadPage(1)
})

const sendPost = async () => {
	if (
		(inputTelephone.value.length > 10 || (inputEmail.value.includes('@') && inputEmail.value.length > 6)) &&
		inputName.value.length > 0 &&
		inputProduct.value.length > 0 &&
		inputCompany.value.length > 0 &&
		inputDosage.value.length > 0 &&
		inputPerformance.value.length > 0
	) {
		try {
			await $fetch(`${appStore.server}forms/`, {
				method: 'POST',
				body: {
					type: `Обратный звонок по машине ${nameMachine}`,
					telephone: inputTelephone.value,
					email: inputEmail.value,
					name: inputName.value,
					other: `Компания: ${inputCompany.value}, Продукт: ${inputProduct.value}, Дозировка: ${inputDosage.value}, Производительность: ${inputPerformance.value}, Комментарий: ${inputComment.value}`,
				},
			})
			statusSend.value = language.value === 'RU' ? 'Заявка успешно отправлена!' : 'Request sent!'
			inputCompany.value = ''
			inputTelephone.value = ''
			inputName.value = ''
			inputEmail.value = ''
			inputProduct.value = ''
			inputDosage.value = ''
			inputPerformance.value = ''
			inputComment.value = ''
		} catch (error: any) {
			statusSend.value = `${language.value === 'RU' ? 'Ошибка отправки заявки!' : 'Send error!'} ${error}`
			console.error(error)
		}
	} else {
		alert(language.value === 'RU' ? 'Проверьте правильность ввода всех полей!' : 'Check all fields!')
	}
}
</script>

<style scoped>
.send-status {
	margin: 0;
	font-weight: normal;
}
a .catalog-name-item {
	font-weight: normal;
}
.form-call {
	margin-top: 1rem;
}
.form-call .input,
.form-call .textarea {
	margin: 0.5rem 0;
}
.call {
	margin: 1rem 0;
	flex-grow: 1;
	width: 100%;
}
.checkbox-container a {
	color: #2fc1ff;
}
@media (max-width: 980px) {
	h2 {
		margin: 0;
		color: #6a6a6a;
	}
	.catalog-name {
		margin: 0.5rem 0;
		flex-wrap: wrap;
	}
	.catalog-name-item {
		width: 100%;
		font-size: 22px;
		color: #2fc1ff;
	}
}
</style>
