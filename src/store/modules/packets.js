import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			packets: [],
			packetsOptions: [],
			packetsSeams: [],
		}
	},

	getters: {
		PACKETS(state) {
			return state.packets
		},
		PACKETS_OPTIONS(state) {
			return state.packetsOptions
		},
		PACKETS_SEAMS(state) {
			return state.packetsSeams
		},
	},

	mutations: {
		SET_PACKETS(state, content) {
			state.packets = content
		},
		SET_PACKETS_OPTIONS(state, content) {
			state.packetsOptions = content
		},
		SET_PACKETS_SEAMS(state, content) {
			state.packetsSeams = content
		},
	},

	actions: {
		GET_PACKETS({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'packets/',
			})
				.then((response) => {
					commit('SET_PACKETS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
		GET_PACKETS_OPTIONS({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'packetoptions/',
			})
				.then((response) => {
					commit('SET_PACKETS_OPTIONS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
		GET_PACKETS_SEAMS({ commit }) {
			return axios({
				method: 'GET',
				url: this.state.server + 'packetseams/',
			})
				.then((response) => {
					commit('SET_PACKETS_SEAMS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
