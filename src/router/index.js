import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView/IndexView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView/LoginView.vue')
  },
  {
    path: '/talk',
    name: 'talk',
    component: () => import('../views/TalkView/TalkView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
