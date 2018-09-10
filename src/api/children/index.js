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
  { id: 'c1', fio: 'Петя' },
  { id: 'c2', fio: 'Вася' },
  { id: 'c3', fio: 'Аня' },
  { id: 'c4', fio: 'Саша' },
  { id: 'c5', fio: 'Алена' },
  { id: 'c6', fio: 'Вова' }
]
