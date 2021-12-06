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
			<form class="form-call flex-column" action="">
				<label for="company">{{ $store.state.language === 'RU' ? 'Компания' : 'Company' }}</label>
				<input
					id="company"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'БЕСТРОМ' : 'BESTROM'" />
				<label for="fio">{{ $store.state.language === 'RU' ? 'Ф.И.О' : 'Full name' }}</label>
				<input
					id="fio"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Иван Иванович' : 'Ivan Ivanovich'" />
				<label for="telephone">{{ $store.state.language === 'RU' ? 'Телефон' : 'Telephone' }}</label>
				<input id="telephone" type="text" class="input" placeholder="89199966203" />
				<label for="email">E-mail</label>
				<input id="email" type="text" class="input" placeholder="partner@thedimension.com" />
				<p>
					{{
						$store.state.language === 'RU' ? 'Удобный способ связи' : 'Convenient way of communication'
					}}
				</p>
				<div class="call-method flex-row">
					<div class="logo">
						<img src="../assets/whatsapp.png" alt="whatsapp" />
					</div>
					<div class="logo">
						<img src="../assets/telegram.png" alt="telegram" />
					</div>
					<div class="logo">
						<img src="../assets/viber.png" alt="viber" />
					</div>
					<div class="logo">
						<img src="../assets/email.png" alt="email" />
					</div>
				</div>
				<p>{{ $store.state.language === 'RU' ? 'Прикрепить резюме' : 'Attach resume' }}</p>
				<input type="file" name="file" />
				<button class="call btn">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModalJobRespond',
	emits: ['close'],
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
.logo:hover {
	filter: drop-shadow(0 0 12px #2fc1ff);
}
@media (max-width: 980px) {
	h2 {
		align-self: center;
		text-align: center;
		color: #6a6a6a;
	}
}
</style>
