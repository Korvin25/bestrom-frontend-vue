<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')" />
		<div class="modal-window card-shadow flex-column">
			<button class="close" type="button" @click="$emit('close')">
				<img src="/assets/close-image.png" alt="close" />
			</button>
			<h2>{{ language === 'RU' ? 'Задать вопрос' : 'Ask a question' }}</h2>
			<section class="form-call flex-column">
				<label for="fio">{{ language === 'RU' ? 'Имя' : 'Full name' }}</label>
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
				<label for="comment">{{ language === 'RU' ? 'Вопрос' : 'Question' }}</label>
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
				<button class="call btn" :disabled="!agreement" @click="sendPost">
					{{ language === 'RU' ? 'ОТПРАВИТЬ' : 'TO SEND' }}
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

const appStore = useAppStore()
const pageStore = usePageStore()
const { language } = storeToRefs(appStore)

const statusSend = ref('')
const inputName = ref('')
const inputTelephone = ref('')
const inputEmail = ref('')
const inputComment = ref('')
const agreement = ref(true)

onMounted(() => {
	pageStore.loadPage(1)
})

const sendPost = async () => {
	if (
		(inputTelephone.value.length > 10 || (inputEmail.value.includes('@') && inputEmail.value.length > 6)) &&
		inputName.value.length > 0
	) {
		try {
			await $fetch(`${appStore.server}forms/`, {
				method: 'POST',
				body: {
					type: 'Вопрос',
					telephone: inputTelephone.value,
					email: inputEmail.value,
					name: inputName.value,
					other: `Вопрос: ${inputComment.value}`,
				},
			})
			statusSend.value = language.value === 'RU' ? 'Заявка успешно отправлена!' : 'Request sent!'
			inputTelephone.value = ''
			inputName.value = ''
			inputEmail.value = ''
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
.form-call {
	margin-top: 1rem;
	padding: 0 1rem;
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
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
}
</style>
