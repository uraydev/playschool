import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
// import common from './modules/common'
import child from './modules/child'
import demand from './modules/demand'
import kindergarden from './modules/kindergarden'
import user from './modules/user'
import dialog from './modules/dialog'
import auth from './modules/auth'
import group from './modules/group'
import guard from './modules/guard'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [
  //   store => {
  //     store.subscribeAction((action, state) => {
  //       store.commit('setLoading', action.type)
  //       // store.commit('clearMessage')
  //     })
  //   }
  // ],
  state: {
    loadedAppTitle: 'PlaySchool'
  },
  mutations: {
    [types.SET_LOADED_APP_TITLE] (state, title) {
      Vue.set(state, 'loadedAppTitle', title)
    }
  },
  actions: {
    loadAppTitle ({ commit }, title) {
      commit('setLoadedAppTitle', title)
      commit('setLoaded', 'loadAppTitle')
    }
  },
  getters: {
    getLoadedAppTitle: state => state.loadedAppTitle
  },
  modules: {
    // common,
    child,
    demand,
    dialog,
    kindergarden,
    user,
    auth,
    group,
    guard
  },
  strict: debug
})
