<template>
	<app-header></app-header>
	<main class="main-content flex-column">
		<section class="desktop-section section">
			<h2>Клиенты</h2>
			<div class="flex-row partners">
				<app-partners-item
					v-for="client in CLIENTS"
					:key="client.id"
					:image="client.logo"
					:alt="client.alt"
					@click="showClient(client.alt)"
				></app-partners-item>
			</div>
		</section>

		<section class="mobile-section section">
			<h2>Клиенты</h2>
			<div class="flex-row partners">
				<div v-for="client in CLIENTS" :key="client.id" class="mobile-partners-item">
					<app-partners-item
						:image="client.logo"
						:alt="client.alt"
						@click="showClient(client.alt)"
					></app-partners-item>
					<p>{{ client.name }}</p>
				</div>
			</div>
		</section>

		<transition name="modal">
			<app-modal-partners-item
				v-if="customers.showModal"
				:image="customers.logo"
				:alt="customers.alt"
				:title="customers.name"
				:text="customers.description"
				:machines="customers.machines"
				@close="customers.showModal = false"
			></app-modal-partners-item>
		</transition>
	</main>
	<app-footer class="clients-footer"></app-footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
import appFooter from '../components/appFooter.vue'
import appPartnersItem from '../components/appPartnersItem.vue'
import appModalPartnersItem from '../components/appModalPartnersItem.vue'
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'

export default {
	name: 'AppPageClients',
	components: {
		appHeader,
		appFooter,
		appPartnersItem,
		appModalPartnersItem,
	},
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.getters['page/PAGE_ID'].length > 0 ? store.getters['page/PAGE_ID'][0].title : 'title',
			description:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].description
					: 'description',
			keywords:
				store.getters['page/PAGE_ID'].length > 0
					? store.getters['page/PAGE_ID'][0].keywords
					: 'keywords',
		}))
		useMeta(computedMeta)
	},
	data() {
		return {
			customers: {
				showModal: false,
			},
		}
	},
	computed: {
		...mapGetters({
			CLIENTS: 'clients/CLIENTS',
			PAGE_ID: 'page/PAGE_ID',
		}),
	},
	watch: {
		customers: {
			handler() {
				if (this.customers.showModal) {
					document.body.classList.add('modal-open')
				} else {
					document.body.classList.remove('modal-open')
				}
			},
			deep: true,
		},
	},
	mounted() {
		this.GET_CLIENTS()
		this.GET_PAGE_ID(8)
	},
	methods: {
		...mapActions({
			GET_CLIENTS: 'clients/GET_CLIENTS',
			GET_PAGE_ID: 'page/GET_PAGE_ID',
		}),
		showClient(client) {
			this.customers = this.CLIENTS.find((e) => e.alt === client)
			this.customers.machines = true
			this.customers.showModal = true
		},
	},
}
</script>

<style scoped>
.clients-footer {
	position: absolute;
	bottom: 0;
}
.desktop-section {
	display: block;
}
.mobile-section {
	display: none;
}
@media (max-width: 980px) {
	.clients-footer {
		margin-top: 2rem;
		position: relative;
	}
	.desktop-section {
		display: none;
	}
	.mobile-section {
		display: block;
	}
	.mobile-section h2 {
		margin: 1rem 0 0 0;
	}
	.partners {
		flex-direction: column;
	}
	.mobile-partners-item {
		width: 100%;
	}
	.mobile-partners-item p {
		margin: 0 1rem;
		padding: 0 0 0.5rem 0;
		border-bottom: 1px solid #2fc1ff;
	}
}
</style>
