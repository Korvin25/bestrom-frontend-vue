import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			partners: [],
		}
	},

	getters: {
		PARTNERS(state) {
			return state.partners
		},
	},

	mutations: {
		SET_PARTNERS(state, content) {
			state.partners = content
		},
	},

	actions: {
		GET_PARTNERS({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'partner/',
			})
				.then((response) => {
					commit('SET_PARTNERS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
