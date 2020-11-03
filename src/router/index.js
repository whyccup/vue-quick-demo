import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: layout,
  children: [{
    path: '',
    name: 'hoem',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }]
}]

// TODO 区分手机和pc
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
