import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            clients: [],
        }
    },

    getters: {
        CLIENTS(state) {
            return state.clients
        }
    },

    mutations: {
        SET_CLIENTS(state, content) {
            state.clients = content.data;
        }
    },

    actions: {
        GET_CLIENTS({commit}) {
            return axios({
                method: 'GET',
                url: 'http://bexram.online:8001/client/'
            })
                .then((response) => {
                    console.log(response.data)
                    commit('SET_CLIENTS', response.data)
                    return response
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    }
}