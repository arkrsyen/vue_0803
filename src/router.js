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
      path: '/friendPool',
      name: 'friendPool',
      component: () => import('./views/friendPool.vue')
    },
    {
      path: '/eventPool',
      name: 'eventPool',
      component: () => import('./views/eventPool.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('./views/skill.vue')
    }
  ]
})
