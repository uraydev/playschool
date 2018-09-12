import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import SignUp from '@/components/auth/Signup'
// import Dashboard from '@/components/dashboard/Dashboard'
// import TeacherModule from '@/components/dashboard/TeacherModule'
// import OtherModule from '@/components/dashboard/OtherModule'
// import ClerkComponent from '@/components/dashboard/ClerkComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    },
    { path: '/signup', name: 'signup', component: () => import('@/components/auth/SignUp') },
    { path: '/dashboard', name: 'dashboard', component: () => import('@/components/dashboard/Dashboard') },
    { path: '/teacher', name: 'teacher', component: () => import('@/components/dashboard/TeacherModule') },
    { path: '/other', name: 'other', component: () => import('@/components/dashboard/OtherModule') },
    { path: '/clerk', name: 'clerk', component: () => import('@/components/dashboard/ClerkComponent') },
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
  ],
  mode: 'history'
})
