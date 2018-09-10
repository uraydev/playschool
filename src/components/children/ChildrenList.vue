<template>
  <aside class="menu" style="margin-top: 30px;">
    <p class="menu-label is-active">
      Дети
    </p>
    <ul class="menu-list">
      <li>
        <ul>
          <li v-for="child in model" :key="child.id">
            <a v-if="child.id !== currentEditChildId">
              {{child.fio}}
              <i class="is-pulled-right fa fa-remove" @click="removeChild(child)">&nbsp;</i>
              <i class="is-pulled-right fa fa-pencil" @click="showEditor(child)">&nbsp;</i>
            </a>
            <div class="field has-addons" v-if="child.id === currentEditChildId">
              <div class="control is-expanded">
                <input type="text" v-model="currentEditChildFio" placeholder="Введите ФИО ребенка" class="input">
              </div>
              <div class="control is-expanded">
                <input type="date" ref="calendarTrigger" class="input">
              </div>
              <div class="control">
                <button class="button is-info" @click="saveChild(child)">Сохранить</button>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <a class="button is-success" @click="createNewChild">
      + Добавить ребёнка
    </a>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex'
import bulmaCalendar from 'bulma-calendar'

export default {
  computed: mapGetters({
    model: 'child/model'
  }),
  data () {
    return {
      currentEditChildId: null,
      currentEditChildFio: '',
      currentEditChildDob: ''
    }
  },
  mounted () {
    console.log(this.$refs.calendarTrigger)
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date
    })[0]
    console.log(calendar)
    // calendar.on('date:selected', e => (this.date = e.start || null))
  },
  created () {
    this.$store.dispatch('child/reciveChildren')
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
      this.$store.dispatch('child/newChild')
    },
    removeChild (child) {
      this.$store.dispatch('child/removeChild', child)
    }
  }
}
</script>

