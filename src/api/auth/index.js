import {isLocal} from '../../init/config'

export default {
  login (user) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(users.find(x => user === x.id))
      })
    }
  },
  reciveUsers () {
    return new Promise((resolve) => {
      resolve(users)
    })
  },
  update (item) {
    return new Promise((resolve) => {
      resolve(item)
    })
  },
  remove (item) {
    return new Promise((resolve) => {
      resolve(item)
    })
  }
}

const users = [
  {
    id: 'u1',
    email: 'emai1@mail.ru',
    fio: 'Иванов Иван Иванович',
    role: 'clerk',
    isLocked: false,
    password: '123'
  },
  {
    id: 'u2',
    email: 'emai2@mail.ru',
    fio: 'Петров Петр Петрович',
    role: 'doctor',
    isLocked: true,
    password: '123'
  },
  {
    id: 'u3',
    email: 'emai3@mail.ru',
    fio: 'Сергеев Сергей Сергеевич',
    role: 'supplier',
    isLocked: false,
    password: '123'
  },
  {
    id: 'u4',
    email: 'emai4@mail.ru',
    fio: 'Александров Александ',
    role: 'teacher',
    isLocked: false,
    password: '123'
  },
  {
    id: 'u5',
    email: 'emai5@mail.ru',
    fio: 'Админов Админ',
    role: 'admin',
    isLocked: false,
    password: '123'
  }
]
