<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>{{ $store.state.language === 'RU' ? 'Заказать звонок' : 'Order a call' }}</h2>
			<section class="form-call flex-column">
				<label for="fio">{{ $store.state.language === 'RU' ? 'Ф.И.О' : 'Full name' }}</label>
				<input
					id="fio"
					v-model="inputName"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Иван Иванович' : 'Ivan Ivanovich'" />
				<label for="telephone">{{ $store.state.language === 'RU' ? 'Телефон' : 'Telephone' }}</label>
				<input
					id="telephone"
					v-model="inputTelephone"
					type="text"
					class="input"
					placeholder="89199966203" />
				<div class="checkbox-container">
					<input type="checkbox" id="agreement" v-model="agreement" />
					<label for="agreement">
						{{ $store.state.language === 'RU' ? 'Согласен на ' : 'I agree to the ' }}
						<a :href="PAGE_ID[0] ? PAGE_ID[0].politic_filr : ''" target="_blank">{{ $store.state.language === 'RU' ? 'обработку персональных данных' : 'processing of personal data' }}</a>
					</label>
				</div>
				<button class="call btn" @click="sendPost" :disabled="!agreement">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ' : 'TO SEND' }}
				</button>
				<h4 v-if="statusSend.length > 0" class="send-status">{{ statusSend }}</h4>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AppModalMenuContactsCall',
	emits: ['close'],
	data() {
		return {
			statusSend: '',
			inputName: '',
			inputTelephone: '',
			agreement: false,
		}
	},
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(1)
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		sendPost() {
			if (
				this.inputTelephone.length > 10 &&
				this.inputName.length !== 0
			) {
				axios
					.post(this.$store.state.server + 'forms/', {
						type: 'Обратный звонок',
						telephone: this.inputTelephone,
						name: this.inputName,
						other: '',
					})
					.then(() => {
						this.statusSend = 'Заявка успешно отправлена!'
						this.inputTelephone = ''
						this.inputName = ''
					})
					.catch((error) => {
						this.statusSend = 'Ошибка отправки заявки! Ошибка: ' + error
						console.log(error)
					})
			} else {
				alert('Проверьте правильность ввода всех полей!')
			}
		},
	},
}
</script>

<style scoped>
.send-status {
	margin: 0;
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
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
}
</style>
