import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			filters: [],
		}
	},

	getters: {
		FILTERS(state) {
			return state.filters
		},
	},

	mutations: {
		SET_FILTERS(state, content) {
			state.filters = content
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
	},
}
