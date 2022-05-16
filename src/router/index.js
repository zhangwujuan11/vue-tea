import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
   redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')//懒加载
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')//懒加载
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')//懒加载
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')//懒加载
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
