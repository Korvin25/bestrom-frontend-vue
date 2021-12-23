<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>
				{{ $store.state.language === 'RU' ? 'Отправьте нам вашу заявку' : 'Send us your application' }}
			</h2>
			<section class="form-call flex-column" action="">
				<label for="company">{{ $store.state.language === 'RU' ? 'Компания' : 'Company' }}</label>
				<input
					id="company"
					v-model="inputCompany"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ' : 'BESTROM'" />
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
				<label for="email">E-mail</label>
				<input
					id="email"
					v-model="inputEmail"
					type="text"
					class="input"
					placeholder="partner@thedimension.com" />
				<p>
					{{
						$store.state.language === 'RU' ? 'Удобный способ связи' : 'Convenient way of communication'
					}}
				</p>
				<div class="call-method flex-row">
					<div
						class="logo"
						:class="inputCommunication === 'WhatsApp' ? 'active' : ''"
						@click="inputCommunication = 'WhatsApp'">
						<img src="../assets/whatsapp.png" alt="whatsapp" />
					</div>
					<div
						class="logo"
						:class="inputCommunication === 'Telegram' ? 'active' : ''"
						@click="inputCommunication = 'Telegram'">
						<img src="../assets/telegram.png" alt="telegram" />
					</div>
					<div
						class="logo"
						:class="inputCommunication === 'Viber' ? 'active' : ''"
						@click="inputCommunication = 'Viber'">
						<img src="../assets/viber.png" alt="viber" />
					</div>
					<div
						class="logo"
						:class="inputCommunication === 'E-Mail' ? 'active' : ''"
						@click="inputCommunication = 'E-Mail'">
						<img src="../assets/email.png" alt="email" />
					</div>
				</div>
				<p>{{ $store.state.language === 'RU' ? 'Прикрепить резюме' : 'Attach resume' }}</p>
				<input id="file" ref="file" type="file" name="file" @change="handleFileUpload" />
				<button class="call btn" @click="sendPost">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
				<h4 v-if="statusSend.length > 0" class="send-status">{{ statusSend }}</h4>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'AppModalJobRespond',
	props: {
		jobName: {
			type: String,
			default: 'Название работы',
		},
	},
	emits: ['close'],
	data() {
		return {
			statusSend: '',
			inputCompany: '',
			inputName: '',
			inputTelephone: '',
			inputEmail: '',
			inputCommunication: '',
			inputFile: '',
		}
	},
	methods: {
		handleFileUpload() {
			this.inputFile = this.$refs.file.files[0]
		},
		sendPost() {
			if (
				(this.inputTelephone.length > 10 ||
					(this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
				this.inputName.length !== 0 &&
				this.inputCompany.length !== 0 &&
				this.inputFile.length !== 0 &&
				this.inputCommunication.length !== 0
			) {
				const formData = new FormData()
				formData.append('type', 'Заявка на вакансию')
				formData.append('telephone', this.inputTelephone)
				formData.append('email', this.inputEmail)
				formData.append('name', this.inputName)
				formData.append(
					'other',
					'Вакансия: ' +
						this.jobName +
						', Компания: ' +
						this.inputCompany +
						', Удобный способ связи: ' +
						this.inputCommunication,
				)
				formData.append('file', this.inputFile)

				axios
					.post(this.$store.state.server + 'forms/', formData)
					.then(() => {
						this.statusSend = 'Заявка успешно отправлена!'
						this.inputCompany = ''
						this.inputTelephone = ''
						this.inputName = ''
						this.inputEmail = ''
						this.inputFile = ''
						this.inputCommunication = ''
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
.form-call {
	margin-top: 1rem;
}
.form-call .input,
.form-call .textarea {
	margin: 0.5rem 0;
}
.call {
	margin: 2rem 0 1rem 0;
	flex-grow: 1;
	width: 100%;
}
.call-method {
	justify-content: flex-start;
	margin: 0 -1rem;
}
.logo {
	transition: all 0.3s;
	cursor: pointer;
	padding: 0;
	margin: 0 1rem;
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background: transparent;
}
.logo.active {
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.logo:hover {
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.send-status {
	margin: 0;
	font-weight: normal;
}
@media (max-width: 980px) {
	h2 {
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
}
</style>
