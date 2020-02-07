import Vue from 'vue'
import Router from 'vue-router'
import Unique from '../views/unique'
import Equal from '../views/equal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Unique',
      component: Unique
    },
    {
      path: '/unique',
      name: 'Unique',
      component: Unique
    },
    {
      path: '/equal',
      name: 'Equal',
      component: Equal
    }
  ]
})
