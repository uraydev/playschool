<template>
  <aside class="menu" style="margin-top: 30px;">
    <p class="menu-label is-active">
      Группы
    </p>
    <ul class="menu-list">
      <li>
        <ul>
          <li v-for="group in model" :key="group.id">
            <a v-if="group.id !== currentEditGroupId">
              {{group.name}}
              <i class="is-pulled-right fa fa-remove" @click="removeGroup(group)">&nbsp;</i>
              <i class="is-pulled-right fa fa-pencil" @click="showEditor(group)">&nbsp;</i>
            </a>
            <div class="field has-addons" v-if="group.id === currentEditGroupId">
              <div class="control is-expanded">
                <input type="text" v-model="currentEditGroupName" placeholder="Введите название группы" class="input">
              </div>
              <div class="control">
                <button class="button is-info" @click="saveGroup(group)">Сохранить</button>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <a class="button is-info" @click="createNewGroup">
      + Добавить группу
    </a>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters({
    model: 'group/model'
  }),
  data () {
    return {
      currentEditGroupId: null,
      currentEditGroupName: ''
    }
  },
  created () {
    this.$store.dispatch('group/reciveGroups')
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
      this.$store.dispatch('group/newGroup')
    },
    removeGroup (group) {
      this.$store.dispatch('group/removeGroup', group)
    }
  }
}
</script>

