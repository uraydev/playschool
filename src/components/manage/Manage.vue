<template>
<div class="container" style="padding-top: 30px">
  <div class="columns">
    <div class="column is-12">
      <div class="panel">
        <div class="panel-block" style="justify-content: space-between">
            <b-select placeholder="Выберите группу" v-model="selectedGroup">
                <option
                    v-for="option in groups"
                    :value="option"
                    :key="option.id">
                    {{ option.name}}
                </option>
            </b-select>
          <div>
            <b-datepicker placeholder="Дата рождения" icon="calendar-today" v-model="selectedDay"> </b-datepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="hero" v-if="children.length == 0">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Нет данных
      </h1>
      <h2 class="subtitle">
        По выбранной группе нет данных
      </h2>
    </div>
  </div>
</section>
  <div class="columns is-multiline">
    <div class="column is-2" v-for="child in children" :key="child.id">
      <div class="card">
        <div class="card-header">
          {{child.fio}}
        </div>
          <div class="card-image" style="text-align: center">
            <img src="@/assets/bg1.jpg" alt="Placeholder image">
          </div>
          <div class="card-content">
            <div class="content">
              <b-dropdown hoverable class="is-block">
                <button class="button is-rounded is-info is-fullwidth" slot="trigger">
                    <span class="icon is-large">
                      <i class="fa fa-flash"></i>
                    </span>
                    <span>Действия</span>
                    <b-icon icon="sort-down"></b-icon>
                </button>
                <b-dropdown-item>Присутствует</b-dropdown-item>
                <b-dropdown-item>Отсутствует</b-dropdown-item>
                <b-dropdown-item>Карта болезней</b-dropdown-item>
                <b-dropdown-item>Снять с питания</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      selectedGroup: null,
      selectedDay: new Date()
    }
  },
  computed: {
    ...mapGetters({
      groups: 'getGroups'
    }),
    children () {
      if (this.selectedGroup && this.selectedGroup.children) return this.selectedGroup.children
      return []
    }
  },
  async created () {
    this.selectedGroup = this.groups[0]
  },
  watch: {
    selectedGroup (val) {
    }
  }
}
</script>
