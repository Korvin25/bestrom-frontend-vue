<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<div class="title-block">
				<h2 v-if="switchContent">
					{{ $store.state.language === 'RU' ? 'Отправьте нам вашу заявку' : 'Send us your application' }}
				</h2>
				<h2 v-if="!switchContent">
					{{ $store.state.language === 'RU' ? 'Заказ запчастей' : 'Parts order' }}
				</h2>
				<a class="title-block_link" href="tel:+78005557457">
					<h3>+7-800-555-74-57</h3>
				</a>
			</div>
			
			<div class="service-buttons flex-row">
				<button :class="!switchContent ? 'btn-disabled' : 'btn'" @click="switchContent = true">
					{{ $store.state.language === 'RU' ? 'ОТПРАВЬТЕ ЗАЯВКУ' : 'SEND APPLICATION' }}
				</button>
				<button :class="switchContent ? 'btn-disabled' : 'btn'" @click="switchContent = false">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗ ЗАПЧАСТЕЙ' : 'ORDERING SPARE PARTS' }}
				</button>
			</div>

			<!-- Основная форма заявки -->
			<section v-if="switchContent" class="form-call flex-column">
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
				<label for="product">{{ $store.state.language === 'RU' ? 'Продукт' : 'Product' }}</label>
				<input
					id="product"
					v-model="inputProduct"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Фисташки' : 'Pistachio'" />
				<label for="weight">{{ $store.state.language === 'RU' ? 'Дозировка' : 'Dosage' }}</label>
				<input
					id="weight"
					v-model="inputDosage"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? '100г' : '100g'" />
				<label for="speed">{{
					$store.state.language === 'RU' ? 'Требуемая производительность' : 'Required performance'
				}}</label>
				<input
					id="speed"
					v-model="inputPerformance"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? '60 п/м' : '60 p/m'" />
				<!-- <p>
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
					<div
						class="logo-mobile logo"
						:class="inputCommunication === 'Telephone' ? 'active' : ''"
						@click="inputCommunication = 'Telephone'">
						<img src="../assets/mobile.png" alt="menu-item-img" />
					</div>
				</div> -->
				<div class="checkbox-container">
					<input type="checkbox" id="agreement" v-model="agreement" />
					<label for="agreement">
						{{ $store.state.language === 'RU' ? 'Согласен на ' : 'I agree to the ' }}
						<a :href="PAGE_ID[0] ? PAGE_ID[0].politic_filr : ''" target="_blank">{{ $store.state.language === 'RU' ? 'обработку персональных данных' : 'processing of personal data' }}</a>
					</label>
				</div>
				<button class="call btn" @click="sendPost" :disabled="!agreement">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ ЗАЯВКУ' : 'SEND AN APPLICATION' }}
				</button>
				<h4 v-if="statusSend.length > 0" class="send-status">{{ statusSend }}</h4>
			</section>
			
			<!-- Форма заказа запчастей -->
			<section v-if="!switchContent" class="form-call flex-column" action="">
				<label for="company">{{ $store.state.language === 'RU' ? 'Компания' : 'Company' }}</label>
				<input
					id="company"
					v-model="inputCompanyParts"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ' : 'BESTROM'" />
				<label for="fio">{{ $store.state.language === 'RU' ? 'Ф.И.О' : 'Full name' }}</label>
				<input
					id="fio"
					v-model="inputNameParts"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Иван Иванович' : 'Ivan Ivanovich'" />
				<label for="telephone">{{ $store.state.language === 'RU' ? 'Телефон' : 'Telephone' }}</label>
				<input
					id="telephone"
					v-model="inputTelephoneParts"
					type="text"
					class="input"
					placeholder="89199966203" />
				<label for="email">E-mail</label>
				<input
					id="email"
					v-model="inputEmailParts"
					type="text"
					class="input"
					placeholder="partner@thedimension.com" />
				<label for="model">{{
					$store.state.language === 'RU' ? 'Модель оборудования' : 'Equipment model'
				}}</label>
				<input
					id="model"
					v-model="inputModelParts"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ - 420С' : 'BESTROM-420S'" />
				<label for="number-model">{{
					$store.state.language === 'RU' ? 'Заводской номер' : 'Factory number'
				}}</label>
				<input
					id="number-model"
					v-model="inputSerialNumberParts"
					type="text"
					class="input"
					placeholder="420С2801" />

				<p>{{ $store.state.language === 'RU' ? 'Наименование запчасти' : 'Part name' }}</p>
				<div class="flex-row call-inputs">
					<input v-model.trim="inputDetailValue" type="text" class="input" placeholder="0253121" />
					<div class="add-btn" @click="pushInput">
						{{ $store.state.language === 'RU' ? 'Добавить' : 'Add' }}
					</div>
				</div>

				<transition-group name="modal">
					<div v-for="input in inputsDetails" :key="input.id" class="flex-row call-inputs">
						<input type="text" class="input" :value="input.content" readonly />
						<div class="del-btn" @click="removeInput(input.id)">
							{{ $store.state.language === 'RU' ? 'Удалить' : 'Remove' }}
						</div>
					</div>
				</transition-group>

				<p>
					{{
						$store.state.language === 'RU'
							? 'Вложение (Добавьте фото интересующей Вас детали)'
							: 'Attachment (Add a photo of the detail you are interested in)'
					}}
				</p>
				<div class="flex-row call-inputs">
					<input
						id="file"
						ref="file"
						class="input-file"
						type="file"
						name="file"
						@change="handleFileUpload" />
				</div>

				<div class="radio-type flex-row">
					<input
						id="delivery-choice-1"
						v-model="radioCatalogSelect"
						class="custom-radio"
						name="delivery-choice"
						type="radio"
						value="Доставка"
						:checked="radioCatalogSelect === 'Доставка'" />
					<label for="delivery-choice-1">{{
						$store.state.language === 'RU' ? 'Доставка' : 'Delivery'
					}}</label>
					<input
						id="delivery-choice-2"
						v-model="radioCatalogSelect"
						class="custom-radio"
						name="delivery-choice"
						type="radio"
						value="Самовывоз"
						:checked="radioCatalogSelect === 'Самовывоз'" />
					<label for="delivery-choice-2">{{
						$store.state.language === 'RU' ? 'Самовывоз' : 'Self-pickup'
					}}</label>
				</div>
				<input
					v-if="radioCatalogSelect === 'Доставка'"
					id="address"
					v-model="inputAddress"
					type="text"
					class="input"
					:placeholder="
						$store.state.language === 'RU'
							? 'г. Красногорск, Ильинское шоссе, д.15'
							: 'Krasnogorsk, Ilyinskoe highway, 15'
					" />
				<label for="comment">{{ $store.state.language === 'RU' ? 'Комментарий' : 'Comment' }}</label>
				<textarea
					id="comment"
					v-model="inputComment"
					class="textarea"
					contenteditable="true"></textarea>
				<div class="checkbox-container">
					<input type="checkbox" id="agreementParts" v-model="agreementParts" />
					<label for="agreementParts">
						{{ $store.state.language === 'RU' ? 'Согласен на ' : 'I agree to the ' }}
						<a :href="PAGE_ID[0] ? PAGE_ID[0].politic_filr : ''" target="_blank">{{ $store.state.language === 'RU' ? 'обработку персональных данных' : 'processing of personal data' }}</a>
					</label>
				</div>
				<button class="call btn" @click="sendPostParts" :disabled="!agreementParts">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ' : 'SEND' }}
				</button>
				<h4 v-if="statusSendParts.length > 0" class="send-status">{{ statusSendParts }}</h4>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AppModalMenuApplication',
	emits: ['close'],
	data() {
		return {
			statusSend: '',
			statusSendParts: '',
			switchContent: true,
			radioCatalogSelect: 'Доставка',
			inputDetailValue: '',
			inputFileName: '',
			inputsDetails: [],
			inputFile: '',
			
			// Данные для основной формы
			inputCompany: '',
			inputName: '',
			inputTelephone: '',
			inputEmail: '',
			inputProduct: '',
			inputDosage: '',
			inputPerformance: '',
			// inputCommunication: '',
			
			// Данные для формы запчастей
			inputCompanyParts: '',
			inputNameParts: '',
			inputTelephoneParts: '',
			inputEmailParts: '',
			inputModelParts: '',
			inputSerialNumberParts: '',
			inputAddress: '',
			inputComment: '',
			agreement: false,
			agreementParts: false,
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
		handleFileUpload() {
			this.inputFile = this.$refs.file.files[0]
		},
		sendPost() {
			if (
				(this.inputTelephone.length > 10 ||
					(this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
				this.inputName.length !== 0 &&
				this.inputProduct.length !== 0 &&
				this.inputCompany.length !== 0 &&
				this.inputDosage.length !== 0 &&
				// this.inputCommunication.length !== 0 &&
				this.inputPerformance.length !== 0
			) {
				axios
					.post(this.$store.state.server + 'forms/', {
						type: 'Заявка',
						telephone: this.inputTelephone,
						email: this.inputEmail,
						name: this.inputName,
						other:
							'Компания: ' +
							this.inputCompany +
							', Продукт: ' +
							this.inputProduct +
							', Дозировка: ' +
							this.inputDosage +
							', Производительность: ' +
							this.inputPerformance
							// ', Удобный способ связи: ' +
							// this.inputCommunication,
					})
					.then(() => {
						this.inputCompany = ''
						this.inputTelephone = ''
						this.inputName = ''
						this.inputEmail = ''
						this.inputProduct = ''
						this.inputDosage = ''
						this.inputPerformance = ''
						// this.inputCommunication = ''
						this.statusSend = 'Заявка успешно отправлена!'
					})
					.catch((error) => {
						this.statusSend = 'Ошибка отправки заявки! Ошибка: ' + error
						console.log(error)
					})
			} else {
				alert('Проверьте правильность ввода всех полей!')
			}
		},
		sendPostParts() {
			if (
				(this.inputTelephoneParts.length > 10 ||
					(this.inputEmailParts.includes('@') && this.inputEmailParts.length > 6)) &&
				this.inputNameParts.length !== 0 &&
				this.inputCompanyParts.length !== 0 &&
				this.inputModelParts.length !== 0 &&
				this.inputSerialNumberParts.length !== 0
			) {
				if (this.radioCatalogSelect === 'Самовывоз') {
					const formData = new FormData()
					formData.append('type', 'Заказ запчастей')
					formData.append('telephone', this.inputTelephoneParts)
					formData.append('email', this.inputEmailParts)
					formData.append('name', this.inputNameParts)
					formData.append(
						'other',
						'Компания: ' +
							this.inputCompanyParts +
							', Модель оборудования: ' +
							this.inputModelParts +
							', Заводской номер: ' +
							this.inputSerialNumberParts +
							', Наименование запчастей: ' +
							this.inputsDetails
								.map(function (item) {
									return item.content
								})
								.join(' ') +
							', ' +
							this.radioCatalogSelect +
							', Комментарий: ' +
							this.inputComment,
					)
					if (this.inputFile) {
						formData.append('file', this.inputFile)
					}
					
					axios
						.post(this.$store.state.server + 'forms/', formData)
						.then(() => {
							this.statusSendParts = 'Заявка успешно отправлена!'
							this.inputCompanyParts = ''
							this.inputTelephoneParts = ''
							this.inputNameParts = ''
							this.inputEmailParts = ''
							this.inputFile = ''
							this.inputModelParts = ''
							this.inputSerialNumberParts = ''
							this.inputsDetails = []
							this.inputComment = ''
						})
						.catch((error) => {
							this.statusSendParts = 'Ошибка отправки заявки! Ошибка: ' + error
							console.log(error)
						})
				} else {
					if (this.inputAddress.length !== 0) {
						const formData = new FormData()
						formData.append('type', 'Заказ запчастей')
						formData.append('telephone', this.inputTelephoneParts)
						formData.append('email', this.inputEmailParts)
						formData.append('name', this.inputNameParts)
						formData.append(
							'other',
							'Компания: ' +
								this.inputCompanyParts +
								', Модель оборудования: ' +
								this.inputModelParts +
								', Заводской номер: ' +
								this.inputSerialNumberParts +
								', Наименование запчастей: ' +
								this.inputsDetails
									.map(function (item) {
										return item.content
									})
									.join(' ') +
								', ' +
								this.radioCatalogSelect +
								', Адрес: ' +
								this.inputAddress +
								', Комментарий: ' +
								this.inputComment,
						)
						if (this.inputFile) {
							formData.append('file', this.inputFile)
						}

						axios
							.post(this.$store.state.server + 'forms/', formData)
							.then(() => {
								this.statusSendParts = 'Заявка успешно отправлена!'
								this.inputCompanyParts = ''
								this.inputTelephoneParts = ''
								this.inputNameParts = ''
								this.inputEmailParts = ''
								this.inputFile = ''
								this.inputModelParts = ''
								this.inputSerialNumberParts = ''
								this.inputsDetails = []
								this.inputAddress = ''
								this.inputComment = ''
							})
							.catch((error) => {
								this.statusSendParts = 'Ошибка отправки заявки! Ошибка: ' + error
								console.log(error)
							})
					} else {
						alert(this.$store.state.language === 'RU' ? 'Введите адрес доставки!' : 'Enter delivery address!')
					}
				}
			} else {
				alert(this.$store.state.language === 'RU' ? 'Проверьте правильность ввода всех полей!' : 'Check the correctness of all fields!')
			}
		},
		pushInput() {
			if (this.inputDetailValue.trim() !== '') {
				this.inputsDetails.push({
					id: this.inputsDetails.length,
					content: this.inputDetailValue,
				})
			}
			this.inputDetailValue = ''
		},
		removeInput(id) {
			for (const input of this.inputsDetails) {
				if (input.id === id) {
					this.inputsDetails.splice(this.inputsDetails.indexOf(input), 1)
				}
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
.title-block {
	display: flex;
	flex-wrap: wrap;
}
.title-block a {
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.title-block a h3 {
	margin-top: 1rem;
	align-self: center;
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
	margin: 1rem 0 1rem 0;
	flex-grow: 1;
	width: 100%;
}
.checkbox-container a {
	color: #2fc1ff;
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
.logo.mobile {
	display: none;
}
.logo:hover {
	filter: drop-shadow(0 0 12px #2fc1ff);
}

/* Стили для формы запчастей */
.service-buttons {
	margin: 1rem -1rem;
}
.service-buttons .btn {
	transition: all 0.3s;
	flex-grow: 1;
	width: 100%;
	margin: 0 1rem;
	box-shadow: inset 0 1px 10px 1px rgba(0, 0, 0, 0.25);
	min-height: 3.5rem;
}
.btn-disabled {
	flex-grow: 1;
	width: 100%;
	margin: 0 1rem;
	transition: all 0.3s;
	background: #b8b8b8;
	min-height: 3.5rem;
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
	color: #ffffff;
}
.btn-disabled:hover {
	cursor: pointer;
	transition: all 0.3s;
	background: rgba(47, 193, 255, 0.5);
}
.form-call p {
	margin: 0;
}
.call-inputs {
	align-items: center;
}
.call-inputs input {
	flex-grow: 1;
	width: 100%;
}
.input-file {
	margin: 0.5rem 0;
}
.add-btn,
.del-btn {
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
	color: #ffffff;
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

@media (max-width: 1403px) {
	.title-block a {
		display: none;
	}
}
@media (max-width: 980px) {
	h2 {
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
	.call-method {
		justify-content: flex-start;
		margin: 0 -0.5rem;
	}
	.logo {
		margin: 0 0.5rem;
	}
	.logo-mobile {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0.5rem;
		width: 3rem;
		height: 3rem;
		background: #6a6a6a;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
		border-radius: 100%;
	}
	.logo-mobile:hover {
		transition: all 0.4s;
		cursor: pointer;
		background: rgba(47, 193, 255, 0.9);
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