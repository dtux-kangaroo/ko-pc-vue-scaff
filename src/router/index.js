import Vue from 'vue';
import Router from 'vue-router';
import Tip404 from '@/pages/exception/404'
import MainLayout from '@/layout/MainLayout';
import ApiLayout from '@/pages/Api';
import Load from '@/components/Load'
const Home = () => ({
  component: import('@/pages/Home'),
  loading: Load
});
const Login = () => ({
  component: import('@/pages/Login'),
  loading: Load
})
import AllApi from '@/pages/Api/components/AllApi';
import InnerOrOuter from '@/pages/Api/components/InnerOrOuter'
import Publish from '@/pages/Api/components/Publish'
import Export from '@/pages/Api/components/Export'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
      {
        path: '/api',
        component:ApiLayout ,
        children: [{
            path: 'all',
            name: 'all',
            component: AllApi,
            children: [{
                path: 'inner',
                name: 'inner',
                component: InnerOrOuter
              },
              {
                path: 'outer',
                name: 'outer',
                component: InnerOrOuter
              },
              {
                path: 'serverDetail',
                name: 'serverDetail',
                component: InnerOrOuter
              }
            ]
          },
          {
            path: 'publish',
            name: 'publish',
            component: Publish,
          },
          {
            path: 'export',
            name: 'export',
            component: Export,
          }
        ]
      },
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: 'tip404',
      component: Tip404
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
