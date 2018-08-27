import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    },
    {
      path: '/console',
      children: [
        {
          path: 'medic'
        },
        {
          path: 'tutor'
        },
        {
          path: 'manager'
        },
        {
          path: 'clerk'
        },
        {
          path: 'supplier'
        }
      ]
    },
    {
      path: 'groups'
    },
    {
      path: 'group'
    }
  ]
})
