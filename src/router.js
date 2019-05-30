import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from './layout/UserLayout.vue'
import AdminLayout from './layout/AdminLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      name: 'user',
      component: UserLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: ()=>import('./views/login/Login.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: ()=>import('./views/register/Register.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/home',
      component: AdminLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: ()=>import('./views/home/Home.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/admin'
    },
  ]
})
