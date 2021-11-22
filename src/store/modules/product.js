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
		PRODUCT_ID(state) {
			return state.productID
		},
	},

	mutations: {
		SET_PRODUCT(state, content) {
			state.product = content
		},
		SET_PRODUCT_ID(state, content) {
			state.productID = content
		},
	},

	actions: {
		GET_PRODUCT({ commit }) {
			return axios({
				method: 'GET',
				url: 'http://bexram.online:8001/product/',
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
		GET_PRODUCT_ID({ commit }, id) {
			return axios({
				method: 'GET',
				url: `http://bexram.online:8001/product/${id}/`,
			})
				.then((response) => {
					commit('SET_PRODUCT_ID', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
