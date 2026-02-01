<template>
	<div class="modal-background">
		<div class="close-background" @click="$emit('close')" />
		<div class="modal-window contacts card-shadow flex-column">
			<button class="close" type="button" @click="$emit('close')">
				<img src="/assets/close-image.png" alt="close" />
			</button>

			<div class="header-title">
				<img class="logo-img" src="/assets/bestrom_logo.png" alt="bestrom logo" />
				<h1>{{ language === 'RU' ? 'БЕСТРОМ' : 'BESTROM' }}</h1>
			</div>

			<h3>{{ language === 'RU' ? 'Головной офис' : 'Head Office' }}</h3>

			<div class="flex-row">
				<img class="location-pin" src="/assets/location_pin.png" alt="location" />
				<p v-if="content.length > 0">
					{{
						language === 'RU'
							? content.find((e) => e.name === 'Головной офис')?.text
							: content.find((e) => e.name === 'Головной офис')?.text_en
					}}
				</p>
			</div>
			<iframe
				title="Bestrom map"
				src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;um=constructor%3Ab23d25421decd66ecb2e0401df4649a9fbbf12bca068dbbafcf6dde799fd92e3"
				frameborder="0"
				allowfullscreen="true"
				width="100%"
				height="100%"
				style="display: block"></iframe>
			<a class="btn yandex-href" href="https://yandex.ru/maps/?rtext=~55.809879, 37.335034">
				<p>
					{{ language === 'RU' ? 'Построить маршрут в Яндекс.Карты' : 'Build a route in Yandex.Maps' }}
				</p>
			</a>

			<div v-if="content.length > 0" class="main-contacts flex-row">
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ language === 'RU' ? 'Общий:' : 'General:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Общий')?.text }}</p>
					</div>
					<div>
						<h5>{{ language === 'RU' ? 'Сервисная служба:' : 'Customer Service:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Сервисная служба')?.text }}</p>
					</div>
					<div>
						<h5>{{ language === 'RU' ? 'Отдел запчастей:' : 'Spare Parts Department:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Отдел запчастей')?.text }}</p>
					</div>
				</div>
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ language === 'RU' ? 'Секретарь:' : 'Secretary:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Секретарь')?.text }}</p>
					</div>
					<div>
						<h5>
							{{ language === 'RU' ? 'Коммерческий отдел и отдел продаж:' : 'Commercial and Sales Department:' }}
						</h5>
						<p>{{ content.find((e) => e.name === 'Коммерческий отдел и отдел продаж')?.text }}</p>
					</div>
					<div>
						<h5>{{ language === 'RU' ? 'Отдел снабжения:' : 'Supply Department:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Отдел снабжения')?.text }}</p>
					</div>
				</div>
				<div class="main-contacts-card flex-column">
					<div>
						<h5>{{ language === 'RU' ? 'Бухгалтерия:' : 'Accounting:' }}</h5>
						<p>{{ content.find((e) => e.name === 'Бухгалтерия')?.text }}</p>
					</div>
					<div>
						<h5>E-mail:</h5>
						<p>{{ content.find((e) => e.name === 'E-mail')?.text }}</p>
					</div>
					<div>
						<h5>{{ language === 'RU' ? 'Реквизиты' : 'Requisites' }}:</h5>
						<p>
							<NuxtLink to="/requisites">
								{{ language === 'RU' ? 'Посмотреть реквизиты' : 'View Requisites' }}
							</NuxtLink>
						</p>
					</div>
				</div>
			</div>

			<h3>{{ language === 'RU' ? 'Дилеры' : 'Dealers' }}</h3>
			<div v-if="content.length > 0" class="dilers flex-row">
				<div class="dilers-card">
					<p v-html="dealersRu('Дилеры Сибирь', 'Дилеры Сибирь')" />
				</div>
				<div class="dilers-card">
					<p v-html="dealersRu('Дилеры Беларусь', 'Дилеры Беларусь')" />
				</div>
			</div>

			<h3>{{ language === 'RU' ? 'Социальные сети' : 'Social network' }}</h3>
			<div v-if="content.length > 0" class="social flex-row">
				<a :href="content.find((e) => e.name === 'vk')?.text || 'https://vk.com/bestrom_official'" class="social-logo">
					<img src="/assets/vk.png" alt="VK" />
				</a>
				<a
					:href="content.find((e) => e.name === 'telegram')?.text || 'https://t.me/bestrom_official'"
					class="social-logo">
					<img src="/assets/telegram.png" alt="Telegram" />
				</a>
				<a href="https://rutube.ru/channel/38819375/" class="social-logo">
					<img src="/assets/rutube1.png" alt="Rutube" />
				</a>
			</div>

			<div class="call-buttons flex-row">
				<button class="btn" @click="$emit('call')">
					{{ language === 'RU' ? 'ЗАКАЗАТЬ ЗВОНОК' : 'ORDER A CALL' }}
				</button>
				<button class="btn" @click="$emit('question')">
					{{ language === 'RU' ? 'ЗАДАТЬ ВОПРОС' : 'ASK A QUESTION' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { usePageStore } from '~/stores/page'

defineEmits(['close', 'call', 'question'])

const appStore = useAppStore()
const pageStore = usePageStore()
const { language } = storeToRefs(appStore)

const content = computed(() => pageStore.pageId?.[0]?.blocks?.find((e) => e.name === 'contacts')?.contents || [])

const dealersRu = (ruName: string, enName: string) => {
	const block = content.value.find((e: any) => e.name === ruName)
	const text = language.value === 'RU' ? block?.text : block?.text_en
	return (text || '').replaceAll('\n', '<br />')
}

onMounted(() => {
	pageStore.loadPage(1)
})
</script>

<style scoped>
.header-title {
	margin-top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
	gap: 0.75rem;
}
.logo-img {
	width: 32px;
	height: 32px;
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
	gap: 0.75rem;
}

.social-logo {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	background: #6a6a6a;
	color: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	font-weight: 600;
}
.social-logo img {
	width: 24px;
	height: 24px;
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
