import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/login.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/menu.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: () => import(/* webpackChunkName: "about" */ '../components/contactanos.vue')
  },
  {
    path: '/beneficiarios',
    name: 'beneficiarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/beneficiarios.vue')
  },
  {
    path: '/rubros',
    name: 'rubros',
    component: () => import(/* webpackChunkName: "about" */ '../views/rubros.vue')
  },
  {
    path: '/gastos',
    name: 'gastos',
    component: () => import(/* webpackChunkName: "about" */ '../views/gastos.vue')
  },
  {
    path: '/ingresos',
    name: 'ingresos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ingresos.vue')
  },
  {
    path: '/personas',
    name: 'personas',
    component: () => import(/* webpackChunkName: "about" */ '../views/personas.vue')
  },
  {
    path: '/tipoGasto',
    name: 'tipoGasto',
    component: () => import(/* webpackChunkName: "about" */ '../views/tipoGasto.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuarios.vue')
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: () => import(/* webpackChunkName: "about" */ '../components/quienesSomos.vue')
  },
  {
    path: '/servicio',
    name: 'servicio',
    component: () => import(/* webpackChunkName: "about" */ '../components/servicio.vue')
  },
  {
    path: '/servicioAtencion',
    name: 'servicioAtencion',
    component: () => import(/* webpackChunkName: "about" */ '../components/servicioAtencion.vue')
  },
  {
    path: '/servicioFormacion',
    name: 'servicioFormacion',
    component: () => import(/* webpackChunkName: "about" */ '../components/servicioFormacion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
