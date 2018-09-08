import {isLocal} from '../../init/config'

export default {
  login (user) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(users.find(x => user === x.id))
      })
    }
  }
}

const users = [
  {
    id: 'u1',
    email: 'login1',
    fio: 'Иванов Иван Иванович',
    role: 'teacher',
    menu: [
      {id: 'm1', icon: 'fa fa-lemon-o', title: 'Dashboard', link: '/dashboard'},
      {id: 'm2', icon: 'fa fa-lemon-o', title: 'Teacher Module', link: '/teacher'},
      {id: 'm3', icon: 'fa fa-lemon-o', title: 'Some Module', link: '/other'}
    ]
  },
  {
    id: 'u2',
    email: 'login2',
    fio: 'Петров Петр Петрович',
    role: 'doctor',
    menu: [
      {id: 'm1', icon: 'fa fa-lemon-o', title: 'Dashboard', link: '/dashboard'},
      {id: 'm3', icon: 'fa fa-lemon-o', title: 'Some Module', link: '/other'}
    ]
  },
  {
    id: 'u3',
    email: 'login3',
    fio: 'Сергеев Сергей Сергеевич',
    role: 'supplier',
    menu: [
      {id: 'm1', icon: 'fa fa-lemon-o', title: 'Dashboard', link: '/dashboard'}
    ]},
  {id: 'u4', email: 'login4', fio: 'Александров Александ'},
  {id: 'u5', email: 'login5', fio: 'Админов Админ'}
]
