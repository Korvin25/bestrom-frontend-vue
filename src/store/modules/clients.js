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
        async GET_CLIENTS({ commit }) {
            return axios({
                method: "GET",
                url: `http://bexram.online:8001/client/`
            })
                .then((response) => {
                    commit("SET_CLIENTS", response.data)
                    return response
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
            // try {
            //     commit('SET_CLIENTS', await axios({
            //         method: 'GET',
            //         url: `http://bexram.online:8001/client/`
            //     }))
            // }
            // catch (error) {
            //     console.log(error)
            //     commit('SET_CLIENTS', 'Error')
            // }
        }
    }
}