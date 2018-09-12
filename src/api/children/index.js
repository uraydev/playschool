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
  { id: 'c2', fio: 'Вася', dob: new Date('02.02.2010') },
  { id: 'c3', fio: 'Аня', dob: new Date('03.03.2010') },
  { id: 'c4', fio: 'Саша', dob: new Date('04.04.2010') },
  { id: 'c5', fio: 'Алена', dob: new Date('05.05.2010') },
  { id: 'c6', fio: 'Вова', dob: new Date('06.06.2010') }
]
