import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            history: [],
        }
    },

    getters: {
        HISTORY(state) {
            return state.history
        }
    },

    mutations: {
        SET_HISTORY(state, content) {
            state.history = content
        }
    },

    actions: {
        GET_HISTORY({commit}) {
            return axios({
                method: 'GET',
                url: 'http://bexram.online:8001/history/'
            })
                .then((response) => {
                    commit('SET_HISTORY', response.data)
                    return response
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    }
}