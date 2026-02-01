<template>
	<header class="header flex-row">
		<NuxtLink class="header-title" to="/">
			<img class="logo-img" src="/assets/bestrom_logo.png" alt="bestrom logo" />
			<h1>{{ language === 'RU' ? 'БЕСТРОМ' : 'BESTROM' }}</h1>
		</NuxtLink>
		<div class="header-actions flex-row">
			<button class="btn" @click="showModalMenuContactsCall = true">
				{{ language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'ORDER A CALL' }}
			</button>
			<button class="btn" @click="showModalMenuContactsQuestion = true">
				{{ language === 'RU' ? 'ЗАДАТЬ ВОПРОС' : 'ASK A QUESTION' }}
			</button>
			<button class="lang-toggle" type="button" @click="toggleLanguage">
				<img class="lang-icon" src="/assets/language-world.png" alt="language" />
				<span>{{ language }}</span>
			</button>
		</div>
	</header>
	<transition-group name="modal">
		<AppModalMenuContactsCall
			v-if="showModalMenuContactsCall"
			@close="showModalMenuContactsCall = false" />
		<AppModalMenuContactsQuestion
			v-if="showModalMenuContactsQuestion"
			@close="showModalMenuContactsQuestion = false" />
	</transition-group>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import AppModalMenuContactsCall from '~/components/AppModalMenuContactsCall.vue'
import AppModalMenuContactsQuestion from '~/components/AppModalMenuContactsQuestion.vue'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
const { toggleLanguage } = appStore

const showModalMenuContactsCall = ref(false)
const showModalMenuContactsQuestion = ref(false)

const lockBody = (isLocked: boolean) => {
	if (process.client) {
		document.body.classList.toggle('modal-open', isLocked)
	}
}

watch(showModalMenuContactsCall, (val) => lockBody(val))
watch(showModalMenuContactsQuestion, (val) => lockBody(val))
</script>

<style scoped>
.header {
	justify-content: space-between;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	position: fixed;
	z-index: 9997;
	top: 0;
	right: 100px;
	left: 170px;
	padding: 0.5rem 1rem;
}
.header-title {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}
.logo-img {
	width: 36px;
	height: 36px;
}
.header-actions {
	align-items: center;
	gap: 0.75rem;
}
.header .btn {
	font-size: 14px;
	width: 220px;
}
.lang-toggle {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border: 1px solid rgba(47, 193, 255, 0.3);
	background: #ffffff;
	padding: 0.4rem 0.75rem;
	border-radius: 999px;
	cursor: pointer;
	font-weight: 600;
	color: #2fc1ff;
}
.lang-icon {
	width: 20px;
	height: 20px;
}
@media (max-width: 980px) {
	.header .btn {
		display: none;
	}
	.header {
		right: 0;
		left: 0;
		border-radius: 0 0 24px 24px;
	}
}
</style>
