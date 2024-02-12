<template>
	<div class="details-select-settings">
		<div v-for="item in settings" :key="item.id" class="details-select-settings-item">
			<h4>
				{{
					$store.state.language === 'RU' ? item.product_property.name : item.product_property.name_en
				}}
			</h4>
			<p>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</p>
		</div>
	</div>
	<!-- /.details-select-settings -->
</template>

<script>
export default {
	name: 'AppDetailsSelectSettings',
	props: {
		settings: {
			type: Object,
			default: new Object(),
		},
	},
}
</script>

<style scoped>
.details-select-settings {
	margin: 2rem 1rem 0 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
}
.details-select-settings-item {
	width: 15rem;
}
.details-select-settings-item h4 {
	margin: 1rem 0;
}
@media (max-width: 980px) {
	.details-select-settings {
		flex-direction: column;
		margin: 1rem 0.5rem;
		height: auto;
		width: 100%;
	}
	.details-select-settings-item {
		width: 100%;
	}
	.details-select-settings-item h4 {
		font-weight: 600;
		font-size: 12px;
		margin: 0.5rem 0;
	}
	.details-select-settings-item p {
		margin: 0.5rem 0;
	}
}
</style>
