import Vue from 'vue';
import Router , { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/views/layout.vue';

Vue.use(Router);

export const constantRoutes:RouteConfig[]=[
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/components/HelloWorld.vue'),
        name: 'Dashboard',
        meta:{
          title:'首页'
        }
      },
    ],
  },
  {
    path: '/login',
    name: '登录页',
    component: Home,
    meta:{
      title:'登录'
    }
  },
  {
    path: '/table',
    name: '表格',
    component: Layout,
    children: [
      {
        path: '/table/table1',
        name: '表格一',
        component: () => import('@/components/table/table1.vue'),
        meta:{
          title:'表格一'
        }
      },
      {
        path: '/table/table2',
        name: '表格二',
        component: () => import('@/components/table/table2.vue'),
        meta:{
          title:'表格二'
        }
      },
      {
        path: '/table/table3',
        name: '表格三',
        component: () => import('@/components/table/table3.vue'),
        meta:{
          title:'表格三'
        }
      },
    ],
  },
]

const createRouter = () => new Router({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRoutes
})

const router = createRouter()

export default router