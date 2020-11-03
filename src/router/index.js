import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: layout,
  children: [{
      path: 'agent',
      name: 'agent',
      component: () => import( /* webpackChunkName: "home" */ '@/views/Agent.vue'),
    },
    {
      path: '*',
      redirect: 'agent'
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

router.afterEach((to, from) => {
  if (to.path === from.path) return
  const sessionHistory = sessionStorage.history
  const history = sessionHistory ? JSON.parse(sessionHistory) : []
  if (history.length >= 10) history.pop()
  history.unshift(to.fullPath)
  sessionStorage.history = JSON.stringify(history)
})

export default router
