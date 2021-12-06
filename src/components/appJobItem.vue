<template>
	<div class="desktop-section job-item flex-row card-shadow">
		<img :src="image" alt="job image" />
		<div class="flex-column job-item-description">
			<h4>{{ title }}</h4>
			<h5>{{ $store.state.language === 'RU' ? 'Основные требования:' : 'Primary requirements:' }}</h5>
			<p>{{ requirements }}</p>
			<h5>{{ $store.state.language === 'RU' ? 'Основные навыки:' : 'Basic skills:' }}</h5>
			<p>{{ skills }}</p>
		</div>
		<div class="flex-column job-item-pay">
			<h4>{{ $store.state.language === 'RU' ? 'Заработная плата' : 'Salary' }}</h4>
			<p>{{ pay }}</p>
			<button class="btn" @click="routerPush(alt)">
				{{ $store.state.language === 'RU' ? 'Подробнее' : 'More details' }}
			</button>
		</div>
	</div>
	<!-- ./desktop-section -->
</template>

<script>
export default {
	name: 'AppJobItem',
	props: {
		alt: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		requirements: {
			type: String,
			default: '',
		},
		skills: {
			type: String,
			default: '',
		},
		pay: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
	},
	methods: {
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(`/jobs/${path}`)
		},
	},
}
</script>

<style scoped>
.job-item {
	margin: 1rem 0;
	padding: 2rem 3rem;
}
.job-item img {
	align-self: center;
	width: 100%;
	max-width: 11rem;
}
.job-item-description {
	width: 100%;
	margin: 0 2rem;
}
.job-item-description h4 {
	margin: 0;
	padding-bottom: 1rem;
	border-bottom: 1px solid #2fc1ff;
}
.job-item-description h5 {
	margin: 1rem 0;
}
.job-item-description p {
	margin: 0;
}
.job-item-pay {
	max-width: 30rem;
	width: 100%;
	align-items: center;
	justify-content: space-between;
}
.job-item-pay h4 {
	margin: 0;
}
.job-item-pay p {
	text-align: center;
	line-height: normal;
	font-size: 2.5rem;
}
.desktop-section {
	display: flex;
}
.mobile-section {
	display: none;
}

@media (max-width: 980px) {
	.desktop-section {
		display: none;
	}

	.mobile-section {
		margin-top: 1rem;
		display: flex;
	}
}
</style>
