import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cookies from 'js-cookie'

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
    },
    {
      path: '/localstroge',
      name: 'LocalStroge',
      component: () => import('./views/LocalStroge.vue')
    },
    {
      path: '/addlocal',
      name: 'AddLocal',
      component: () => import('./views/addlocal.vue')
    },
    {
      path: '/i18n',
      name: 'vueI18n',
      component: () => import('./views/vueI18n.vue')
    },
    {
      path: '/regexp',
      name: 'Regexp',
      component: () => import('./views/regexp.vue')
    }
  ]
})

