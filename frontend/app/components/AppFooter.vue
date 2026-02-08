<template>
	<footer class="footer flex-row">
		<p>
			{{
				language === 'RU'
					? `© ЗАО "Бестром" ${new Date().getFullYear()}, упаковочное оборудование`
					: `© ZAO "Bestrom" ${new Date().getFullYear()}, packaging equipment`
			}}
		</p>
		<p>
			<NuxtLink to="/requisites">
				{{ language === 'RU' ? 'Реквизиты организации' : 'Organization Requisites' }}
			</NuxtLink>
		</p>
		<p><a href="tel:+78005557457">+7-800-555-74-57</a></p>
		<p class="politic">
			<NuxtLink to="/politic">
				{{ language === 'RU' ? 'Политика конфиденциальности' : 'Privacy policy' }}
			</NuxtLink>
		</p>
	</footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
</script>

<style scoped>
.politic {
	margin-left: auto;
}
.footer {
	justify-content: flex-start;
	padding: 1rem 0 2rem 0;
	border-top: 1px solid rgba(47, 193, 255, 0.2);
	margin-top: 2rem;
}
.footer p {
	margin-right: 4rem;
}
@media (max-width: 980px) {
	.footer {
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		padding: 1rem;
		margin: 1rem 0 5rem 0;
	}
	.footer p {
		margin: 0 0 1rem 0;
	}
	.politic {
		margin-left: 0;
	}
}
</style>
