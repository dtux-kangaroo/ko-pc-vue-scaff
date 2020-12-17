import Vue from 'vue';
import Router from 'vue-router';
import Tip404 from '@/pages/exception/404'
import MainLayout from '@/layout/MainLayout';
import MarketLayout from '@/pages/Market';

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/Home')
        },
        {
          path: '/api',
          component: MarketLayout,
          children: [{
            path: 'all',
            name: 'all',
            component: () => import("@/pages/Market/components/AllApi"),
            children: [{
              path: 'inner',
              name: 'inner',
              component: () => import("@/pages/Market/components/InnerOrOuter")
            },
            {
              path: 'outer',
              name: 'outer',
              component: () => import("@/pages/Market/components/InnerOrOuter")
            },
            {
              path: 'server-detail',
              name: 'server-detail',
              component: () => import("@/pages/Market/components/InnerOrOuter")
            }
            ]
          },
          {
            path: 'publish',
            name: 'publish',
            component: () => import("@/pages/Market/components/Publish"),
          },
          {
            path: 'export',
            name: 'export',
            component: () => import("@/pages/Market/components/Export"),
          }
          ]
        },
        {
          path: "/user",
          name: "user",
          component: () => import('@/pages/User')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login')
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
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
return originalPush.call(this, location).catch(err => err)
}
