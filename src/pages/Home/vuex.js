import { API } from "@/services";

const home = {
  state: {
    homeData: [],
  },
  mutations: {
    GET_HOME_DATA: (state, homeData) => {
      state.homeData = homeData;
    },
  },
  actions: {
    getHomeData({ commit }, params, cb) {
      API.getHomeData({}).then((res) => {
        commit("GET_HOME_DATA", res.data);
      });
    },
  },
};

export default home;
