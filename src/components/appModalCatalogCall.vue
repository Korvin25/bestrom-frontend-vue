<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>{{ $store.state.language === 'RU' ? 'Заказать звонок' : 'Request a call' }}</h2>
			<div class="catalog-name flex-row">
				<h2 class="catalog-name-item">{{ nameMachine }}</h2>
				<a href="tel:+78005557457">
					<h2 class="catalog-name-item">8-800-555-74-57</h2>
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
				<label for="comment">{{ $store.state.language === 'RU' ? 'Комментарий' : 'Comment' }}</label>
				<textarea id="comment" rows="5" class="textarea" />
				<button class="call btn">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'REQUEST A CALL' }}
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModalCatalogCall',
	props: {
		nameMachine: {
			type: String,
			default: '',
		},
	},
	emits: ['close'],
}
</script>

<style scoped>
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
