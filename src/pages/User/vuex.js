import { API } from "@/services/index.js";


const user = {
  state: {
    userData:[]
  },
  mutations: {
    GET_USER_DATA: (state, userData) => {
      state.userData = userData
    }
  },
  actions: {
    getUserData({ commit }, params,cb) {
      API.getUserData({}).then(ret=>{
          commit('GET_USER_DATA', ret.data||[]);
        })
     }
  }
}

export default user
