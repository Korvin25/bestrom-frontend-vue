<template>
	<div class="catalog-type-select">
		<img v-if="img" loading="lazy" class="filter-image" :src="img" />
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: 'AppCatalogTypeSelect',
	props: {
		text: {
			type: String,
			default: '',
		},
		img: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.catalog-type-select {
	transition: all 0.5s;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding: 0 1rem;
	margin: 0.2rem;
	word-wrap: none;
	box-sizing: border-box;
	border-radius: 20px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, .25);
}
.catalog-type-select:hover {
	transition: all 0.5s;
	/* color: #ffffff; */
	cursor: pointer;
	/* background: #2fc1ff; */
	/* border: 1px solid #2fc1ff; */
	box-shadow: 0 2px 4px #2fc1ff;
	/* box-sizing: border-box; */
	border-radius: 20px;
}

.filter-image {
	height: 50px;
	margin-top: 10px;
}

.type-select .type-select-checked {
	color: #6a6a6a;
	background: #ffffff;
	border: none;
	box-sizing: border-box;
	box-shadow: 0 2px 4px #2fc1ff;
}
@media (max-width: 980px) {
	.catalog-type-select {
		font-size: 13px;
	}
}
</style>
