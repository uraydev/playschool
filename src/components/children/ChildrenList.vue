<template>
  <aside class="panel">
    <div class="panel-heading">Дети</div>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input type="text" class="input is-small" placeholder="Поиск" v-model="search">
        <span class="icon is-smal is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <div class="panel-block" v-for="child in children" :key="child.id" >
      <div class="tile" style="align-items: center" v-if="child.id !== currentEditChildId">
        <span class="panel-icon">
          <i class="fa fa-user-circle-o"></i>
        </span>
        {{child.fio}}
        <div style="margin-left: auto"  v-if="hasPermission('ChildrenListEdit')">
          <i class="is-pulled-right fa fa-remove" @click="removeChildDialog(child)">&nbsp;</i>
          <i class="is-pulled-right fa fa-pencil" @click="showEditor(child)">&nbsp;</i>
        </div>
      </div>
      <div class="tile is-vertical" v-if="child.id === currentEditChildId">
        <div class="field">
          <div class="control">
            <input type="text" v-model="currentEditChildFio" placeholder="Введите ФИО ребенка" class="input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <b-datepicker placeholder="Дата рождения" icon="calendar-today" v-model="currentEditChildDob"> </b-datepicker>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-info is-fullwidth" @click="saveChild(child)">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-block" v-if="hasPermission('ChildrenListCreate')">
      <a class="button is-success is-fullwidth is-outlined" @click="createNewChild">
        + Добавить ребёнка
      </a>
    </div>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex'
import permissionMixin from '@/mixins/permission'

// import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.js'
// import 'bulma-calendar/dist/css/bulma-calendar.min.css'

export default {
  mixins: [permissionMixin],
  computed: {
    children () {
      return this.model.filter(x => x.fio.indexOf(this.search) > -1)
    },
    ...mapGetters({
      model: 'child/model'
    })
  },
  data () {
    return {
      search: '',
      currentEditChildId: null,
      currentEditChildFio: '',
      currentEditChildDob: ''
    }
  },
  async created () {
    await this.$store.dispatch('child/reciveChildren')
  },
  methods: {
    showEditor (child) {
      this.currentEditChildId = child.id
      this.currentEditChildFio = child.fio
      this.currentEditChildDob = child.dob
    },
    saveChild (child) {
      this.$store.dispatch('child/editChild', {id: this.currentEditChildId, fio: this.currentEditChildFio, dob: this.currentEditChildDob})
      this.resetCurrentChild()
    },
    resetCurrentChild () {
      this.currentEditChildId = null
      this.currentEditChildFio = ''
      this.currentEditChildDob = ''
    },
    createNewChild () {
      this.search = ''
      this.$store.dispatch('child/newChild')
    },
    removeChildDialog (child) {
      this.$dialog.confirm({
        title: 'Подтвердите удаление',
        message: 'Удалить ребенка из списка?',
        type: 'is-success',
        onConfirm: () => this.removeChild(child)
      })
    },
    removeChild (child) {
      this.$store.dispatch('child/removeChild', child)
    }
  }
}
</script>

