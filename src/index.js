import Vue from 'vue'
import globalTpl from '@/tpls/globalTpl.vue'
import router from '@/router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import Viser from 'viser-vue' //图表库引入


import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Element, {
  size: 'medium', // set element-ui default size
})
Vue.use(Viser);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { globalTpl },
  template: '<globalTpl/>'
})
