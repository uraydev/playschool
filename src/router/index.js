import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Groups from '@/components/Groups'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Groups
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
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: 'group'
    }
  ]
})
