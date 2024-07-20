<template>
	<div class="details-select-packet flex-row">
		<div v-for="item in filteredPacketsItems" :key="item.id" class="details-select-packet-item card-shadow">
			<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
			<img :src="$store.state.server_media.slice(0, -1) + item.img" :alt="item.alt" />
			<!-- <app-hidden-item
				:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item> -->
		</div>
	</div>

	<h2 class="title-brand title-padding">
		{{
			$store.state.language === 'RU'
				? 'Дополнительные опции пакетов'
				: 'Additional package options'
		}}
	</h2>

	<div class="details-select-packet flex-row">
		<div v-for="item in packetsOptionsItems" :key="item.id" class="details-select-packet-item card-shadow">
			<h4>{{ $store.state.language === 'RU' ? item.name : item.name_en }}</h4>
			<img :src="$store.state.server_media.slice(0, -1) + item.img" :alt="item.alt" />
			<!-- <app-hidden-item
				:text="$store.state.language === 'RU' ? 'ПОДРОБНЕЕ' : 'READ MORE'"></app-hidden-item> -->
		</div>
	</div>
</template>

<script>
import appHiddenItem from '../components/appHiddenItem.vue'

export default {
	name: 'AppDetailsSelectPacket',
	components: {
		appHiddenItem,
	},
	props: {
		packetsItems: {
			type: Object,
			default: new Object(),
		},
		packetsOptionsItems: {
			type: Object,
			default: new Object(),
		},
	},
	computed: {
		filteredPacketsItems() {
			return this.packetsItems.filter(item => item.active === true);
		},
	},
}
</script>

<style scoped>
.title-padding {
	padding: 0 1rem;
	margin: 0;
}
.details-select-packet {
	margin-top: 2rem;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.details-select-packet-item {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	text-align: center;
	width: 25%;
	flex-grow: 1;
	margin: 1rem;
}
/* .details-select-packet-item:hover .hidden-item {
	opacity: 1;
} */
/* .details-select-packet-item:hover img,
.details-select-packet-item:hover h4 {
	-webkit-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
} */
.details-select-packet-item:hover {
	transition: all 0.5s;
	filter: drop-shadow(0 0 12px #2fc1ff);
}
.details-select-packet-item h4 {
	font-weight: normal;
	margin-top: 0;
}
@media (max-width: 980px) {
	.details-select-packet {
		margin: 0 -0.5rem;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.details-select-packet-item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		text-align: center;
		width: 25%;
		flex-grow: 1;
		margin: 0.5rem;
	}
	.details-select-packet-item h4 {
		font-weight: 600;
		font-size: 12px;
	}
	.details-select-packet-item img {
		align-self: center;
		max-width: 7rem;
		width: 100%;
	}
}
</style>
