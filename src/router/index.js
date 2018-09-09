import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/auth/Signup'
import Dashboard from '@/components/dashboard/Dashboard'
import TeacherModule from '@/components/dashboard/TeacherModule'
import OtherModule from '@/components/dashboard/OtherModule'
import ClerkComponent from '@/components/dashboard/ClerkComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/teacher', name: 'teacher', component: TeacherModule },
    { path: '/other', name: 'other', component: OtherModule },
    { path: '/clerk', name: 'clerk', component: ClerkComponent },
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
