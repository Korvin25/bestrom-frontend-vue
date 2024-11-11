<template>
	<!-- Desktop navigation menu -->
	<nav class="nav flex-row">
		<!-- Image items in menu -->
		<div class="nav-logo-items flex-column">
			<router-link
				:class="hoverItem === 1 || $route.path === '/' ? 'img-hover' : ''"
				class="nav-item img"
				to="/"
				@mouseenter="hoverItem = 1"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img class="logo-bestrom" src="../assets/bestrom_logo.png" alt="menu-item-img" />
			</router-link>
			<router-link
				:class="hoverItem === 2 || $route.path.includes('/about') ? 'img-hover' : ''"
				class="nav-item img"
				to="/about"
				@mouseenter="hoverItem = 2"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-2.png" alt="menu-item-img" />
			</router-link>
			<router-link
				:class="hoverItem === 3 || $route.path.includes('/catalog') ? 'img-hover' : ''"
				class="nav-item img"
				to="/catalog"
				@mouseenter="hoverItem = 3"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-3.png" alt="menu-item-img" />
			</router-link>
			<router-link
				:class="hoverItem === 4 || $route.path.includes('/cutting') ? 'img-hover' : ''"
				class="nav-item img"
				to="/cutting"
				@mouseenter="hoverItem = 4"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-4.png" alt="menu-item-img" />
			</router-link>
			<a
				:class="hoverItem === 5 ? 'img-hover' : ''"
				class="nav-item img"
				@mouseenter="hoverItem = 5"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuService = true">
				<img src="../assets/menu-item-5,8.png" alt="menu-item-img" />
			</a>
			<router-link
				:class="hoverItem === 6 || $route.path.includes('/news') ? 'img-hover' : ''"
				class="nav-item img"
				to="/news"
				@mouseenter="hoverItem = 6"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-6.png" alt="menu-item-img" />
			</router-link>
			<router-link
				:class="hoverItem === 7 || $route.path.includes('/partners') ? 'img-hover' : ''"
				class="nav-item img"
				to="/partners"
				@mouseenter="hoverItem = 7"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-7.png" alt="menu-item-img" />
			</router-link>
			<router-link
				:class="hoverItem === 8 || $route.path.includes('/clients') ? 'img-hover' : ''"
				class="nav-item img"
				to="/clients"
				@mouseenter="hoverItem = 8"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-5,8.png" alt="menu-item-img" />
			</router-link>
			<a
				:class="hoverItem === 9 ? 'img-hover' : ''"
				class="nav-item img"
				@mouseenter="hoverItem = 9"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuContacts = true">
				<img src="../assets/menu-item-9.png" alt="menu-item-img" />
			</a>
			<router-link
				:class="hoverItem === 10 || $route.path.includes('/jobs') ? 'img-hover' : ''"
				class="nav-item img"
				to="/jobs"
				@mouseenter="hoverItem = 10"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<img src="../assets/menu-item-10.png" alt="menu-item-img" />
			</router-link>
			<a
				:class="hoverItem === 11 || showModalMenuApplication ? 'logo-hover' : ''"
				class="nav-item img logo"
				@mouseenter="hoverItem = 11"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuApplication = true">
				<img src="../assets/mobile.png" alt="menu-item-img" />
			</a>
			<a
				href="https://vk.com"
				:class="hoverItem === 12 ? 'logo-hover' : ''"
				class="nav-item img logo"
				@mouseenter="hoverItem = 12"
				@mouseleave="hoverItem = 0">
				<img style="width: 33px" src="../assets/vk.png" alt="menu-item-img" />
			</a>
			<a
				href="https://youtube.com"
				:class="hoverItem === 13 ? 'logo-hover' : ''"
				class="nav-item img logo"
				@mouseenter="hoverItem = 13"
				@mouseleave="hoverItem = 0">
				<img style="width: 25px" src="../assets/youtube.png" alt="menu-item-img" />
			</a>
			<a
				href="https://rutube.ru/channel/38819375/"
				:class="hoverItem === 14 ? 'logo-hover' : ''"
				class="nav-item img logo"
				@mouseenter="hoverItem = 14"
				@mouseleave="hoverItem = 0">
				<img style="width: 25px" src="../assets/rutube1.png" alt="menu-item-img" />
			</a>
		</div>

		<!-- Text items in menu  !!  !! -->
		<div class="nav-text-items flex-column">
			<router-link
				:class="hoverItem === 1 || $route.path === '/' ? 'text-hover' : ''"
				class="nav-item text"
				to="/"
				@mouseenter="hoverItem = 1"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Главная' : 'Main page' }}</p>
			</router-link>
			<router-link
				:class="hoverItem === 2 || $route.path.includes('/about') ? 'text-hover' : ''"
				class="nav-item text"
				to="/about"
				@mouseenter="hoverItem = 2"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'О компании' : 'About company' }}</p>
			</router-link>
			<router-link
				:class="hoverItem === 3 || $route.path.includes('/catalog') ? 'text-hover' : ''"
				class="nav-item text"
				to="/catalog"
				@mouseenter="hoverItem = 3"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Каталог' : 'Catalog' }}</p>
			</router-link>
			<router-link
				:class="hoverItem === 4 || $route.path.includes('/cutting') ? 'text-hover' : ''"
				class="nav-item text"
				to="/cutting"
				@mouseenter="hoverItem = 4"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Раскрой пакета' : 'Uncover the package' }}</p>
			</router-link>
			<a
				:class="hoverItem === 5 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 5"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuService = true">
				<p>{{ $store.state.language === 'RU' ? 'Сервис' : 'Service' }}</p>
			</a>
			<router-link
				:class="hoverItem === 6 || $route.path.includes('/news') ? 'text-hover' : ''"
				class="nav-item text"
				to="/news"
				@mouseenter="hoverItem = 6"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Новости' : 'News' }}</p>
			</router-link>
			<router-link
				:class="hoverItem === 7 || $route.path.includes('/partners') ? 'text-hover' : ''"
				class="nav-item text"
				to="/partners"
				@mouseenter="hoverItem = 7"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Партнеры' : 'Partners' }}</p>
			</router-link>
			<router-link
				:class="hoverItem === 8 || $route.path.includes('/clients') ? 'text-hover' : ''"
				class="nav-item text"
				to="/clients"
				@mouseenter="hoverItem = 8"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Клиенты' : 'Clients' }}</p>
			</router-link>
			<a
				:class="hoverItem === 9 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 9"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuContacts = true">
				<p>{{ $store.state.language === 'RU' ? 'Контакты' : 'Contacts' }}</p>
			</a>
			<router-link
				:class="hoverItem === 10 || $route.path.includes('/jobs') ? 'text-hover' : ''"
				class="nav-item text"
				to="/jobs"
				@mouseenter="hoverItem = 10"
				@mouseleave="hoverItem = 0"
				@click="scrollToTop">
				<p>{{ $store.state.language === 'RU' ? 'Вакансии' : 'Vacancies' }}</p>
			</router-link>
			<a
				:class="hoverItem === 11 || showModalMenuApplication ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 11"
				@mouseleave="hoverItem = 0"
				@click="showModalMenuApplication = true">
				<p>{{ $store.state.language === 'RU' ? 'Оставить заявку' : 'Submit your application' }}</p>
			</a>
			<a
				href="https://vk.com"
				:class="hoverItem === 12 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 12"
				@mouseleave="hoverItem = 0">
				<p>ВКонтакте</p>
			</a>
			<a
				href="https://youtube.com"
				:class="hoverItem === 13 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 13"
				@mouseleave="hoverItem = 0">
				<p>YouTube</p>
			</a>
			<a
				href="https://rutube.ru/channel/38819375/"
				:class="hoverItem === 14 ? 'text-hover' : ''"
				class="nav-item text"
				@mouseenter="hoverItem = 14"
				@mouseleave="hoverItem = 0">
				<p>RUTUBE</p>
			</a>
		</div>
	</nav>

	<!-- Mobile navigation menu -->
	<div class="mobile-nav">
		<div class="mobile-nav-buttons">
			<div class="mobile-nav-buttons-item" @click="showMobileMenu = true">
				<img src="../assets/menu-burger.png" alt="menu-burger" />
				<p>{{ $store.state.language === 'RU' ? 'Меню' : 'Menu' }}</p>
			</div>
			<a href="tel:+78005557457" class="mobile-nav-buttons-item">
				<p>{{ $store.state.language === 'RU' ? 'Позвонить' : 'Call' }}</p>
			</a>
		</div>

		<transition-group name="mobile-menu-modal">
			<nav v-if="showMobileMenu" class="mobile-nav-elements flex-column">
				<img
					class="close-mobile-menu"
					src="../assets/close-mobile-menu.png"
					alt="close-mobile-menu"
					@click="showMobileMenu = false" />
				<p class="mobile-menu-title">{{ $store.state.language === 'RU' ? 'Меню' : 'Menu' }}</p>

				<div class="mobile-menu-logo flex-row">
					<a href="https://vk.com" class="nav-item img logo">
						<img style="width: 33px" src="../assets/vk.png" alt="menu-item-img" />
					</a>
					<a href="https://youtube.com" class="nav-item img logo">
						<img style="width: 25px" src="../assets/youtube.png" alt="menu-item-img" />
					</a>
				</div>

				<div class="mobile-menu-nav-items flex-column">
					<router-link class="nav-mobile-item flex-row" to="/" @click="scrollToTop">
						<div
							:class="hoverItem === 1 || $route.path === '/' ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img class="logo-bestrom" src="../assets/bestrom_logo.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 1 || $route.path === '/' ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Главная' : 'Main page' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/about" @click="scrollToTop">
						<div
							:class="hoverItem === 2 || $route.path.includes('/about') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-2.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 2 || $route.path.includes('/about') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'О компании' : 'About company' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/catalog" @click="scrollToTop">
						<div
							:class="hoverItem === 3 || $route.path.includes('/catalog') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-3.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 3 || $route.path.includes('/catalog') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Каталог' : 'Catalog' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/cutting" @click="scrollToTop">
						<div
							:class="hoverItem === 4 || $route.path.includes('/cutting') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-4.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 4 || $route.path.includes('/cutting') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Раскрой пакета' : 'Uncover the package' }}
						</p>
					</router-link>
					<a class="nav-mobile-item flex-row" @click="showModalMenuServiceClick">
						<div :class="hoverItem === 5 ? 'img-hover' : ''" class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-5,8.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 5 ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Сервис' : 'Service' }}
						</p>
					</a>
					<router-link class="nav-mobile-item flex-row" to="/news" @click="scrollToTop">
						<div
							:class="hoverItem === 6 || $route.path.includes('/news') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-6.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 6 || $route.path.includes('/news') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Новости' : 'News' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/partners" @click="scrollToTop">
						<div
							:class="hoverItem === 7 || $route.path.includes('/partners') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-7.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 7 || $route.path.includes('/partners') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Партнеры' : 'Partners' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/clients" @click="scrollToTop">
						<div
							:class="hoverItem === 8 || $route.path.includes('/clients') ? 'img-hover' : ''"
							class="nav-mobile-item-img card-shadow">
							<img src="../assets/menu-item-5,8.png" alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 8 || $route.path.includes('/clients') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Клиенты' : 'Clients' }}
						</p>
					</router-link>
					<router-link class="nav-mobile-item flex-row" to="/jobs" @click="scrollToTop">
						<div class="nav-mobile-item-img card-shadow">
							<img
								:class="hoverItem === 10 || $route.path.includes('/jobs') ? 'img-hover' : ''"
								src="../assets/menu-item-10.png"
								alt="menu-item-img" />
						</div>
						<p :class="hoverItem === 10 || $route.path.includes('/jobs') ? 'text-hover' : ''">
							{{ $store.state.language === 'RU' ? 'Вакансии' : 'Vacancies' }}
						</p>
					</router-link>

					<div class="mobile-menu-nav-bottom flex-row">
						<div
							class="mobile-menu-nav-bottom-item card-shadow flex-column"
							@click="showModalMenuApplicationClick">
							<img src="../assets/menu-mobile-call.png" alt="menu-mobile-call" />
							<p>{{ $store.state.language === 'RU' ? 'Заявка' : 'Application' }}</p>
						</div>
						<div
							class="mobile-menu-nav-bottom-item card-shadow flex-column"
							@click="showModalMenuContactsQuestionClick">
							<img src="../assets/menu-mobile-message.png" alt="menu-mobile-message" />
							<p>{{ $store.state.language === 'RU' ? 'Написать' : 'Write a message' }}</p>
						</div>
						<div
							class="mobile-menu-nav-bottom-item card-shadow flex-column"
							@click="showModalMenuContactsClick">
							<img src="../assets/menu-mobile-contacts.png" alt="menu-mobile-contacts" />
							<p>{{ $store.state.language === 'RU' ? 'Контакты' : 'Contacts' }}</p>
						</div>
					</div>
				</div>
			</nav>
			<!-- ./mobile-nav-elements -->
		</transition-group>
	</div>
	<!-- ./mobile-menu -->

	<transition-group name="modal">
		<app-modal-menu-application
			v-if="showModalMenuApplication"
			@close="showModalMenuApplication = false"></app-modal-menu-application>
		<app-modal-menu-service
			v-if="showModalMenuService"
			@close="showModalMenuService = false"></app-modal-menu-service>
		<app-modal-menu-contacts
			v-if="showModalMenuContacts"
			@close="showModalMenuContacts = false"
			@call="showModalMenuContactsCallFunc"
			@question="showModalMenuContactsQuestionFunc"></app-modal-menu-contacts>
		<app-modal-menu-contacts-call
			v-if="showModalMenuContactsCall"
			@close="showModalMenuContactsCall = false"></app-modal-menu-contacts-call>
		<app-modal-menu-contacts-question
			v-if="showModalMenuContactsQuestion"
			@close="showModalMenuContactsQuestion = false"></app-modal-menu-contacts-question>
	</transition-group>
</template>

<script>
import appModalMenuApplication from '../components/appModalMenuApplication.vue'
import appModalMenuService from '../components/appModalMenuService.vue'
import appModalMenuContacts from '../components/appModalMenuContacts.vue'
import appModalMenuContactsCall from '../components/appModalMenuContactsCall.vue'
import appModalMenuContactsQuestion from '../components/appModalMenuContactsQuestion.vue'

export default {
	name: 'AppNavMenu',
	components: {
		appModalMenuApplication,
		appModalMenuService,
		appModalMenuContacts,
		appModalMenuContactsCall,
		appModalMenuContactsQuestion,
	},
	data() {
		return {
			hoverItem: 0,
			showMobileMenu: false,
			showModalMenuApplication: false,
			showModalMenuService: false,
			showModalMenuContacts: false,
			showModalMenuContactsCall: false,
			showModalMenuContactsQuestion: false,
		}
	},
	watch: {
		showMobileMenu() {
			if (this.showMobileMenu) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalMenuApplication() {
			if (this.showModalMenuApplication) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalMenuService() {
			if (this.showModalMenuService) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalMenuContacts() {
			if (this.showModalMenuContacts) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalMenuContactsCall() {
			if (this.showModalMenuContactsCall) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
		showModalMenuContactsQuestion() {
			if (this.showModalMenuContactsQuestion) {
				document.body.classList.add('modal-open')
			} else {
				document.body.classList.remove('modal-open')
			}
		},
	},
	methods: {
		scrollToTop() {
			this.showMobileMenu = false
			window.scrollTo(0, 0)
		},
		showModalMenuContactsCallFunc() {
			this.showModalMenuContactsCall = true
			this.showModalMenuContacts = false
		},
		showModalMenuContactsQuestionFunc() {
			this.showModalMenuContactsQuestion = true
			this.showModalMenuContacts = false
		},
		showModalMenuServiceClick() {
			this.showMobileMenu = false
			this.showModalMenuService = true
		},
		showModalMenuApplicationClick() {
			this.showMobileMenu = false
			this.showModalMenuApplication = true
		},
		showModalMenuContactsQuestionClick() {
			this.showMobileMenu = false
			this.showModalMenuContactsQuestion = true
		},
		showModalMenuContactsClick() {
			this.showMobileMenu = false
			this.showModalMenuContacts = true
		},
	},
}
</script>

<style scoped>
.logo-bestrom {
	max-width: 2rem;
	width: 100%;
}
.mobile-nav {
	display: none;
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
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}
.nav-logo-items:hover + .nav-text-items {
	-webkit-transform: scaleX(1);
	-ms-transform: scaleX(1);
	transform: scaleX(1);
}
.nav-text-items {
	align-items: flex-start;
	justify-content: space-around;
	padding: 0 2rem 0 0;
	height: 100%;
	background: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	transition: all 0.3s;
	-webkit-transform: scaleX(0);
	-ms-transform: scaleX(0);
	transform: scaleX(0);
	-webkit-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	transform-origin: 0 0;
}
.nav-text-items:hover {
	-webkit-transform: scaleX(1);
	-ms-transform: scaleX(1);
	transform: scaleX(1);
}
.nav-text-items .nav-item {
	box-shadow: none;
}
.nav-item {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
}
.nav-item.text {
	margin-left: 1rem;
	text-decoration: none;
	background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
	background-size: 0 2px;
	transition: background-size 0.3s ease;
	border-radius: 0;
}
.nav-item.text.text-hover {
	transform: scale(1.04);
	background-size: 100% 2px;
}
.nav-item:hover {
	cursor: pointer;
}
.nav-item.img {
	width: 2.5rem;
	height: 2.5rem;
}
.nav-item.img.img-hover {
	transition: all 0.5s;
	background: rgba(47, 193, 255, 0.3);
}
.nav-item.img.logo {
	background: #6a6a6a;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
}
.nav-item.img.logo.logo-hover {
	background: rgba(47, 193, 255, 0.9);
}
.nav-item p {
	font-size: 16px;
	margin: 0.5rem 0;
}

@media (max-width: 980px) {
	body.modal-open {
		overflow: hidden;
	}
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
	}
	.mobile-nav-buttons-item {
		margin: 0 1rem;
		flex-grow: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(0deg, #2fc1ff -40%, #7dd8ff 100%);
		border: 3px solid #ffffff;
		box-sizing: border-box;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
	}
	.mobile-nav-buttons-item p {
		text-align: center;
		padding: 0 0.5rem;
		font-weight: 500;
		font-size: 16px;
		line-height: 142%;
		color: #ffffff;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
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
	}
	.close-mobile-menu {
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		height: 2rem;
		margin: 1rem;
	}
	.mobile-menu-title {
		text-align: center;
		font-weight: 500;
		font-size: 18px;
		line-height: 142%;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
	}
	.mobile-menu-logo {
		justify-content: space-around;
		padding: 0 2rem 1rem 2rem;
		margin-bottom: 1rem;
		border-bottom: 2px solid #2fc1ff;
	}
	.mobile-menu-nav-items {
		height: 100%;
		justify-content: space-around;
	}
	.nav-mobile-item {
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 0.5rem;
	}
	.nav-mobile-item p {
		font-size: 18px;
		margin: 0;
		padding: 0.5rem 0;
		text-decoration: none;
		background: linear-gradient(currentColor, currentColor) no-repeat 0 100%;
		background-size: 0 2px;
		transition: background-size 0.3s ease;
		border-radius: 0;
	}
	.nav-mobile-item p.text-hover {
		transform: scale(1.04);
		background-size: 100% 2px;
	}
	.nav-mobile-item-img {
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 1rem;
	}
	.nav-mobile-item-img.img-hover {
		transition: all 0.5s;
		background: rgba(47, 193, 255, 0.2);
	}
	.mobile-menu-nav-bottom {
		margin: 0 0.5rem;
	}
	.mobile-menu-nav-bottom-item {
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin: 0 0.5rem;
		width: 30%;
		flex-grow: 1;
	}
	.mobile-menu-nav-bottom-item p {
		margin: 0.5rem 0 0 0;
		text-align: center;
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
