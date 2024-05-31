import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			filters: [],
			selectedFilter: null, // добавлено для хранения выбранного фильтра
		}
	},

	getters: {
		FILTERS(state) {
			return state.filters
		},
		SELECTED_FILTER(state) {
			return state.selectedFilter
		},
	},

	mutations: {
		SET_FILTERS(state, content) {
			state.filters = content.sort((prev, next) => prev.sort - next.sort)
		},
		SET_SELECTED_FILTER(state, filter) {
			state.selectedFilter = filter
		},
	},

	actions: {
		GET_FILTERS({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'filters/',
			})
				.then((response) => {
					commit('SET_FILTERS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
		SET_FILTER({ commit }, filter) {
			commit('SET_SELECTED_FILTER', filter)
		},
	},
}