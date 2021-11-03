import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            news: [],   // id, name, img, alt, mini_description, description, published
        }
    },

    getters: {
        NEWS(state) {
            return state.news
        }
    },

    mutations: {
        SET_NEWS(state, content) {
            console.log(content)
            content = content.sort((a,b) => a[1] - b[1])
            console.log(content)
            state.news = content
        }
    },

    actions: {
        GET_NEWS({commit}) {
            return axios({
                method: 'GET',
                url: 'http://bexram.online:8001/news/'
            })
                .then((response) => {
                    commit('SET_NEWS', response.data)
                    return response
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    }
}