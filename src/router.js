import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from './layout/UserLayout.vue'
import AdminLayout from './layout/AdminLayout.vue'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      name: 'user',
      hideInMenu: true,
      component: UserLayout,
      children: [
        { 
          path: "/user",
          redirect: "/user/login"
        },
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
      path: '/',
      component: AdminLayout,
      children: [
        {
          path: "/",
          redirect: "/home/analysis"
        },
        {
          path: '/home',
          name: 'home',
          meta: {icon: 'dashboard', title: '主页'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: 'analysis',
              name: 'analysis',
              meta: {title: '分析页'},
              component: () => import('./views/home/Home.vue')
            }
          ]
        },
        {
          path: '/table',
          name: 'table',
          meta: {icon: 'ios-list-box-outline', title: '表格'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: 'basic_table',
              name: 'basic_table',
              meta: {title: '基础表格'},
              component: () => import('./views/table/BasicTable.vue')
            },
            {
              path: 'drag_table',
              name: 'dynamic_table',
              meta: {title: '可拖拽表格'},
              component: () => import('./views/table/DragTable.vue')
            }
          ]
        }, {
          path: '/form',
          name: 'form',
          meta: {icon: 'ios-create-outline', title: '表单'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: 'basic_form',
              name: 'basic_form',
              meta: {title: '基础表单'},
              component: () => import('./views/form/BasicFrom.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/404',
      hideInMenu: true,
      name: 'NotFound',
      conponent: () => import('./views/notfound/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;