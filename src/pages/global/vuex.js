import api from "@/api/index.js";


const global = {
  state: {
    navData:{
      topNav:[],
      sideNav:[]
    }
  },
  mutations: {
    GET_NAV_DATA: (state, navData) => {
      state.navData = navData;
    }
  },
  actions: {
    getNavData({ commit }, params,cb) {
      api.getNavData({}).then(ret=>{
        console.log(ret);
        commit('GET_NAV_DATA', ret.data||[]);
      })
   }
  }
}

export default global
