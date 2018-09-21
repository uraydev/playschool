// import context from '../../../api/children'
import groupContext from '../../../api/group'
import * as types from '../../types'

const state = {
  selectedGroup: null,
  groups: null
}

// actions
const actions = {
  removeGroup ({commit}, group) {
    groupContext.remove(group).then(x => commit(types.REMOVE_GROUP, x))
  },
  saveGroup ({commit}, group) {
    groupContext.store(group).then(x => commit(types.SAVE_GROUP, x))
  },
  createNewGroup ({commit, getters}) {
    const countGroups = getters.getGroups.length
    const newGroup = {id: countGroups + 1, name: 'Новая группа №' + countGroups, children: []}
    groupContext.store(newGroup).then(x => commit(types.CREATE_GROUP, x))
  },
  reciveGroups ({commit}) {
    groupContext.reciveGroups().then(x => commit(types.RECIVE_CHILDREN_GROUP, x))
  },
  setSelectedGroup ({state, commit}, group) {
    const findChildGroup = state.groups.find(x => x.id === group.id)
    commit(types.SET_SELECTED_CHILD_GROUP, findChildGroup !== null ? findChildGroup : [])
  }
}

// mutations
const mutations = {
  [types.REMOVE_GROUP] (state, payload) {
    const group = state.groups.find(x => x.id === payload.id)
    if (group !== null) {
      const pos = state.groups.indexOf(group)
      state.groups.splice(pos, 1)
      if (group.id === state.selectedGroup.id && state.groups.length > 0) state.selectedGroup = state.groups[0]
    }
  },
  [types.SAVE_GROUP] (state, payload) {
    const group = state.groups.find(x => x.id === payload.id)
    if (group !== null) group.name = payload.name
  },
  [types.CREATE_GROUP] (state, payload) {
    state.groups.push(payload)
    state.selectedGroup = payload
  },
  [types.RECIVE_CHILDREN_GROUP] (state, payload) {
    state.groups = payload
    if (payload.length > 0) state.selectedGroup = payload[0]
  },
  [types.SET_SELECTED_CHILD_GROUP] (state, payload) {
    state.selectedGroup = payload
  }
}

// getters
const getters = {
  getSelectedGroup: state => state.selectedGroup,
  getGroups: state => state.groups
}

export default {
  state,
  getters,
  actions,
  mutations
}
