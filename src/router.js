import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home.vue'
import mall from './pages/mall.vue'
import life from './pages/life.vue'
import member from './pages/member.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/member',
      name: 'member',
      component: member
    }
  ]
})
