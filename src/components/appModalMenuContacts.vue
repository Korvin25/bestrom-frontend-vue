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
				<p v-if="content.length > 0">
					{{
						$store.state.language === 'RU'
							? content.find((e) => e.name === 'Головной офис').text
							: content.find((e) => e.name === 'Головной офис').text_en
					}}
				</p>
			</div>
			<!-- <div id="mymap"></div> -->
			<iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;um=constructor%3Ab23d25421decd66ecb2e0401df4649a9fbbf12bca068dbbafcf6dde799fd92e3" frameborder="0" allowfullscreen="true" width="100%" height="100%" style="display: block;"></iframe>
			<a class="btn yandex-href" href="https://yandex.ru/maps/?rtext=~55.809879, 37.335034"
				><p>
					{{
						$store.state.language === 'RU'
							? 'Построить маршрут в Яндекс.Карты'
							: 'Build a route in Yandex.Maps'
					}}
				</p></a
			>

			<div v-if="content.length > 0" class="main-contacts flex-row">
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Общий:' : 'General:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Общий').text }}</p>
					</div>
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Сервисная служба:' : 'Customer Service:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Сервисная служба').text }}</p>
					</div>
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Отдел запчастей:' : 'Spare Parts Department:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Отдел запчастей').text }}</p>
					</div>
				</div>
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Секретарь:' : 'Secretary:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Секретарь').text }}</p>
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
							{{ content.find((e) => e.name === 'Коммерческий отдел и отдел продаж').text }}
						</p>
					</div>
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Отдел снабжения:' : 'Supply Department:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Отдел снабжения').text }}</p>
					</div>
				</div>
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ $store.state.language === 'RU' ? 'Бухгалтерия:' : 'Accounting:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Бухгалтерия').text }}</p>
					</div>
					<div>
						<h5>E-mail:</h5>
						<p>{{ content.find((e) => e.name === 'E-mail').text }}</p>
					</div>
				</div>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Дилеры' : 'Dealers' }}</h3>
			<div v-if="content.length > 0" class="dilers flex-row">
				<div class="dilers-card">
					<p
						v-html="
							$store.state.language === 'RU'
								? content.find((e) => e.name === 'Дилеры Сибирь').text.replaceAll('\n', '<br />')
								: content.find((e) => e.name === 'Дилеры Сибирь').text_en.replaceAll('\n', '<br />')
						"></p>
				</div>
				<div class="dilers-card">
					<p
						v-html="
							$store.state.language === 'RU'
								? content.find((e) => e.name === 'Дилеры Беларусь').text.replaceAll('\n', '<br />')
								: content.find((e) => e.name === 'Дилеры Беларусь').text_en.replaceAll('\n', '<br />')
						"></p>
				</div>
			</div>

			<h3>{{ $store.state.language === 'RU' ? 'Социальные сети' : 'Social network' }}</h3>
			<div v-if="content.length > 0" class="social flex-row"  style="border: none">
				<a :href="content.find((e) => e.name === 'vk').text" class="social-logo network">
					<img style="width: 33px" src="../assets/vk.png" alt="menu-item-img" />
				</a>
				<a :href="content.find((e) => e.name === 'telegram').text" class="social-logo network">
					<img style="width: 25px" src="../assets/telegram.png" alt="menu-item-img" />
				</a>
				<a href="https://rutube.ru/channel/38819375/" class="social-logo network">
					<img style="width: 25px" src="../assets/rutube1.png" alt="menu-item-img" />
				</a>
			</div>

			<!-- <h3>{{ $store.state.language === 'RU' ? ' Напишите нам' : 'Write to us' }}</h3>
			<div v-if="content.length > 0" style="border: none" class="social flex-row">
				<a :href="content.find((e) => e.name === 'whatsapp').text" class="social-logo messenger">
					<img src="../assets/whatsapp.png" alt="whatsapp" />
				</a>
				<a :href="content.find((e) => e.name === 'telegram').text" class="social-logo messenger">
					<img src="../assets/telegram.png" alt="telegram" />
				</a>
				<a :href="content.find((e) => e.name === 'viber').text" class="social-logo messenger">
					<img src="../assets/viber.png" alt="viber" />
				</a>
				<a
					:href="'mailto:' + content.find((e) => e.name === 'E-mail').text"
					class="social-logo messenger">
					<img src="../assets/email.png" alt="email" />
				</a>
			</div> -->

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
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AppModalMenuContacts',
	emits: ['close', 'call', 'question'],
	// setup() {
	// 	const computedMeta = computed(() => ({
	// 		script: [
	// 			{
	// 				src: 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab23d25421decd66ecb2e0401df4649a9fbbf12bca068dbbafcf6dde799fd92e3&amp;width=100%25&amp;height=500&amp;id=mymap&amp&lang=ru_RU&amp;scroll=true',
	// 			},
	// 		],
	// 	}))
	// 	useMeta(computedMeta)
	// },
	data() {
		return {
			content: [],
		}
	},
	computed: {
		...mapGetters({
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	mounted() {
		this.GET_PAGE_ID(1).then(() => {
			this.content = this.PAGE_ID[0].blocks.find((e) => e.name === 'contacts').contents
		})
	},
	methods: {
		...mapActions({
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
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

.social-logo.network {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	background: #6a6a6a;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	margin: 1rem 1rem;
}
.social-logo.messenger {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	background: #6a6a6a;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	margin: 1rem 1.25rem;
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
