import {isLocal} from '../../init/config'

export default {
  reciveChildren () {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(children)
      })
    }
  },
  store (child) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(child)
      })
    }
  },
  remove (child) {
    if (isLocal === true) {
      return new Promise((resolve) => {
        resolve(child)
      })
    }
  }
}

const children = [
  { id: 'c1', fio: 'Петя', dob: new Date('01.01.2010') },
  { id: 'c2', fio: 'Вася', dob: '01.01.2010' },
  { id: 'c3', fio: 'Аня', dob: '01.01.2010' },
  { id: 'c4', fio: 'Саша', dob: '01.01.2010' },
  { id: 'c5', fio: 'Алена', dob: '01.01.2010' },
  { id: 'c6', fio: 'Вова', dob: '01.01.2010' }
]
