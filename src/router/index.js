import Vue from 'vue'
import VueRouter from 'vue-router'
import Peliculas from '../views/Peliculas.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Peliculas',
    component: Peliculas
  },
  {
    path: '/hambre',
    name: 'Hambre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Hambre.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
