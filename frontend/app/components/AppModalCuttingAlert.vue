<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')" />
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="/assets/close-image.png" alt="close" />
				<img class="close-mobile" src="/assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2 class="alert-text">{{ text }}</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
defineEmits(['close'])

defineProps({
	text: {
		type: String,
		default: '',
	},
})
</script>

<style scoped>
.alert-text {
	font-size: 1.5rem;
	align-self: center;
	text-align: center;
}
.close-mobile {
	display: none;
}
.close-desktop {
	display: block;
}
@media (max-width: 980px) {
	.close-mobile {
		display: block;
	}
	.close-desktop {
		display: none;
	}
}
</style>
