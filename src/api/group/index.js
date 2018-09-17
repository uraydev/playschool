import {isLocal} from '../../init/config'

export default {
  reciveGroups () {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(groups)
      })
    }
  },
  store (group) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(group)
      })
    }
  },
  remove (group) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(group)
      })
    }
  }
}

const groups = [
  {
    id: 'g1',
    name: 'Группа №1',
    children: [
      { id: 'c1', fio: 'Петя', dob: new Date('01.01.2010') },
      { id: 'c2', fio: 'Вася', dob: new Date('02.02.2010') },
      { id: 'c3', fio: 'Аня', dob: new Date('03.03.2010') },
      { id: 'c4', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c7', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c8', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c9', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c10', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c11', fio: 'Саша', dob: new Date('04.04.2010') },
      { id: 'c12', fio: 'Саша', dob: new Date('04.04.2010') }
    ]
  },
  {
    id: 'g2',
    name: 'Группа №2',
    children: [
      { id: 'c5', fio: 'Алена', dob: new Date('05.05.2010') },
      { id: 'c6', fio: 'Вова', dob: new Date('06.06.2010') }
    ]
  },
  { id: 'g3', name: 'Группа №3', children: [] },
  { id: 'g4', name: 'Группа младшая А2', children: [] },
  { id: 'g5', name: 'Группа средняя В1', children: [] },
  { id: 'g6', name: 'Группа старшая С3', children: [] }
]
