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
  }
}

const groups = [
  { id: 'g1', name: 'Группа №1' },
  { id: 'g2', name: 'Группа №2' },
  { id: 'g3', name: 'Группа №3' },
  { id: 'g4', name: 'Группа младшая А2' },
  { id: 'g5', name: 'Группа средняя В1' },
  { id: 'g6', name: 'Группа старшая С3' }
]
