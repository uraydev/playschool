import context from '../../../api/children'
import * as types from '../../types'

const state = {
  children: []
}

// actions
const actions = {
  reciveChildren ({commit}) {
    context.reciveChildren().then(x => commit(types.RECIVE_CHILDREN, x))
  },
  editChild ({commit}, child) {
    context.store(child).then(x => commit(types.SAVE_CHILD, x))
  },
  newChild ({commit, getters}) {
    const countChildren = getters.getChildren.length
    const newChild = {id: countChildren + 1, fio: 'Новый ребенов №' + countChildren}
    context.store(newChild).then(x => commit(types.CREATE_CHILD, x))
  },
  removeChild ({commit}, child) {
    context.remove(child).then(x => commit(types.REMOVE_CHILD, x))
  }
}

// mutations
const mutations = {
  [types.RECIVE_CHILDREN] (state, payload) {
    state.children = payload
  },
  [types.SAVE_CHILD] (state, payload) {
    const child = state.children.find(x => x.id === payload.id)
    if (child !== null) {
      child.fio = payload.fio
      child.dob = payload.dob
    }
  },
  [types.CREATE_CHILD] (state, payload) {
    state.children.push(payload)
  },
  [types.REMOVE_CHILD] (state, payload) {
    const child = state.children.find(x => x.id === payload.id)
    if (child !== null) {
      const pos = state.children.indexOf(child)
      state.children.splice(pos, 1)
    }
  }
}

// getters
const getters = {
  getChildren: state => state.children
}

export default {
  state,
  getters,
  actions,
  mutations
}
