<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<h2>Ошибка 404</h2>
		<h2>Страница не найдена</h2>
		<router-link to="/">Вернуться на главную</router-link>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'

export default {
	name: 'AppPage404',
	components: {
		appHeader,
		appFooter,
	},
}
</script>

<style scoped>
.main-content {
	align-items: center;
	margin: 7rem 0 3rem 0;
	gap: 3rem;
}
.main-content h2 {
	text-align: center;
	margin: 0;
	align-self: normal;
}
</style>
