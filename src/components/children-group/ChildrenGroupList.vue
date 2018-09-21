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
            <div class="tile" style="align-items: center" v-if="group.id !== editGroup.id">
              <span class="panel-icon">
                <i class="fa fa-database"></i>
              </span>
              {{group.name}}
              <div style="margin-left: auto" v-if="hasPermission('GroupListEdit')">
                <i class="is-pulled-right fa fa-remove" @click="removeGroupDialog(group)">&nbsp;</i>
                <i class="is-pulled-right fa fa-pencil" @click="showGroupEditor(group)">&nbsp;</i>
              </div>
            </div>
            <div class="tile is-vertical" v-if="group.id === editGroup.id">
              <div class="field">
                <div class="control">
                  <input type="text" v-model="editGroup.name" placeholder="Введите название группы" class="input">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-info is-fullwidth" @click="saveGroup(group)">Сохранить</button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div @click="selectGroup(group)" :class="{'panel-block': true, 'is-active': isCurrent(group)}" v-for="group in groups" :key="group.id" >
            <div class="tile" style="align-items: center">
              <span class="panel-icon">
                <i class="fa fa-database"></i>
              </span>
              {{group.name}}
            </div>
          </div> -->
          <div class="panel-block" v-if="hasPermission('GroupListCreate')">
            <a class="button is-info is-fullwidth is-outlined" @click="createNewGroup">
              + Добавить группу
            </a>
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
import permissionMixin from '@/mixins/permission'

export default {
  mixins: [permissionMixin],
  data () {
    return {
      editGroup: {
        id: null,
        name: null
      },
      searchGroup: '',
      searchChild: ''
    }
  },
  computed: {
    groups () {
      return this.groupsModel.filter(x => x.name.indexOf(this.searchGroup) > -1)
    },
    children () {
      if (this.selectedGroup) return this.selectedGroup.children.filter(x => x.fio.indexOf(this.searchChild) > -1)
      return []
    },
    ...mapGetters({
      groupsModel: 'getGroups',
      selectedGroup: 'getSelectedGroup'
    })
  },
  methods: {
    removeGroupDialog (group) {
      this.$dialog.confirm({
        title: 'Подтвердите удаление',
        message: 'Удалить группу из списка?',
        type: 'is-success',
        onConfirm: () => this.removeGroup(group)
      })
    },
    removeGroup (group) {
      this.$store.dispatch('removeGroup', group)
    },
    saveGroup (group) {
      this.$store.dispatch('saveGroup', {id: this.editGroup.id, name: this.editGroup.name})
      this.resetEditGroup()
    },
    showGroupEditor (group) {
      this.editGroup = {id: group.id, name: group.name}
    },
    createNewGroup () {
      this.search = ''
      this.$store.dispatch('createNewGroup')
    },
    selectGroup (group) {
      this.$store.dispatch('setSelectedGroup', group)
    },
    isCurrent (group) {
      if (this.selectGroup === null) return false
      if (group.id === this.selectedGroup.id) return true
      return false
    },
    resetEditGroup () {
      this.editGroup = {id: null, name: null}
    }
  },
  created () {
    // if (this.groups) this.selectedGroup = this.groups[0]
  },
  watch: {
    selectedGroup () {
      this.resetEditGroup()
    }
  }
}
</script>
