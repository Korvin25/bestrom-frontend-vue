<template>
	<nav class="nav flex-row">
		<div class="nav-logo-items flex-column">
			<NuxtLink
				:class="hoverItem === 1 || isActive(mainLinks[0]) ? 'img-hover' : ''"
				class="nav-item img"
				to="/"
				@mouseenter="hoverItem = 1"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img class="logo-bestrom" src="/assets/bestrom_logo.png" alt="bestrom logo" />
			</NuxtLink>
			<NuxtLink
				v-for="item in mainLinks.slice(1)"
				:key="item.id"
				:class="hoverItem === item.id || isActive(item) ? 'img-hover' : ''"
				class="nav-item img"
				:to="item.path"
				@mouseenter="hoverItem = item.id"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img :src="item.icon" :alt="item.labelRu" />
			</NuxtLink>
			<button
				:class="hoverItem === 9 ? 'img-hover' : ''"
				class="nav-item img"
				type="button"
				@mouseenter="hoverItem = 9"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuContacts = true">
				<img src="/assets/menu-item-9.png" alt="contacts" />
			</button>
			<button
				:class="hoverItem === 10 ? 'img-hover' : ''"
				class="nav-item img contact-icon"
				type="button"
				@mouseenter="hoverItem = 10"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuApplication = true">
				<img src="/assets/email.png" alt="application" />
			</button>
			<a
				href="https://vk.com/bestrom_official"
				:class="hoverItem === 11 ? 'logo-hover' : ''"
				class="nav-item img logo contact-icon"
				@mouseenter="hoverItem = 11"
				@mouseleave="hoverItem = 0">
				<img class="nav-contact-icon nav-contact-icon--dark" src="/assets/vk.png" alt="VK" />
			</a>
			<a
				href="https://t.me/bestrom_official"
				:class="hoverItem === 12 ? 'logo-hover' : ''"
				class="nav-item img logo contact-icon"
				@mouseenter="hoverItem = 12"
				@mouseleave="hoverItem = 0">
				<img class="nav-contact-icon" src="/assets/telegram.png" alt="Telegram" />
			</a>
			<a
				href="https://rutube.ru/channel/38819375/"
				:class="hoverItem === 13 ? 'logo-hover' : ''"
				class="nav-item img logo contact-icon"
				@mouseenter="hoverItem = 13"
				@mouseleave="hoverItem = 0">
				<img class="nav-contact-icon nav-contact-icon--dark" src="/assets/rutube1.png" alt="Rutube" />
			</a>
		</div>

		<div class="nav-text-items flex-column">
			<NuxtLink
				:class="hoverItem === 1 || isActive(mainLinks[0]) ? 'text-hover' : ''"
				class="nav-item text"
				to="/"
				@mouseenter="hoverItem = 1"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ language === 'RU' ? 'Главная' : 'Main page' }}</p>
			</NuxtLink>
			<NuxtLink
				v-for="item in mainLinks.slice(1)"
				:key="item.id"
				:class="hoverItem === item.id || isActive(item) ? 'text-hover' : ''"
				class="nav-item text"
				:to="item.path"
				@mouseenter="hoverItem = item.id"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ language === 'RU' ? item.labelRu : item.labelEn }}</p>
			</NuxtLink>
			<button
				:class="hoverItem === 9 ? 'text-hover' : ''"
				class="nav-item text"
				type="button"
				@mouseenter="hoverItem = 9"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuContacts = true">
				<p>{{ language === 'RU' ? 'Контакты' : 'Contacts' }}</p>
			</button>
			<button
				:class="hoverItem === 10 ? 'text-hover' : ''"
				class="nav-item text"
				type="button"
				@mouseenter="hoverItem = 10"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuApplication = true">
				<p>{{ language === 'RU' ? 'Оставить заявку' : 'Submit your application' }}</p>
			</button>
			<a
				href="https://vk.com/bestrom_official"
				:class="hoverItem === 11 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 11"
				@mouseleave="hoverItem = 0">
				<p>ВКонтакте</p>
			</a>
			<a
				href="https://t.me/bestrom_official"
				:class="hoverItem === 12 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 12"
				@mouseleave="hoverItem = 0">
				<p>Telegram</p>
			</a>
			<a
				href="https://rutube.ru/channel/38819375/"
				:class="hoverItem === 13 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 13"
				@mouseleave="hoverItem = 0">
				<p>RUTUBE</p>
			</a>
		</div>
	</nav>

	<div class="mobile-nav">
		<div class="mobile-nav-buttons">
			<button class="mobile-nav-buttons-item" type="button" @click="showMobileMenu = true">
				<img class="mobile-icon" src="/assets/menu-burger.png" alt="menu" />
				<span>{{ language === 'RU' ? 'Меню' : 'Menu' }}</span>
			</button>
			<a href="tel:+78005557457" class="mobile-nav-buttons-item">
				<span>{{ language === 'RU' ? 'Позвонить' : 'Call' }}</span>
			</a>
		</div>

		<transition-group name="mobile-menu-modal">
			<nav v-if="showMobileMenu" class="mobile-nav-elements flex-column">
				<button class="close mobile-close" type="button" @click="showMobileMenu = false">
					<img src="/assets/close-mobile-menu.png" alt="close" />
				</button>
				<p class="mobile-menu-title">{{ language === 'RU' ? 'Меню' : 'Menu' }}</p>

				<div class="mobile-menu-nav-items flex-column">
					<NuxtLink
						v-for="item in linkItems"
						:key="item.id"
						class="nav-mobile-item"
						:to="item.path"
						@click="scrollToTop">
						<img class="nav-icon" :src="item.icon" :alt="item.labelRu" />
						{{ language === 'RU' ? item.labelRu : item.labelEn }}
					</NuxtLink>
					<button class="nav-mobile-item" type="button" @click="showModalMenuServiceClick">
						<img class="nav-icon" src="/assets/menu-item-5,8.png" alt="service" />
						{{ language === 'RU' ? 'Сервис' : 'Service' }}
					</button>
					<button class="nav-mobile-item" type="button" @click="showModalMenuContactsClick">
						<img class="nav-icon" src="/assets/menu-item-9.png" alt="contacts" />
						{{ language === 'RU' ? 'Контакты' : 'Contacts' }}
					</button>
					<button class="nav-mobile-item" type="button" @click="showModalMenuApplicationClick">
						<img class="nav-icon" src="/assets/email.png" alt="application" />
						{{ language === 'RU' ? 'Оставить заявку' : 'Submit your application' }}
					</button>
				</div>

				<div class="mobile-menu-footer">
					<a href="https://vk.com/bestrom_official">
						<img class="social-icon" src="/assets/vk.png" alt="VK" />
					</a>
					<a href="https://t.me/bestrom_official">
						<img class="social-icon" src="/assets/telegram.png" alt="Telegram" />
					</a>
					<a href="https://rutube.ru/channel/38819375/">
						<img class="social-icon" src="/assets/rutube1.png" alt="Rutube" />
					</a>
				</div>
			</nav>
		</transition-group>
	</div>

	<transition-group name="modal">
		<AppModalMenuApplication
			v-if="showModalMenuApplication"
			@close="showModalMenuApplication = false" />
		<AppModalMenuService v-if="showModalMenuService" @close="showModalMenuService = false" />
		<AppModalMenuContacts
			v-if="showModalMenuContacts"
			@close="showModalMenuContacts = false"
			@call="showModalMenuContactsCallFunc"
			@question="showModalMenuContactsQuestionFunc" />
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
import AppModalMenuApplication from '~/components/AppModalMenuApplication.vue'
import AppModalMenuContacts from '~/components/AppModalMenuContacts.vue'
import AppModalMenuContactsCall from '~/components/AppModalMenuContactsCall.vue'
import AppModalMenuContactsQuestion from '~/components/AppModalMenuContactsQuestion.vue'
import AppModalMenuService from '~/components/AppModalMenuService.vue'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)

const route = useRoute()

const showMobileMenu = ref(false)
const showModalMenuApplication = ref(false)
const showModalMenuService = ref(false)
const showModalMenuContacts = ref(false)
const showModalMenuContactsCall = ref(false)
const showModalMenuContactsQuestion = ref(false)

const hoverItem = ref(0)

const mainLinks = [
	{ id: 1, path: '/', labelRu: 'Главная', labelEn: 'Main page', icon: '/assets/bestrom_logo.png' },
	{ id: 2, path: '/about', labelRu: 'О компании', labelEn: 'About company', icon: '/assets/menu-item-2.png' },
	{ id: 3, path: '/catalog', labelRu: 'Каталог', labelEn: 'Catalog', icon: '/assets/menu-item-3.png' },
	{ id: 4, path: '/cutting', labelRu: 'Раскрой пакета', labelEn: 'Uncover the package', icon: '/assets/menu-item-4.png' },
	{ id: 5, path: '/news', labelRu: 'Новости', labelEn: 'News', icon: '/assets/menu-item-6.png' },
	{ id: 6, path: '/partners', labelRu: 'Партнеры', labelEn: 'Partners', icon: '/assets/menu-item-7.png' },
	{ id: 7, path: '/clients', labelRu: 'Клиенты', labelEn: 'Clients', icon: '/assets/menu-item-5,8.png' },
	{ id: 8, path: '/jobs', labelRu: 'Вакансии', labelEn: 'Vacancies', icon: '/assets/menu-item-10.png' },
]

const isActive = (item: { path: string }) => route.path === item.path || route.path.startsWith(item.path + '/')

const scrollToTop = () => {
	showMobileMenu.value = false
	if (process.client) {
		window.scrollTo(0, 0)
	}
}

const lockBody = (isLocked: boolean) => {
	if (process.client) {
		document.body.classList.toggle('modal-open', isLocked)
	}
}

watch(showMobileMenu, (val) => lockBody(val))
watch(showModalMenuApplication, (val) => lockBody(val))
watch(showModalMenuService, (val) => lockBody(val))
watch(showModalMenuContacts, (val) => lockBody(val))
watch(showModalMenuContactsCall, (val) => lockBody(val))
watch(showModalMenuContactsQuestion, (val) => lockBody(val))

const showModalMenuContactsCallFunc = () => {
	showModalMenuContactsCall.value = true
	showModalMenuContacts.value = false
}
const showModalMenuContactsQuestionFunc = () => {
	showModalMenuContactsQuestion.value = true
	showModalMenuContacts.value = false
}
const showModalMenuServiceClick = () => {
	showMobileMenu.value = false
	showModalMenuService.value = true
}
const showModalMenuApplicationClick = () => {
	showMobileMenu.value = false
	showModalMenuApplication.value = true
}
const showModalMenuContactsClick = () => {
	showMobileMenu.value = false
	showModalMenuContacts.value = true
}
</script>

<style scoped>
.logo-bestrom {
	width: 2rem;
	height: 2rem;
	max-width: none;
	display: block;
}
.nav {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	align-items: center;
	min-height: 600px;
	background: transparent;
	z-index: 9998;
}
.nav-logo-items {
	justify-content: space-around;
	align-items: center;
	height: 100%;
	padding: 0 0.5rem;
	background: #ffffff;
	box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
	border-radius: 18px;
}
.nav-logo-items:hover + .nav-text-items {
	transform: scaleX(1);
}
.nav-text-items {
	align-items: flex-start;
	justify-content: space-around;
	padding: 0 2rem 0 0;
	height: 100%;
	background: #ffffff;
	box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
	border-radius: 0 18px 18px 0;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	transform: scaleX(0);
	transform-origin: 0 0;
}
.nav-text-items:hover {
	transform: scaleX(1);
}
.nav-text-items .nav-item {
	box-shadow: none;
}
.nav-item {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f8fafc;
	box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06);
	border-radius: 14px;
	border: 1px solid rgba(15, 23, 42, 0.08);
	transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
}
.nav-item.text {
	margin-left: 1rem;
	text-decoration: none;
	background: transparent;
	border-radius: 12px;
	padding: 0.35rem 0.5rem;
}
.nav-item.text.text-hover {
	transform: translateX(2px);
	background: rgba(47, 193, 255, 0.12);
}
.nav-item:hover {
	cursor: pointer;
}
.nav-item.img {
	width: 2.6rem;
	height: 2.6rem;
}
.nav-item.img.img-hover {
	background: rgba(47, 193, 255, 0.18);
	border-color: rgba(14, 165, 233, 0.35);
	transform: translateY(-1px);
	box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}
.nav-item.img:not(.logo) img {
	filter: drop-shadow(0 2px 6px rgba(15, 23, 42, 0.18));
}
.nav-item.img:not(.contact-icon):hover {
	background: #ffffff;
	border-color: rgba(14, 165, 233, 0.25);
	box-shadow: 0 12px 22px rgba(56, 189, 248, 0.22);
}
.nav-item.img.logo {
	border-radius: 50%;
}
.nav-item.img.contact-icon {
	background: #ffffff;
	border: 1px solid rgba(15, 23, 42, 0.12);
	box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06);
	width: 2.4rem;
	height: 2.4rem;
}
.nav-item.img.contact-icon:hover {
	border-color: rgba(14, 165, 233, 0.35);
	box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}
.nav-item.img.contact-icon .nav-contact-icon {
	width: 20px;
	height: 20px;
}
.nav-item.img.contact-icon .nav-contact-icon--dark {
	width: 24px;
	height: 24px;
}
.nav-item.img.logo.contact-icon {
	border-radius: 12px;
}
.nav-contact-icon--dark {
	filter: brightness(0.3) contrast(1.1);
}
.nav-item p {
	font-size: 16px;
	margin: 0.5rem 0;
}
.nav-social {
	margin-top: auto;
	gap: 0.5rem;
	font-size: 12px;
}
.mobile-nav {
	display: none;
}

@media (max-width: 980px) {
	.nav {
		display: none;
	}
	.mobile-nav {
		width: 100%;
		height: 100%;
		display: block;
	}
	.mobile-nav-buttons {
		z-index: 9998;
		position: fixed;
		bottom: 1rem;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		gap: 1rem;
		padding: 0 1rem;
	}
	.mobile-nav-buttons-item {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(0deg, #2fc1ff -40%, #7dd8ff 100%);
		border: 3px solid #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
		padding: 0.8rem 1rem;
		color: #ffffff;
		font-weight: 600;
	}
.mobile-icon {
	width: 20px;
	height: 20px;
}
	.mobile-nav-elements {
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		justify-content: flex-start;
		background-color: #ffffff;
		padding: 2.5rem 1.5rem 1rem;
	}
	.mobile-close {
		border: none;
		background: #ffffff;
	padding: 0;
	}
	.mobile-menu-title {
		text-align: center;
		font-weight: 600;
		font-size: 18px;
		line-height: 142%;
	}
	.mobile-menu-nav-items {
		margin-top: 1.5rem;
		gap: 0.5rem;
	}
	.nav-mobile-item {
		display: flex;
	align-items: center;
	gap: 0.75rem;
		padding: 0.75rem 0.5rem;
		border-bottom: 1px solid rgba(47, 193, 255, 0.2);
		text-align: left;
		background: none;
		border-left: none;
		border-right: none;
		border-top: none;
		color: inherit;
		font-size: 16px;
	}
	.mobile-menu-footer {
		margin-top: auto;
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		padding-top: 1.5rem;
	}
	.mobile-menu-modal-enter-active {
		animation: mobile-menu-modal-in 0.4s;
	}
	.mobile-menu-modal-leave-active {
		animation: mobile-menu-modal-in 0.4s reverse;
	}
	@keyframes mobile-menu-modal-in {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
}
</style>
