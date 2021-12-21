<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')"></div>
		<div class="modal-window contacts card-shadow flex-column">
			<div class="close" @click="$emit('close')">
				<img class="close-desktop" src="../assets/close-image.png" alt="close" />
				<img class="close-mobile" src="../assets/close-mobile-menu.png" alt="close" />
			</div>

			<div class="header-title">
				<img class="logo-img" src="../assets/bestrom_logo.png" alt="bestrom logo" />
				<h1>{{ $store.state.language === 'RU' ? 'БЕСТРОМ' : 'BESTROM' }}</h1>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Головной офис' : 'Head Office' }}</h3>

			<div class="flex-row">
				<img class="location-pin" src="../assets/location_pin.png" alt="location_pin" />
				<p>
					{{
						$store.state.language === 'RU'
							? '143405, Россия, Московская обл., г. Красногорск, Ильинское шоссе, д.15, на территории завода "Бецема"'
							: '143405, Russia, Moscow region, Krasnogorsk, Ilyinskoe highway, 15, on the territory of the plant "Betsema"'
					}}
				</p>
			</div>
			<div id="mymap"></div>
			<a class="btn yandex-href" href="https://yandex.ru/maps/?rtext=~55.809879, 37.335034"
				><p>
					{{
						$store.state.language === 'RU'
							? 'Построить маршрут в Яндекс.Карты'
							: 'Build a route in Yandex.Maps'
					}}
				</p></a
			>

			<div class="main-contacts flex-row">
				<div class="main-contacts-card flex-column">
					<a href="tel:+78005557457">
						<h5>{{ $store.state.language === 'RU' ? 'Общий:' : 'General:' }}</h5>
						<p>8-800-555-74-57</p>
					</a>
					<a href="tel:+74955618478">
						<h5>{{ $store.state.language === 'RU' ? 'Сервисная служба:' : 'Customer Service:' }}</h5>
						<p>+7 (495) 561-8478</p>
					</a>
					<a href="tel:+74955638634">
						<h5>{{ $store.state.language === 'RU' ? 'Отдел запчастей:' : 'Spare Parts Department:' }}</h5>
						<p>+7 (495) 563-8634</p>
					</a>
				</div>
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Секретарь:' : 'Secretary:' }}</h5>
						<p>
							<a href="tel:+74955622429">+7 (495) 562-2429</a>,
							<a href="tel:+74955618482">561-8482</a>
						</p>
					</div>
					<div>
						<h5>
							{{
								$store.state.language === 'RU'
									? 'Коммерческий отдел и отдел продаж:'
									: 'Commercial and Sales Department:'
							}}
						</h5>
						<p>
							<a href="tel:+74955808102">+7 (495) 580-8102</a>, <a href="tel:+74955621383">562-1383</a>;
							<a href="tel:+79857693882">+7 (985) 769-3882</a>
						</p>
					</div>
					<a href="tel:+74955620496">
						<h5>{{ $store.state.language === 'RU' ? 'Отдел снабжения:' : 'Supply Department:' }}</h5>
						<p>+7 (495) 562-0496</p>
					</a>
				</div>
				<div class="main-contacts-card flex-column">
					<a href="tel:+74955612811">
						<h5>{{ $store.state.language === 'RU' ? 'Бухгалтерия:' : 'Accounting:' }}</h5>
						<p>+7 (495) 561-2811</p>
					</a>
					<a href="mailto:company@bestrom.ru">
						<h5>E-mail:</h5>
						<p>company@bestrom.ru</p>
					</a>
				</div>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Дилеры' : 'Dealers' }}</h3>
			<div class="dilers flex-row">
				<div class="dilers-card">
					<p>
						{{
							$store.state.language === 'RU' ? 'Бестром - Россия (Сибирь)' : 'Bestrom - Russia (Siberia)'
						}}
					</p>
					<p>{{ $store.state.language === 'RU' ? 'г. Барнаул' : 'Barnaul' }}</p>
					<p>
						<a href="tel:+73852624137"
							><b>{{ $store.state.language === 'RU' ? 'Телефон:' : 'Telephone:' }}</b> +7(3852) 624 137</a
						>
					</p>
					<p>
						<b>{{ $store.state.language === 'RU' ? 'Телефон:' : 'Telephone:' }}</b
						><a href="tel:+79039488388">+7(903) 948 83 88</a>;
						<a href="tel:+79132238637">+7(913) 223 86 37</a>
					</p>
					<p>
						<a href="mailto:or_bestrom@mail.ru"><b>E-mail:</b> or_bestrom@mail.ru</a>
					</p>
					<p>
						<a href="https://bestrom-sibir.com"
							><b>{{ $store.state.language === 'RU' ? 'Сайт:' : 'Site:' }}</b> https://bestrom-sibir.com</a
						>
					</p>
					<br />
					<p>
						{{
							$store.state.language === 'RU'
								? '656015, г. Барнаул, пр-т Социалистический 109, офис 408'
								: '656015, Barnaul, 109 Socialist Ave., office 408'
						}}
					</p>
					<br />
					<p>
						<b>{{
							$store.state.language === 'RU'
								? 'Контактное лицо: Захарьящева Наталья'
								: 'Contact person: Natalia Zakharyasheva'
						}}</b>
					</p>
				</div>
				<div class="dilers-card">
					<p>
						{{
							$store.state.language === 'RU'
								? 'Представительство в Республике Беларусь'
								: 'Representative office in the Republic of Belarus'
						}}
					</p>
					<p>{{ $store.state.language === 'RU' ? 'г. Минск' : 'Minsk' }}</p>
					<p>
						<a href="tel:+70173121185"
							><b>{{ $store.state.language === 'RU' ? 'Телефон:' : 'Telephone:' }}</b> 8 017 312 11 85</a
						>
					</p>
					<p>
						<a href="tel:+375173121186"
							><b>{{ $store.state.language === 'RU' ? 'Телефон:' : 'Telephone:' }}</b> +375(17) 312 11
							86</a
						>
					</p>
					<p>
						<a href="mailto:info@btes.by"><b>E-mail:</b> info@btes.by</a>
					</p>
					<p>
						<a href="http://www.btes.by"
							><b>{{ $store.state.language === 'RU' ? 'Сайт:' : 'Site:' }}</b> http://www.btes.by</a
						>
					</p>
					<br />
					<p>
						{{
							$store.state.language === 'RU'
								? 'ЧПУП «БелТрансЭнергоСервис»'
								: 'NPUP "BelTransEnergoService"'
						}}
					</p>
					<p>
						{{
							$store.state.language === 'RU'
								? 'Адрес: РБ, 220140, г. Минск, ул. Притыцкого, 62.'
								: 'Address: RB, 220140, Minsk, Prytytskogo str., 62.'
						}}
					</p>
					<br />
					<p>
						<b>{{
							$store.state.language === 'RU'
								? 'Контактное лицо: Валерий Сайко'
								: 'Contact person: Valery Saiko'
						}}</b>
					</p>
				</div>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Социальные сети' : 'Social network' }}</h3>
			<div class="social flex-row">
				<a href="https://vk.com" class="social-logo">
					<img style="width: 33px" src="../assets/vk.png" alt="menu-item-img" />
				</a>
				<a href="https://youtube.com" class="social-logo">
					<img style="width: 25px" src="../assets/youtube.png" alt="menu-item-img" />
				</a>
				<a href="https://instagram.com" class="social-logo">
					<img style="width: 30px" src="../assets/instagram.png" alt="menu-item-img" />
				</a>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Мессенджеры' : 'Messengers' }}</h3>
			<div style="border: none" class="social flex-row">
				<a href="" class="social-logo">
					<img src="../assets/whatsapp.png" alt="whatsapp" />
				</a>
				<a href="" class="social-logo">
					<img src="../assets/telegram.png" alt="telegram" />
				</a>
				<a href="" class="social-logo">
					<img src="../assets/viber.png" alt="viber" />
				</a>
				<a href="" class="social-logo">
					<img src="../assets/email.png" alt="email" />
				</a>
			</div>

			<div class="call-buttons flex-row">
				<button class="btn" @click="$emit('call')">
					{{ $store.state.language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'ORDER A CALL' }}
				</button>
				<button class="btn" @click="$emit('question')">
					{{ $store.state.language === 'RU' ? 'ЗАДАТЬ ВОПРОС' : 'ASK A QUESTION' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppModalMenuContacts',
	emits: ['close', 'call', 'question'],
	setup() {
		const computedMeta = computed(() => ({
			script: [
				{
					src: 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab23d25421decd66ecb2e0401df4649a9fbbf12bca068dbbafcf6dde799fd92e3&amp;width=100%25&amp;height=500&amp;id=mymap&amp&lang=ru_RU&amp;scroll=true',
				},
			],
		}))
		useMeta(computedMeta)
	},
}
</script>

<style scoped>
.header-title {
	margin-top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
}
.header-title h1 {
	margin: 1rem 0;
}
.logo-img {
	max-width: 2rem;
	margin-right: 0.5rem;
}
.location-pin {
	align-self: center;
	margin-right: 0.5rem;
}
.main-contacts {
	margin: 1rem -1rem 2rem -1rem;
	border-bottom: 2px solid #6a6a6a;
}
.yandex-href {
	width: 90%;
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
}
.main-contacts-card {
	width: 30%;
	justify-content: space-between;
	margin: 1rem 1rem;
}
.main-contacts-card h5 {
	margin: 0;
}
.main-contacts-card p {
	margin: 0.5rem 0 1rem 0;
}
.dilers {
	margin: 2rem -1rem;
	padding-bottom: 2rem;
	border-bottom: 2px solid #6a6a6a;
}
.dilers-card {
	width: 45%;
	margin: 0 1rem;
}
.dilers-card p {
	margin: 0;
}
.social {
	margin: 1rem -1rem;
	justify-content: flex-start;
	padding-bottom: 1rem;
	border-bottom: 2px solid #6a6a6a;
}
.social-logo {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	background: #6a6a6a;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	margin: 1rem 1rem;
}
.social-logo:hover {
	transition: all 0.5s;
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.call-buttons {
	margin: 0 -1rem 1rem -1rem;
}
.call-buttons .btn {
	margin: 0 1rem;
	flex-grow: 1;
}

@media (max-width: 980px) {
	.main-contacts {
		flex-direction: column;
		border-bottom: 2px solid #2fc1ff;
	}
	.main-contacts-card {
		margin: 0 1rem;
		width: 100%;
	}
	.yandex-href {
		width: 80%;
		padding: 0.5rem 1rem;
	}
	.yandex-href p {
		text-align: center;
	}
	.dilers {
		flex-direction: column;
		border-bottom: 2px solid #2fc1ff;
		padding-bottom: 0;
		margin-bottom: 1rem;
	}
	.dilers-card {
		margin: 0 1rem 1rem 1rem;
		width: 90%;
	}
	.social {
		border-bottom: none;
		margin: 0.5rem -1rem 0 -1rem;
	}
	.call-buttons {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 -1rem;
	}
	.call-buttons .btn {
		margin: 0 1rem 1rem 1rem;
		width: 100%;
	}
}
</style>
