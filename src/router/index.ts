import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/view/home.vue'
import Vuex from '@/view/vuex.vue'
import login from '@/view/login/login.vue'
import Main from '@/components/main.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'index',
    component: Main,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex
      },
      {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/view/axios.vue') // 懒加载组件
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
