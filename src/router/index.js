import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CameraPannel from '@/components/CameraPannel'
import hw from '@/components/trashcan/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/broadcasts'
    }, {
      path: '/broadcasts',
      name: 'broadcasts',
      component: Index
    }, {
      path: '/camerapannel',
      name: 'camerapannel',
      component: CameraPannel
    },
    {
      path: '/test',
      name: 'hw',
      component: hw
    }
  ]
})
