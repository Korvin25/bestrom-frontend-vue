<template>
	<div class="hidden-item">
		<div class="hidden-text">
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppHiddenItem',
	props: {
		text: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.hidden-item {
	position: absolute;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1rem;
	cursor: pointer;
	background: rgba(47, 193, 255, 0.8);
	box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	transition: opacity 0.5s;
	opacity: 0;
}
.hidden-text {
	font-weight: bold;
	font-size: 1.2rem;
	color: #ffffff;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}
</style>
