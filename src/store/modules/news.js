import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			// id, name, img, alt, mini_description, description, published
			allNews: [], // all news
			titleNews: [], // one main news
			secondNews: [], // two main news
			otherNews: [], // all other news
		}
	},

	getters: {
		ALL_NEWS(state) {
			return state.allNews
		},
		TITLE_NEWS(state) {
			return state.titleNews
		},
		SECOND_NEWS(state) {
			return state.secondNews
		},
		OTHER_NEWS(state) {
			return state.otherNews
		},
	},

	mutations: {
		SET_NEWS(state, content) {
			content.sort((prev, next) => new Date(next.published) - new Date(prev.published))
			Object.assign(state.allNews, content)

			if (state.secondNews.length > 0) {
				state.secondNews = []
			}
			if (content.length > 0) {
				state.titleNews = content.shift()
			}
			if (content.length > 1) {
				state.secondNews.push(content.shift())
				state.secondNews.push(content.shift())
			}
			if (content.length > 0) {
				state.otherNews = content
			}
		},
	},

	actions: {
		GET_NEWS({ commit }) {
			return axios({
				method: 'GET',
				url: 'http://bexram.online:8001/news/',
			})
				.then((response) => {
					commit('SET_NEWS', response.data)
					return response
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
	},
}
