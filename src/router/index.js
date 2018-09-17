import Vue from 'vue';
import Router from 'vue-router';
import MainTpl from '@/tpls/mainTpl';
import Home from '@/pages/home/index';
import User from '@/pages/user/index';
import tip404 from  '@/pages/error/404'



Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
     path:'/index',component:MainTpl,
     children:[
      {path: '/index',name: 'home',component: Home},
      {path: '/user',name: 'user',component: User},
      { path: '/404', component:tip404, hidden: true },
     ]
    },
    { path: '*', redirect: '/404'}
  ]
})
