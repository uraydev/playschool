import context from '../../../api/children'
import * as types from '../../types'

const state = {
  model: []
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
    const countChildren = getters.model.length
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
    state.model = payload
  },
  [types.SAVE_CHILD] (state, payload) {
    const child = state.model.find(x => x.id === payload.id)
    if (child !== null) {
      child.fio = payload.fio
      child.dob = payload.dob
    }
  },
  [types.CREATE_CHILD] (state, payload) {
    state.model.push(payload)
  },
  [types.REMOVE_CHILD] (state, payload) {
    const child = state.model.find(x => x.id === payload.id)
    if (child !== null) {
      const pos = state.model.indexOf(child)
      state.model.splice(pos, 1)
    }
  }
}

// getters
const getters = {
  model: state => state.model
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
