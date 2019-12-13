import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: resolve => require(['@/components/home'], resolve)
        },
        {
          path: 'per',
          component: resolve => require(['@/components/per'], resolve)
        },
        {
          path: 'case',
          component: resolve => require(['@/components/case'], resolve)
        },
        {
          path: 'contact',
          component: resolve => require(['@/components/contact'], resolve)
        }
      ]
    }
  ]
})
