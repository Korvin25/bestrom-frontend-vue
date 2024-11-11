<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2 v-if="switchContent">
				{{ $store.state.language === 'RU' ? 'Сервисное обслуживание' : 'Service maintenance' }}
			</h2>
			<h2 v-if="!switchContent">
				{{ $store.state.language === 'RU' ? 'Заказ запчастей' : 'Parts order' }}
			</h2>
			<div class="service-buttons flex-row">
				<button :class="!switchContent ? 'btn-disabled' : 'btn'" @click="switchContent = true">
					{{ $store.state.language === 'RU' ? 'ВЫЗОВ СПЕЦИАЛИСТА' : 'CALL A SPECIALIST' }}
				</button>
				<button :class="switchContent ? 'btn-disabled' : 'btn'" @click="switchContent = false">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗ ЗАПЧАСТЕЙ' : 'ORDERING SPARE PARTS' }}
				</button>
			</div>

			<!-- Call to specialist -->
			<section v-if="switchContent" class="form-call flex-column" action="">
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
				<label for="model">{{
					$store.state.language === 'RU' ? 'Модель оборудования' : 'Equipment model'
				}}</label>
				<input
					id="model"
					v-model="inputModel"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ - 420С' : 'BESTROM-420S'" />

				<label for="number-model">{{
					$store.state.language === 'RU' ? 'Заводской номер' : 'Factory number'
				}}</label>
				<input
					id="number-model"
					v-model="inputSerialNumber"
					type="text"
					class="input"
					placeholder="420С2801" />

				<p>{{ $store.state.language === 'RU' ? 'Вид обслуживания' : 'Service type' }}</p>
				<div class="__select" :data-state="active ? 'active' : ''" @click="active = !active">
					<div :class="active ? 'active' : ''" class="__select__title">
						{{ inputServiceType }}
					</div>
					<div class="__select__content">
						<input id="singleSelect" class="__select__input" type="radio" name="singleSelect" />
						<label for="singleSelect" class="__select__label"></label>
						<input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked />
						<label
							for="singleSelect0"
							class="__select__label"
							@click="
								selectOption(
									$store.state.language === 'RU' ? 'Пуско-наладочные работы' : 'Commissioning works',
								)
							"
							>{{
								$store.state.language === 'RU' ? 'Пуско-наладочные работы' : 'Commissioning works'
							}}</label
						>
						<input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
						<label
							for="singleSelect1"
							class="__select__label"
							@click="
								selectOption(
									$store.state.language === 'RU' ? 'Гарантийное обслуживание' : 'Warranty service',
								)
							"
							>{{
								$store.state.language === 'RU' ? 'Гарантийное обслуживание' : 'Warranty service'
							}}</label
						>
						<input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
						<label
							for="singleSelect2"
							class="__select__label"
							@click="
								selectOption(
									$store.state.language === 'RU' ? 'Сервисное обслуживание' : 'Service maintenance',
								)
							"
							>{{
								$store.state.language === 'RU' ? 'Сервисное обслуживание' : 'Service maintenance'
							}}</label
						>
						<input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
						<label
							for="singleSelect3"
							class="__select__label"
							@click="selectOption($store.state.language === 'RU' ? 'Другое' : 'Other')"
							>{{ $store.state.language === 'RU' ? 'Другое' : 'Other' }}</label
						>
					</div>
				</div>

				<label for="date">{{
					$store.state.language === 'RU'
						? 'Желаемая дата прибытия специалиста'
						: 'Desired date of arrival of the specialist'
				}}</label>
				<input
					id="date"
					v-model="inputDate"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Сегодня' : 'Today'" />
				<button class="call btn" @click="sendPostSpecialist">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ' : 'SEND' }}
				</button>
				<h4 v-if="statusSendSpecialist.length > 0" class="send-status">{{ statusSendSpecialist }}</h4>
			</section>

			<!-- Ordering spare parts -->
			<section v-if="!switchContent" class="form-call flex-column" action="">
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
				<label for="model">{{
					$store.state.language === 'RU' ? 'Модель оборудования' : 'Equipment model'
				}}</label>
				<input
					id="model"
					v-model="inputModel"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ - 420С' : 'BESTROM-420S'" />
				<label for="number-model">{{
					$store.state.language === 'RU' ? 'Заводской номер' : 'Factory number'
				}}</label>
				<input
					id="number-model"
					v-model="inputSerialNumber"
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
				<div id="comment" class="textarea" contenteditable="true"></div>
				<button class="call btn" @click="sendPostParts">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ' : 'SEND' }}
				</button>
				<h4 v-if="statusSendParts.length > 0" class="send-status">{{ statusSendParts }}</h4>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'AppModalMenuService',
	emits: ['close'],
	data() {
		return {
			statusSendSpecialist: '',
			statusSendParts: '',
			switchContent: true,
			active: false,
			radioCatalogSelect: 'Доставка',
			inputServiceType:
				this.$store.state.language === 'RU' ? 'Пуско-наладочные работы' : 'Commissioning works',
			inputDetailValue: '',
			inputFileName: '',
			inputsDetails: [],
			inputFile: '',
			inputCompany: '',
			inputName: '',
			inputTelephone: '',
			inputEmail: '',
			inputModel: '',
			inputDate: '',
			inputComment: '',
			inputSerialNumber: '',
			inputAddress: '',
		}
	},
	methods: {
		handleFileUpload() {
			this.inputFile = this.$refs.file.files[0]
		},
		sendPostParts() {
			if (
				(this.inputTelephone.length > 10 ||
					(this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
				this.inputName.length !== 0 &&
				this.inputCompany.length !== 0 &&
				this.inputFile.length !== 0 &&
				this.inputModel.length !== 0 &&
				this.inputSerialNumber.length !== 0 &&
				this.inputsDetails.length !== 0
			) {
				if (this.radioCatalogSelect === 'Самовывоз') {
					const formData = new FormData()
					formData.append('type', 'Заказ запчастей')
					formData.append('telephone', this.inputTelephone)
					formData.append('email', this.inputEmail)
					formData.append('name', this.inputName)
					formData.append(
						'other',
						'Компания: ' +
							this.inputCompany +
							', Модель оборудования: ' +
							this.inputModel +
							', Заводской номер: ' +
							this.inputSerialNumber +
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
					formData.append('file', this.inputFile)

					axios
						.post(this.$store.state.server + 'forms/', formData)
						.then(() => {
							this.statusSendParts = 'Заявка успешно отправлена!'
							this.inputCompany = ''
							this.inputTelephone = ''
							this.inputName = ''
							this.inputEmail = ''
							this.inputFile = ''
							this.inputModel = ''
							this.inputSerialNumber = ''
							this.inputsDetails = []
							this.inputComment = ''
						})
						.catch((error) => {
							this.statusSend = 'Ошибка отправки заявки! Ошибка: ' + error
							console.log(error)
						})
				} else {
					if (this.inputAddress.length !== 0) {
						const formData = new FormData()
						formData.append('type', 'Заказ запчастей')
						formData.append('telephone', this.inputTelephone)
						formData.append('email', this.inputEmail)
						formData.append('name', this.inputName)
						formData.append(
							'other',
							'Компания: ' +
								this.inputCompany +
								', Модель оборудования: ' +
								this.inputModel +
								', Заводской номер: ' +
								this.inputSerialNumber +
								', Наименование запчастей: ' +
								this.inputsDetails
									.map(function (item) {
										return item.content
									})
									.join(' ') +
								', ' +
								this.radioCatalogSelect +
								this.inputAddress +
								', Комментарий: ' +
								this.inputComment,
						)
						formData.append('file', this.inputFile)

						axios
							.post(this.$store.state.server + 'forms/', formData)
							.then(() => {
								this.statusSendParts = 'Заявка успешно отправлена!'
								this.inputCompany = ''
								this.inputTelephone = ''
								this.inputName = ''
								this.inputEmail = ''
								this.inputFile = ''
								this.inputModel = ''
								this.inputSerialNumber = ''
								this.inputsDetails = []
								this.inputAddress = ''
								this.inputComment = ''
							})
							.catch((error) => {
								this.statusSend = 'Ошибка отправки заявки! Ошибка: ' + error
								console.log(error)
							})
					} else {
						alert('Введите адрес доставки!')
					}
				}
			} else {
				alert('Проверьте правильность ввода всех полей!')
			}
		},
		sendPostSpecialist() {
			if (
				(this.inputTelephone.length > 10 ||
					(this.inputEmail.includes('@') && this.inputEmail.length > 6)) &&
				this.inputName.length !== 0 &&
				this.inputCompany.length !== 0 &&
				this.inputModel.length !== 0 &&
				this.inputDate.length !== 0
			) {
				axios
					.post(this.$store.state.server + 'forms/', {
						type: 'Вызов специалиста',
						telephone: this.inputTelephone,
						email: this.inputEmail,
						name: this.inputName,
						other:
							'Компания: ' +
							this.inputCompany +
							', Модель оборудования: ' +
							this.inputModel +
							', Заводской номер: ' +
							this.inputSerialNumber +
							', Вид обслуживания: ' +
							this.inputServiceType +
							', Желаемая дата прибытия специалиста: ' +
							this.inputDate,
					})
					.then(() => {
						this.statusSendSpecialist = 'Заявка успешно отправлена!'
						this.inputCompany = ''
						this.inputTelephone = ''
						this.inputName = ''
						this.inputEmail = ''
						this.inputModel = ''
						this.inputSerialNumber = ''
						this.inputDate = ''
					})
					.catch((error) => {
						this.statusSendSpecialist = 'Ошибка отправки заявки! Ошибка: ' + error
						console.log(error)
					})
			} else {
				alert('Проверьте правильность ввода всех полей!')
			}
		},
		selectOption(item) {
			this.inputServiceType = item
			this.active = !this.active
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
.form-call .input,
.form-call .textarea {
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

.__select {
	position: relative;
	margin: 0.5rem 0;
	box-shadow: inset 0 0 10px -4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	border: none;
}
.__select[data-state='active'] .__select__title::before {
	transform: translate(-3px, -50%) rotate(-45deg);
}
.__select[data-state='active'] .__select__title::after {
	transform: translate(3px, -50%) rotate(45deg);
}
.__select[data-state='active'] .__select__content {
	opacity: 1;
}
.__select[data-state='active'] .__select__label + .__select__input + .__select__label {
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
.__select__title::before,
.__select__title::after {
	content: '';
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
	border-color: #2fc1ff;
}
.__select__title:hover::before,
.__select__title:hover::after {
	background-color: #2fc1ff;
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
	background-color: #2fc1ff !important;
	color: #ffffff;
}

@media (max-width: 980px) {
	h2 {
		align-self: center;
		text-align: center;
		color: #6a6a6a;
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
	.__select__title {
		align-items: normal;
	}
}
</style>
