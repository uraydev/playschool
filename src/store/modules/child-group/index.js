import context from '../../../api/children'
import * as types from '../../types'

const state = {
  selectedChildGroup: null,
  childrenGroup: null
}

// actions
const actions = {
  reciveChildrenByGroup ({commit}) {
    context.reciveChildrenGroup().then(x => commit(types.RECIVE_CHILDREN_GROUP, x))
  },
  setSelectedChildGroup ({state, commit}, group) {
    const findChildGroup = state.childrenGroup.find(x => x.group === group.id)
    commit(types.SET_SELECTED_CHILD_GROUP, findChildGroup !== null ? findChildGroup : [])
  }
}

// mutations
const mutations = {
  [types.RECIVE_CHILDREN_GROUP] (state, payload) {
    state.childrenGroup = payload
    if (payload.length > 0) state.selectedChildGroup = payload[0]
  },
  [types.SET_SELECTED_CHILD_GROUP] (state, payload) {
    state.selectedChildGroup = payload
  }
}

// getters
const getters = {
  getSelectedChildGroup: state => state.selectedChildGroup,
  getChildrenGroup: state => state.childrenGroup
}

export default {
  state,
  getters,
  actions,
  mutations
}
