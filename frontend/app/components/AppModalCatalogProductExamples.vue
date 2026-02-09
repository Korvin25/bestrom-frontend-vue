<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')" />
		<div class="modal-window card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="/assets/close-image.png" alt="close" />
				<img class="close-mobile" src="/assets/close-mobile-menu.png" alt="close" />
			</div>
			<h2>{{ title }}</h2>
			<div class="details-select-products flex-row">
				<div
					v-for="item in productExamples"
					:key="item.id"
					class="details-select-products-item card-shadow">
					<h4>{{ language === 'RU' ? item.name : item.name_en }}</h4>
					<img :src="resolveMedia(item.img)" :alt="item.alt" />
					<AppHiddenItem :text="language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

defineEmits(['close'])

defineProps({
	title: {
		type: String,
		default: 'Пример продукции',
	},
	productExamples: {
		type: Array as () => any[],
		default: () => [],
	},
})

const appStore = useAppStore()
const { language, serverMedia } = storeToRefs(appStore)

const resolveMedia = (src: unknown) => {
	if (!src || typeof src !== 'string') return '/assets/no-image.jpg'
	if (src.startsWith('http')) return src
	return `${serverMedia.value}${src.replace(/^\//, '')}`
}
</script>

<style scoped>
.modal-background {
	position: fixed;
	inset: 0;
	background: rgba(15, 23, 42, 0.45);
	backdrop-filter: blur(6px);
	display: flex;
	align-items: flex-start;
	justify-content: center;
	overflow-y: auto;
	overflow-x: hidden;
	z-index: 10000;
}
.close-background {
	position: absolute;
	inset: 0;
}
.modal-window {
	position: relative;
	z-index: 2;
	width: min(920px, 95vw);
	max-height: none;
	overflow: visible;
	padding: 2.5rem 2rem;
	border-radius: 24px;
	background: #ffffff;
	box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
	margin: 2rem 0;
}
.modal-background::-webkit-scrollbar {
	width: 0;
	height: 0;
}
.modal-background {
	scrollbar-width: none;
}
.close {
	position: absolute;
	top: 16px;
	right: 16px;
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 999px;
	background: #f1f5f9;
	box-shadow: 0 6px 16px rgba(15, 23, 42, 0.15);
	cursor: pointer;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.close:hover {
	transform: translateY(-1px);
	box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);
}
.close img {
	width: 16px;
	height: 16px;
}
.close-mobile {
	display: none;
}
.close-desktop {
	display: block;
}
h2 {
	text-align: center;
	font-weight: 700;
	color: #0f172a;
	margin: 0 0 1rem 0;
}
.details-select-products {
	margin-top: 1.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 1rem;
}
.details-select-products-item {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	text-align: center;
	border-radius: 18px;
	background: #ffffff;
	box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.details-select-products-item:hover {
	transform: translateY(-2px);
	box-shadow: 0 18px 34px rgba(15, 23, 42, 0.18);
}
.details-select-products-item:hover .hidden-item {
	opacity: 1;
	transform: translateY(0);
}
.details-select-products-item img {
	align-self: center;
	max-width: 10rem;
	width: 100%;
}
.details-select-products-item h4 {
	font-weight: 600;
	margin: 0 0 0.5rem 0;
	color: #0f172a;
}
@media (max-width: 980px) {
	h2 {
		color: #0f172a;
	}
	.modal-window {
		margin: 1.5rem 0;
		padding: 2rem 1.5rem;
	}
	.close-mobile {
		display: block;
	}
	.close-desktop {
		display: none;
	}
	.details-select-products {
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 0.75rem;
	}
	.details-select-products-item h4 {
		font-size: 12px;
	}
}
</style>
