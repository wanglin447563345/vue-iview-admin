import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from './layout/UserLayout.vue'
import AdminLayout from './layout/AdminLayout.vue'
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import findLast from "lodash/findLast";
import { check, isLogin } from "./tools/auth";


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
      meta: { authority: ["user", "admin"] },
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
              path: '/home/analysis',
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
              path: '/table/basic_table',
              name: 'basic_table',
              meta: {title: '基础表格'},
              component: () => import('./views/table/BasicTable.vue')
            },
            {
              path: '/table/drag_table',
              name: 'dynamic_table',
              meta: {title: '可拖拽表格'},
              component: () => import('./views/table/DragTable.vue')
            }
          ]
        }, {
          path: '/form',
          name: 'form',
          meta: {icon: 'ios-create-outline', title: '表单', authority: ["admin"] },
          component: {render: h => h('router-view')},
          children: [
            {
              path: '/form/basic_form',
              name: 'basic_form',
              meta: {title: '基础表单'},
              component: () => import('./views/form/BasicFrom.vue')
            }
          ]
        },{
          path: '/chart',
          name: 'chart',
          meta: {icon: 'ios-create-outline', title: '图表'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: '/chart/echart',
              name: '/chart/echart',
              meta: {title: 'echart图表'},
              component: () => import('./views/charts/echarts.vue')
            },{
              path: '/chart/highchart',
              name: 'highchart',
              meta: {title: 'highchart图表'},
              component: () => import('./views/charts/highcharts.vue')
            }
          ]
        },{
          path: '/map',
          name: 'map',
          meta: {icon: 'ios-create-outline', title: '地图'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: '/map/baidu',
              name: 'baidu',
              meta: {title: 'baidu地图'},
              component: () => import('./views/map/baidu.vue')
            },{
              path: '/map/google',
              name: 'google',
              meta: {title: 'google地图'},
              component: () => import('./views/map/google.vue')
            },{
              path: '/map/gaode',
              name: 'gaode',
              meta: {title: 'gaode地图'},
              component: () => import('./views/map/gaode.vue')
            }
          ]
        },{
          path: '/editor',
          name: 'editor',
          meta: {icon: 'ios-create-outline', title: '编辑器'},
          component: {render: h => h('router-view')},
          children: [
            {
              path: '/editor/wangeditor',
              name: 'wangeditor',
              meta: {title: 'wangeditor编辑器'},
              component: () => import('./views/editors/WangEditor.vue')
            },{
              path: ' /editor/ueditor',
              name: 'ueditor',
              meta: {title: 'ueditor编辑器'},
              component: () => import('./views/editors/Ueditor.vue')
            }
          ]
        }
      ]
    },
    {
      path: '*',
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
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } 
    NProgress.done();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;