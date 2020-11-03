import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: layout,
  children: [{
      path: '',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
}]

// TODO 区分手机和pc
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
