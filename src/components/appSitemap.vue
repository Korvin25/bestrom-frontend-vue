<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<div class="sitemap-container">
			<h2 class="sitemap-title">
				{{ $store.state.language === 'RU' ? 'Карта сайта' : 'Sitemap' }}
			</h2>
			<nav class="sitemap-nav">
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Главная' : 'Home' }}</h3>
					<ul>
						<li><a href="/">{{ $store.state.language === 'RU' ? 'Главная страница' : 'Home page' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'О компании' : 'About' }}</h3>
					<ul>
						<li><a href="/about">{{ $store.state.language === 'RU' ? 'О компании' : 'About us' }}</a></li>
						<li><a href="/about/history">{{ $store.state.language === 'RU' ? 'История компании' : 'Company history' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Новости' : 'News' }}</h3>
					<ul>
						<li><a href="/news">{{ $store.state.language === 'RU' ? 'Все новости' : 'All news' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Каталог' : 'Catalog' }}</h3>
					<ul>
						<li><a href="/catalog">{{ $store.state.language === 'RU' ? 'Все оборудование' : 'All equipment' }}</a></li>
						<li><a href="/catalog/type/podbor-po-tipu-mashiny/">{{ $store.state.language === 'RU' ? 'Подбор по типу машины' : 'Selection by machine type' }}</a></li>
						<li><a href="/catalog/type/podbor-po-tipu-upakovki/">{{ $store.state.language === 'RU' ? 'Подбор по типу упаковки' : 'Selection by packaging type' }}</a></li>
						<li><a href="/catalog/type/podbor-po-tipu-produkta/">{{ $store.state.language === 'RU' ? 'Подбор по типу продукта' : 'Selection by product type' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Сервис' : 'Service' }}</h3>
					<ul>
						<li><a href="/cutting">{{ $store.state.language === 'RU' ? 'Раскрой пакета' : 'Uncover the package' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Вакансии' : 'Jobs' }}</h3>
					<ul>
						<li><a href="/jobs">{{ $store.state.language === 'RU' ? 'Все вакансии' : 'All jobs' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Партнеры' : 'Partners' }}</h3>
					<ul>
						<li><a href="/partners">{{ $store.state.language === 'RU' ? 'Наши партнеры' : 'Our partners' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Клиенты' : 'Clients' }}</h3>
					<ul>
						<li><a href="/clients">{{ $store.state.language === 'RU' ? 'Наши клиенты' : 'Our clients' }}</a></li>
					</ul>
				</div>
				
				<div class="sitemap-section">
					<h3>{{ $store.state.language === 'RU' ? 'Документы' : 'Documents' }}</h3>
					<ul>
						<li><a href="/requisites">{{ $store.state.language === 'RU' ? 'Реквизиты компании' : 'Company details' }}</a></li>
						<li><a href="/politic">{{ $store.state.language === 'RU' ? 'Политика конфиденциальности' : 'Privacy policy' }}</a></li>
					</ul>
				</div>
			</nav>
		</div>
	</main>
	<app-footer></app-footer>
</template>

<script>
import appFooter from '@/components/appFooter.vue';
import appHeader from '@/components/appHeader.vue';

export default {
	name: 'AppSitemap',
	components: {
		appHeader,
		appFooter,
	},
}
</script>

<style scoped>
.main-content {
	margin: 4rem 0 0 0;
	max-width: 1200px;
	margin: 0 auto;
}

.sitemap-container {
	padding: 0 2rem;
}

.sitemap-title {
	text-align: center;
	margin-bottom: 2rem;
	font-size: 2rem;
	color: #2fc1ff;
	font-weight: 600;
}

.sitemap-nav {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
}

.sitemap-section {
	background: #ffffff;
	padding: 1.5rem;
	border-radius: 6px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.sitemap-section h3 {
	margin-top: 0;
	margin-bottom: 1rem;
	color: #2fc1ff;
	font-size: 1.25rem;
	font-weight: 600;
}

.sitemap-section ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.sitemap-section li {
	margin-bottom: 0.75rem;
}

.sitemap-section a {
	color: #6a6a6a;
	text-decoration: none;
	transition: color var(--transition-duration, 0.3s) ease;
	display: inline-block;
}

.sitemap-section a:hover {
	color: #2fc1ff;
	text-decoration: underline;
}

@media (max-width: 768px) {
	.sitemap-nav {
		grid-template-columns: 1fr;
	}
	
	.sitemap-container {
		padding: 0 1rem;
	}
	
	.sitemap-title {
		margin-bottom: 2rem;
		font-size: 1.75rem;
	}
}
</style>