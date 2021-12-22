import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			vacancy: [],
		}
	},

	getters: {
		VACANCY(state) {
			return state.vacancy
		},
	},

	mutations: {
		SET_VACANCY(state, content) {
			state.vacancy = content
		},
	},

	actions: {
		GET_VACANCY({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'vacancy/',
			})
				.then((response) => {
					commit('SET_VACANCY', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
