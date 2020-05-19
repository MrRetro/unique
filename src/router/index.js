import Vue from 'vue'
import Router from 'vue-router'
import Unique from '../views/unique'
import Equal from '../views/equal'
import Code from '../views/code'
import synMouse from '../views/synMouse'
import cssArtCode from '../views/codeViews/cssArt'
import bg1 from '../views/bg1'
import bg2 from '../views/bg2'
import bg3 from '../views/bg3'
import bg4 from '../views/bg4'
import bg5 from '../views/bg5'
import bg6 from '../views/bg6'
import bg7 from '../views/bg7'
import bg8 from '../views/bg8'
import bg9 from '../views/bg9'
import bg10 from '../views/bg10'
import bg11 from '../views/bg11'
import bg12 from '../views/bg12'
import bg13 from '../views/bg13'
import bg14 from '../views/bg14'
import bg15 from '../views/bg15'
import bg16 from '../views/bg16'
import bg17 from '../views/bg17'
import bg18 from '../views/bg18'
import bg19 from '../views/bg19'
import bg20 from '../views/bg20'

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
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/cssart',
      name: 'cssArtCode',
      component: cssArtCode
    },
    {
      path: '/synmouse',
      name: 'synMouse',
      component: synMouse
    },
    { path: '/bg1', name: 'bg1', component: bg1 },
    { path: '/bg2', name: 'bg2', component: bg2 },
    { path: '/bg3', name: 'bg3', component: bg3 },
    { path: '/bg4', name: 'bg4', component: bg4 },
    { path: '/bg5', name: 'bg5', component: bg5 },
    { path: '/bg6', name: 'bg6', component: bg6 },
    { path: '/bg7', name: 'bg7', component: bg7 },
    { path: '/bg8', name: 'bg8', component: bg8 },
    { path: '/bg9', name: 'bg9', component: bg9 },
    { path: '/bg10', name: 'bg10', component: bg10 },
    { path: '/bg11', name: 'bg11', component: bg11 },
    { path: '/bg12', name: 'bg12', component: bg12 },
    { path: '/bg13', name: 'bg13', component: bg13 },
    { path: '/bg14', name: 'bg14', component: bg14 },
    { path: '/bg15', name: 'bg15', component: bg15 },
    { path: '/bg16', name: 'bg16', component: bg16 },
    { path: '/bg17', name: 'bg17', component: bg17 },
    { path: '/bg18', name: 'bg18', component: bg18 },
    { path: '/bg19', name: 'bg19', component: bg19 },
    { path: '/bg20', name: 'bg20', component: bg20 }
  ]
})
