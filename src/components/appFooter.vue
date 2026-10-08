<template>
	<footer class="footer">
		<div class="footer-row flex-row">
			<p>
				{{
					$store.state.language === 'RU'
						? `© ЗАО "Бестром" ${new Date().getFullYear()}, упаковочное оборудование`
						: `© ZAO "Bestrom" ${new Date().getFullYear()}, packaging equipment`
				}}
			</p>
			<p>
				<a href="/requisites" target="_blank">
					{{ $store.state.language === 'RU' ? 'Реквизиты организации' : 'Organization Requisites' }}
				</a>
			</p>
			<!-- <p>{{ $store.state.language === 'RU' ? 'ПРЕСС-ЦЕНТР' : 'PRESS CENTER' }}</p> -->
			<p class="politic">
				<a href="/politic" target="_blank">
					{{ $store.state.language === 'RU' ? 'Политика конфиденциальности' : 'Privacy policy' }}
				</a>
			</p>
		</div>
		<div class="footer-row flex-row">
			<p>
				{{
					$store.state.language === 'RU'
						? '143405, Россия, Московская обл., г. Красногорск, Ильинское шоссе, д.15'
						: '15 Ilyinskoye Highway, Krasnogorsk, Moscow Region, Russia, 143405'
				}}
			</p>
			<p><a href="tel:+78005557457">+7-800-555-74-57</a></p>
		</div>
	</footer>
	<!-- /.footer -->
</template>

<script>
export default {
	name: 'AppFooter',
}
</script>

<style scoped>
.politic {
	margin-left: auto;
}
.footer-row {
	justify-content: flex-start;
}
.footer-row + .footer-row {
	margin-top: 0.5rem;
}
.footer p {
	margin-right: 4rem;
}
@media (max-width: 980px) {
	.footer-row {
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		align-items: center;
	}
	.footer {
		padding: 0 1rem;
		margin: 1rem 0 5rem 0;
	}
	.footer-row + .footer-row {
		margin-top: 0;
	}
	.politic {
		margin-left: 0;
	}
	.footer p {
		margin: 0 0 1rem 0;
	}
}
</style>

