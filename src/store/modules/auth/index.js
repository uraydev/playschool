import context from '../../../api/auth'
import * as types from '../../types'

const state = {
  user: null
}

// const fakeUser = {
//   id: '123456789'
// }

// actions
const actions = {
  login ({commit}, userId) {
    context.login(userId).then(x => commit(types.SET_USER, x))
  },
  logout ({commit}) {
    commit(types.SET_USER, null)
  }
}

// mutations
const mutations = {
  [types.SET_USER] (state, payload) {
    state.user = payload
  }
}

// getters
const getters = {
  auth: state => state.user !== null,
  user: state => state.user
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
