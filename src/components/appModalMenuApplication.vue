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
			<div class="tel-buttons flex-row">
				<a href="tel:+78005557457">
					<button class="btn">{{ $store.state.language === 'RU' ? 'Позвонить' : 'Call' }}</button>
				</a>
				<a href="tel:+78005557457">
					<h3>8-800-555-74-57</h3>
				</a>
			</div>
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
				<label for="product">{{ $store.state.language === 'RU' ? 'Продукт' : 'Product' }}</label>
				<input
					id="product"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? 'Фисташки' : 'Pistachio'" />
				<label for="weight">{{ $store.state.language === 'RU' ? 'Дозировка' : 'Dosage' }}</label>
				<input
					id="weight"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? '100г' : '100g'" />
				<label for="speed">{{
					$store.state.language === 'RU' ? 'Требуемая производительность' : 'Required performance'
				}}</label>
				<input
					id="speed"
					type="text"
					class="input"
					:placeholder="$store.state.language === 'RU' ? '60 п/м' : '60 p/m'" />
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
					<a href="tel:+78005557457" class="logo-mobile">
						<img src="../assets/mobile.png" alt="menu-item-img" />
					</a>
				</div>
				<button class="call btn">
					{{ $store.state.language === 'RU' ? 'ОТПРАВИТЬ ЗАЯВКУ' : 'SEND AN APPLICATION' }}
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModalMenuApplication',
	emits: ['close'],
}
</script>

<style scoped>
.tel-buttons {
	flex-wrap: wrap;
}
.tel-buttons a {
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.tel-buttons a h3 {
	margin-top: 1rem;
	align-self: center;
	font-weight: normal;
}
.tel-buttons a .btn {
	margin-top: 1rem;
	width: 100%;
	flex-grow: 1;
}
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
.logo.mobile {
	display: none;
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
	.tel-buttons {
		display: none;
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
}
</style>
