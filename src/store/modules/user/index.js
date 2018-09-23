import context from '../../../api/auth'
import * as types from '../../types'

const state = {
  users: []
}

// actions
const actions = {
  reciveUsers ({commit}) {
    context.reciveUsers().then(x => commit(types.RECIVE_USERS, x))
  },
  toggleBlockingUser ({commit}, payload) {
    context.update(payload).then(x => commit(types.CHANGE_LOCK_STATUS_USER, x))
  },
  editUser ({commit}, item) {
    return new Promise((resolve) => {
      context.update(item).then(x => commit(types.SAVE_USER, x))
      resolve()
    })
  },
  // newUser ({commit, getters}) {
  //   const countChildren = getters.getChildren.length
  //   const newChild = {id: countChildren + 1, fio: 'Новый ребенов №' + countChildren}
  //   context.store(newChild).then(x => commit(types.CREATE_CHILD, x))
  // },
  removeUser ({commit}, item) {
    context.remove(item).then(x => commit(types.REMOVE_USER, x))
  }
}

// mutations
const mutations = {
  [types.RECIVE_USERS] (state, payload) {
    state.users = payload
  },
  [types.CHANGE_LOCK_STATUS_USER] (state, payload) {
    const item = state.users.find(x => x.id === payload.user.id)
    if (item !== null) {
      item.isLocked = payload.isLocked
    }
  },
  [types.SAVE_USER] (state, payload) {
    const item = state.users.find(x => x.id === payload.id)
    if (item !== null) {
      item.fio = payload.fio
      item.role = payload.role
    }
  },
  [types.CREATE_CHILD] (state, payload) {
    state.children.push(payload)
  },
  [types.REMOVE_USER] (state, payload) {
    const item = state.users.find(x => x.id === payload.id)
    if (item !== null) state.users.splice(state.users.indexOf(item), 1)
  }
}

// getters
const getters = {
  getUsers: state => state.users,
  getUserById: state => id => state.users.find(x => x.id === id),
  getRoles: () => ['clerk', 'supplier', 'doctor', 'teacher', 'admin']
}

export default {
  state,
  getters,
  actions,
  mutations
}
