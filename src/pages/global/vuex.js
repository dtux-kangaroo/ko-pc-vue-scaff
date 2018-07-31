import api from "@/api/index.js";


const global = {
  state: {
    globalData:[]
  },
  mutations: {
    GET_GLOBAL_DATA: (state, globalData) => {
      state.globalData = globalData;
    }
  },
  actions: {
    getGlobalData({ commit }, params,cb) {
      commit('GET_GLOBAL_DATA',[]);
     }
  }
}

export default global
