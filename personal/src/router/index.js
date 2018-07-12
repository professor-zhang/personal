import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      /*components: {
        default:Index,
        left:resolve=> require(['@/components/home'],resolve),
        right:resolve=> require(['@/components/per'],resolve)
      },*/
      component:Index,
      children:[
        {
          path:'/',
          component:resolve=> require(['@/components/home'],resolve)
        },
        {
          path:'/per',
          component:resolve=> require(['@/components/per'],resolve)
        },
        {
          path:'/case',
          component:resolve=> require(['@/components/case'],resolve)
        },
        {
          path:'/contact',
          component:resolve=> require(['@/components/contact'],resolve)
        }
      ]
    }
  ]
})
