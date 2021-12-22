import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			product: [],
			productID: [],
		}
	},

	getters: {
		PRODUCT(state) {
			return state.product
		},
	},

	mutations: {
		SET_PRODUCT(state, content) {
			state.product = content
		},
	},

	actions: {
		GET_PRODUCT({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'product/',
			})
				.then((response) => {
					commit('SET_PRODUCT', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
