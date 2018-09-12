<template>
  <aside class="panel">
    <div class="panel-heading">Группы</div>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input type="text" class="input is-small" placeholder="Поиск" v-model="search">
        <span class="icon is-smal is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <div class="panel-block" v-for="group in groups" :key="group.id" >
      <div class="tile" style="align-items: center" v-if="group.id !== currentEditGroupId">
        <span class="panel-icon">
          <i class="fa fa-database"></i>
        </span>
        {{group.name}}
        <div style="margin-left: auto">
          <i class="is-pulled-right fa fa-remove" @click="removeGroup(group)">&nbsp;</i>
          <i class="is-pulled-right fa fa-pencil" @click="showEditor(group)">&nbsp;</i>
        </div>
      </div>
      <div class="tile is-vertical" v-if="group.id === currentEditGroupId">
        <div class="field">
          <div class="control">
            <input type="text" v-model="currentEditGroupName" placeholder="Введите название группы" class="input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-info is-fullwidth" @click="saveGroup(group)">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-block">
      <a class="button is-info is-fullwidth is-outlined" @click="createNewGroup">
        + Добавить группу
      </a>
    </div>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    groups () {
      return this.model.filter(x => x.name.indexOf(this.search) > -1)
    },
    ...mapGetters({
      model: 'group/model'
    })
  },
  data () {
    return {
      search: '',
      currentEditGroupId: null,
      currentEditGroupName: ''
    }
  },
  async created () {
    await this.$store.dispatch('group/reciveGroups')
  },
  methods: {
    showEditor (group) {
      this.currentEditGroupId = group.id
      this.currentEditGroupName = group.name
    },
    saveGroup (group) {
      this.$store.dispatch('group/editGroup', {id: this.currentEditGroupId, name: this.currentEditGroupName})
      this.resetCurrentGroup()
    },
    resetCurrentGroup () {
      this.currentEditGroupId = null
      this.currentEditGroupName = ''
    },
    createNewGroup () {
      this.search = ''
      this.$store.dispatch('group/newGroup')
    },
    removeGroup (group) {
      this.$store.dispatch('group/removeGroup', group)
    }
  }
}
</script>

