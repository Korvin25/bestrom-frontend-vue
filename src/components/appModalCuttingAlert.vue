<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>{{ text }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModalCuttingAlert',
	props: {
		text: {
			type: String,
			default: '',
		},
	},
	emits: ['close'],
}
</script>

<style scoped>
.modal-window h2 {
	font-size: 2rem;
	align-self: center;
	text-align: center;
}
@media (max-width: 980px) {
}
</style>
