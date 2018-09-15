<template>
  <div class="container" style="padding-top: 30px">
    <div class="columns">
      <div class="column is-6">
        <aside class="panel">
          <div class="panel-block">
            <p class="control has-icons-left">
              <input type="text" class="input is-small" placeholder="Поиск" v-model="searchGroup">
              <span class="icon is-smal is-left">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div @click="selectGroup(group)" :class="{'panel-block': true, 'is-active': isCurrent(group)}" v-for="group in groups" :key="group.id" >
            <div class="tile" style="align-items: center">
              <span class="panel-icon">
                <i class="fa fa-database"></i>
              </span>
              {{group.name}}
            </div>
          </div>
        </aside>
      </div>
      <div class="column is-6">
        <aside class="panel">
          <div class="panel-block">
            <p class="control has-icons-left">
              <input type="text" class="input is-small" placeholder="Поиск" v-model="searchChild">
              <span class="icon is-smal is-left">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div @click="" :class="{'panel-block': true, 'is-active': isCurrent(child)}" v-for="child in children" :key="child.id" >
            <div class="tile" style="align-items: center">
              <span class="panel-icon">
                <i class="fa fa-database"></i>
              </span>
              {{child.fio}}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      searchGroup: '',
      searchChild: '',
      sGroup: null
    }
  },
  computed: {
    groups () {
      return this.model.filter(x => x.name.indexOf(this.searchGroup) > -1)
    },
    children () {
      if (this.selectedGroup) return this.selectedGroup.children.filter(x => x.fio.indexOf(this.searchChild) > -1)
      return []
    },
    ...mapGetters({
      model: 'group/model',
      selectedGroup: 'getSelectedChildGroup'
    })
  },
  methods: {
    selectGroup (group) {
      this.sGroup = group
      this.$store.dispatch('setSelectedChildGroup', group)
    },
    isCurrent (group) {
      if (!this.sGroup) return false
      if (group.id === this.sGroup.id) return true
    }
  },
  created () {
    // if (this.groups) this.selectedGroup = this.groups[0]
  }
}
</script>
