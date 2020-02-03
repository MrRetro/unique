import Vue from 'vue'
import Router from 'vue-router'
import Unique from '../views/unique'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Unique',
      component: Unique
    }
  ]
})
