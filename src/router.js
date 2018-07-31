import Vue from 'vue'
import Router from 'vue-router'
import MainTpl from '@/tpls/mainTpl'
import Home from '@/pages/home/index'
import User from '@/pages/user/index'

Vue.use(Router)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
     path:'/',component:MainTpl,
     children:[
      {path: '/',name: 'home',component: Home},
      {path: '/user',name: 'user',component: User},
     ]
    }
  ]
})
