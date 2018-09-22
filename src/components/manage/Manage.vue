<template>
<div class="container" style="padding-top: 30px">
  <div class="columns">
    <div class="column is-12">
      <div class="panel">
        <div class="panel-block is-flex" style="justify-content: space-between">
          <div>
            <b-select placeholder="Выберите группу" v-model="selectedGroup">
              <option
                  v-for="option in groups"
                  :value="option"
                  :key="option.id">
                  {{ option.name}}
              </option>
            </b-select>
          </div>
          <div class="is-flex">
            <a class="is-link is-active" @click="toggleStyle()">
              <i class="fa fa-2x fa-th-large"  style="margin-right: 15px"></i>
            </a>
            <a class="is-link is-active" @click="toggleStyle()">
              <i class="fa fa-2x fa-th-list"></i>
            </a>
          </div>
          <div>
            <b-datepicker placeholder="Дата" icon="calendar" v-model="selectedDay"> </b-datepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="hero" v-if="children.length == 0 && isTable === true">
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
  <div class="columns is-multiline" v-if="isTable">
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
  <div class="columns" v-if="isList">
    <div class="column is-12" >
      <b-table :data="children" hoverable striped>
        <template slot-scope="props">
          <b-table-column width="40" label="#">
            {{props.row.id}}
          </b-table-column>
          <b-table-column label="Фото" width="50">
            <img src="@/assets/bg1.jpg" width="35" alt="">
          </b-table-column>
          <b-table-column label="ФИО">
            {{props.row.fio}}
          </b-table-column>
          <b-table-column label="Действия" width="250" >
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
          </b-table-column>
        </template>
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon size="is-large" icon="frown-o"></b-icon>
              </p>
              <p>По выбранной группе нет данных</p>
            </div>
          </section>
        </template>
      </b-table>
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
      selectedDay: new Date(),
      isTable: true,
      isList: false,
      selectedStyle: null
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
  methods: {
    toggleStyle () {
      this.isTable = !this.isTable
      this.isList = !this.isList
    }
  },
  async created () {
    this.selectedGroup = this.groups[0]
  },
  watch: {
  }
}
</script>
