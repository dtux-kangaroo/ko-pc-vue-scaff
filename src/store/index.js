import Vue from 'vue'
import Vuex from 'vuex'
import global from './global/vuex'
import home from '@/pages/Home/vuex'
import user from '@/pages/User/vuex'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    global,
    home,
    user
  },
  getters
})

export default store
