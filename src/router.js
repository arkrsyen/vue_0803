import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'data-event',
          name: 'dataEvent',
          component: () => import('./components/home/DataEvent.vue')
        }
      ]
    },
    {
      path: '/api',
      name: 'tempApi',
      component: () => import('./views/ApiTemp.vue')
    },
    {
      path: '/friend',
      name: 'friendPool',
      component: () => import('./views/friendPool.vue')
    },
    {
      path: '/event',
      name: 'eventPool',
      component: () => import('./views/eventPool.vue')
    },
    {
      path: '/poolSkill',
      name: 'poolSkill',
      component: () => import('./views/poolSkill.vue')
    },
    {
      path: '/test1010',
      name: 'test1010',
      component: () => import('./views/test1010.vue')
    }
  ]
})
