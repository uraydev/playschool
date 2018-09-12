import modules from '../../../init/modules'

const state = {
  modules
}

// const fakeUser = {
//   id: '123456789'
// }

// actions
const actions = {
}

// mutations
const mutations = {
}

// getters
const getters = {
  getMenu: (state, getters, rootState, rootGetters) => {
    const user = rootGetters['auth/user']
    const role = state.modules.find(x => x.role === user.role)
    if (role === null) return []
    return role.menu
  },
  hasPermission: (state, getters, rootState, rootGetters) => roleName => {
    const user = rootGetters['auth/user']
    const role = state.modules.find(x => x.role === user.role)
    if (role === null) return false
    const permission = role.permissions.find(x => x === roleName)
    return roleName === permission
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
