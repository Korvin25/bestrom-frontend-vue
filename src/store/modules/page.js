import axios from "axios";

export default {
  namespaced: true,

  state() {
    return {
      pageID: [],
    };
  },

  getters: {
    PAGE_ID(state) {
      return state.pageID;
    },
  },

  mutations: {
    SET_PAGE_ID(state, content) {
      state.pageID = content;
    },
  },

  actions: {
    GET_PAGE_ID({ commit }, id) {
      return axios({
        method: "GET",
        url: `http://bexram.online:8001/page/${id}/`,
      })
        .then((response) => {
          commit("SET_PAGE_ID", response.data);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
};
