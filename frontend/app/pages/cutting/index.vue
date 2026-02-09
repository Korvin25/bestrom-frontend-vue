<template>
	<div v-if="page" class="cutting-page">
		<!-- Тип пакета -->
		<section v-if="packets.length > 0" id="packetType" class="section">
			<h2>{{ language === 'RU' ? 'Тип пакета' : 'Package type' }}</h2>

			<!-- Мобильный слайдер -->
			<div class="packet-mobile">
				<div class="packet-slider">
					<div ref="packetTrack" class="packet-track">
						<template v-for="packet in activePackets" :key="packet.essid">
							<a
								:class="{ 'check-item': checkType === packet.essid }"
								class="packet-type-item flex-column card-shadow"
								href="#packetSeam"
								@click.prevent="selectType(packet.essid)">
								<div class="hidden-overlay" />
								<img :src="resolveImage(packet.img)" :alt="packet.alt" />
								<p>{{ language === 'RU' ? packet.name : packet.name_en }}</p>
							</a>
						</template>
					</div>
				</div>
			</div>

			<!-- Десктопная сетка -->
			<div class="packet-desktop packet-type flex-row">
				<div
					v-for="packet in activePackets"
					:key="packet.essid"
					:class="{ 'check-item': checkType === packet.essid }"
					class="packet-type-item flex-column card-shadow">
					<a href="#packetSeam" @click.prevent="selectType(packet.essid)">
						<h3>{{ language === 'RU' ? packet.name : packet.name_en }}</h3>
						<img :src="resolveImage(packet.img)" :alt="packet.alt" />
						<div class="hidden-overlay" />
					</a>
				</div>
			</div>
		</section>

		<!-- Тип шва -->
		<section v-if="packetsSeams.length > 0" id="packetSeam" class="section">
			<h2>{{ language === 'RU' ? 'Тип шва' : 'Seam type' }}</h2>
			<div class="packets-seam flex-row card-shadow">
				<div
					v-for="seam in packetsSeams"
					:key="seam.essid"
					:class="{ 'check-item': checkSeam === seam.essid }"
					class="packets-seam-item flex-column card-shadow"
					@click="selectSeam(seam.essid)">
					<div class="hidden-overlay" />
					<img :src="resolveImage(seam.img)" :alt="seam.alt" />
					<p>{{ language === 'RU' ? seam.name : seam.name_en }}</p>
				</div>
			</div>
		</section>

		<!-- Кнопка подбора -->
		<div class="router-button">
			<button class="cutting-btn btn" type="button" @click="routerPush">
				{{ language === 'RU' ? 'Подобрать' : 'Pick up' }}
			</button>
		</div>

		<!-- Блоки страницы -->
		<PageBlocks
			v-if="page.blocks?.length"
			:blocks="page.blocks"
			:language="language"
			:media-base="mediaBase" />

		<!-- Модальные окна -->
		<Transition name="modal">
			<AppModalCuttingAlert
				v-if="modalAlert.show"
				:text="modalAlert.text"
				@close="modalAlert.show = false" />
		</Transition>
		<Transition name="modal">
			<AppModalCuttingPickUp
				v-if="showModalCuttingPickUp"
				@close="showModalCuttingPickUp = false" />
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
import { usePacketsStore } from '~/stores/packets'
import { useSeoFromPage } from '~/composables/useSeoFromPage'

// --- Типы ---
interface PacketItem {
	essid: number
	name: string
	name_en?: string
	img?: string
	alt?: string
	active?: boolean
}

interface SeamItem {
	essid: number
	name: string
	name_en?: string
	img?: string
	alt?: string
}

interface PageData {
	title?: string
	title_en?: string
	description?: string
	description_en?: string
	seo_title?: string
	seo_title_en?: string
	seo_description?: string
	seo_description_en?: string
	blocks?: any[]
}

// --- Сторы ---
const appStore = useAppStore()
const packetsStore = usePacketsStore()
const { language, serverMedia } = storeToRefs(appStore)
const config = useRuntimeConfig()
const router = useRouter()

// --- Получение данных страницы ---
const { data: pageData } = await useFetch<PageData[]>(`${config.public.apiBase}page/5/`)
const page = computed<PageData | null>(() => pageData.value?.[0] ?? null)
useSeoFromPage(page, language)

const mediaBase = computed(() => serverMedia.value || config.public.mediaBase)

// --- Вспомогательные функции ---
const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${mediaBase.value}${src.replace(/^\//, '')}`
}

// --- Загрузка пакетов и швов ---
const { packets, packetsSeams } = storeToRefs(packetsStore)

onMounted(async () => {
	if (packets.value.length === 0) {
		await packetsStore.loadPackets()
	}
	if (packetsSeams.value.length === 0) {
		await packetsStore.loadPacketsSeams()
	}
})

// --- Активные пакеты (только с active === true) ---
const activePackets = computed<PacketItem[]>(() =>
	(packets.value as PacketItem[]).filter((p) => p.active),
)

// --- Состояние выбора ---
const checkType = ref(0)
const checkSeam = ref(0)
const showModalCuttingPickUp = ref(false)
const modalAlert = ref({
	show: false,
	text: '',
})

// --- Блокировка прокрутки при открытии модалки ---
watch(showModalCuttingPickUp, (isOpen) => {
	if (import.meta.client) {
		document.body.classList.toggle('modal-open', isOpen)
	}
})

// --- Плавная прокрутка к элементу ---
const smoothScrollTo = (elementId: string) => {
	if (!import.meta.client) return
	const el = document.getElementById(elementId)
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

// --- Выбор типа пакета ---
const selectType = (essid: number) => {
	checkType.value = essid
	nextTick(() => smoothScrollTo('packetSeam'))
}

// --- Выбор типа шва с валидацией ---
const selectSeam = (essid: number) => {
	if (checkType.value === 0) {
		modalAlert.value.text =
			language.value === 'RU'
				? 'Сначала выберите тип пакета!!!'
				: 'First select the type of package !!!'
		modalAlert.value.show = true
		smoothScrollTo('packetType')
	} else {
		checkSeam.value = essid
	}
}

// --- Навигация с валидацией ---
const routerPush = () => {
	if (checkType.value === null) {
		// Открыть форму «Подобрать раскрой»
		showModalCuttingPickUp.value = true
	} else if (checkType.value !== 0 && checkSeam.value !== 0) {
		// Перейти к расчёту
		router.push(`/cutting/${checkType.value}/${checkSeam.value}`)
		if (import.meta.client) {
			window.scrollTo(0, 0)
		}
	} else if (checkType.value === 0) {
		modalAlert.value.text =
			language.value === 'RU'
				? 'Сначала выберите тип пакета!!!'
				: 'First select the type of package !!!'
		modalAlert.value.show = true
		smoothScrollTo('packetType')
	} else if (checkSeam.value === 0) {
		modalAlert.value.text =
			language.value === 'RU'
				? 'Сначала выберите тип шва!!!'
				: 'First select the type of seam !!!'
		modalAlert.value.show = true
		smoothScrollTo('packetSeam')
	}
}
</script>

<style scoped>
.cutting-page {
	width: 100%;
}
.hero {
	padding: 2rem;
	margin-bottom: 2rem;
}
.packet-type {
	flex-wrap: wrap;
	margin: 0 -1rem;
}
.packet-type-item {
	position: relative;
	width: 11rem;
	flex-grow: 1;
	margin: 1rem;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
	border-radius: 16px;
	border: 1px solid rgba(0, 0, 0, 0.04);
	transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.packet-type-item:hover {
	transform: translateY(-4px);
	border-color: rgba(47, 193, 255, 0.35);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
.packet-type-item a {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: inherit;
	width: 100%;
}
.packet-type-item h3 {
	margin-bottom: 1rem;
	align-self: normal;
}
.packet-type-item img,
.packets-seam-item img {
	max-width: 10rem;
}
.packets-seam {
	padding: 1rem;
	flex-wrap: wrap;
}
.packets-seam-item {
	position: relative;
	margin: 1rem;
	width: 8rem;
	flex-grow: 1;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
	border-radius: 16px;
	border: 1px solid rgba(0, 0, 0, 0.04);
	transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.packets-seam-item:hover {
	transform: translateY(-4px);
	border-color: rgba(47, 193, 255, 0.35);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
.packets-seam-item p {
	font-size: 1.2rem;
	margin: 2rem 0 1rem 0;
}
.cutting-btn {
	width: auto;
	height: auto;
	padding: 0.75rem 2.5rem;
	font-size: 1.5rem;
	border-radius: 999px;
	background: linear-gradient(135deg, #38bdf8, #2fc1ff);
	box-shadow: 0 12px 24px rgba(56, 189, 248, 0.35);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.cutting-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 16px 30px rgba(56, 189, 248, 0.45);
}
.router-button {
	margin: 2rem 0;
	align-self: center;
	display: flex;
	justify-content: center;
}
.check-item {
	transition: all 0.3s ease;
	background: #ffffff;
	box-shadow: 0 4px 16px 4px rgba(47, 193, 255, 0.5);
	border-color: rgba(47, 193, 255, 0.6);
	border-radius: 16px;
}
.hidden-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	cursor: pointer;
	background: linear-gradient(135deg, rgba(14, 165, 233, 0.7), rgba(59, 130, 246, 0.7));
	border-radius: 16px;
	transition: opacity 0.25s ease;
	opacity: 0;
	z-index: 1;
}
.packet-type-item:hover .hidden-overlay,
.packets-seam-item:hover .hidden-overlay {
	opacity: 1;
}

/* Мобильный слайдер */
.packet-slider {
	position: relative;
}
.packet-track {
	display: flex;
	gap: 1rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	padding: 1rem 0;
	scrollbar-width: none;
}
.packet-track::-webkit-scrollbar {
	display: none;
}
.packet-track .packet-type-item {
	flex: 0 0 70%;
	scroll-snap-align: center;
	margin: 0;
}

/* Десктоп / мобайл переключение */
.packet-desktop {
	display: flex;
}
.packet-mobile {
	display: none;
}

@media (max-width: 980px) {
	.packet-desktop {
		display: none;
	}
	.packet-mobile {
		display: block;
	}
	h2 {
		margin-bottom: 0;
	}
	.flex-row {
		flex-wrap: wrap;
	}
	.packet-type-item {
		align-self: stretch;
		margin: 0.5rem;
	}
	.packets-seam {
		padding: 0;
		box-shadow: none;
	}
	.packets-seam-item {
		margin: 0.5rem;
		align-items: center;
		width: 40%;
		flex-grow: 1;
	}
	.router-button {
		width: 100%;
	}
	.cutting-btn {
		font-size: 20px;
		width: 90%;
	}
	.packet-type-item:hover .hidden-overlay,
	.packets-seam-item:hover .hidden-overlay {
		opacity: 0;
	}
}

@media (max-width: 675px) {
	.packet-type-item img,
	.packets-seam-item img {
		width: 4rem;
	}
	.packets-seam-item {
		width: 30%;
	}
	.packets-seam-item p {
		font-size: 14px;
	}
}
</style>
