import { createStore } from 'vuex'
import clients from './modules/clients'
import filters from './modules/filters'
import history from './modules/history'
import news from './modules/news'
import packets from './modules/packets'
import page from './modules/page'
import partners from './modules/partners'
import product from './modules/product'
import vacancy from './modules/vacancy'

export default createStore({
	state() {
		return {
			server: 'https://bestrom.ru/api/',
			server_media: 'https://bestrom.ru/',
			server_raskroy: 'https://bestrom.su/',
			language: 'RU',
		}
	},
	modules: {
		clients,
		partners,
		news,
		history,
		vacancy,
		product,
		filters,
		page,
		packets,
	},
})
