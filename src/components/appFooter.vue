<template>
	<footer class="footer flex-row">
		<p>
			{{
				$store.state.language === 'RU'
					? '© ЗАО "Бестром" 2021, упаковочное оборудование'
					: '© ZAO "Bestrom" 2021, packaging equipment'
			}}
		</p>
		<p><a href="tel:+78005557457">+7-800-555-74-57</a></p>
		<p>{{ $store.state.language === 'RU' ? 'ПРЕСС-ЦЕНТР' : 'PRESS CENTER' }}</p>
	</footer>
	<!-- /.footer -->
</template>

<script>
export default {
	name: 'AppFooter',
}
</script>

<style scoped>
.footer {
	justify-content: flex-start;
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
		padding: 0 1rem;
		margin: 1rem 0 5rem 0;
	}
	.footer p {
		margin: 0 0 1rem 0;
	}
}
</style>
