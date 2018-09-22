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
            <a class="is-link is-active" @click="toggleStyle(0)">
              <i class="fa fa-2x fa-th-large"  style="margin-right: 15px"></i>
            </a>
            <a class="is-link is-active" @click="toggleStyle(1)">
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
  <component :is="selectedStyle" children="children"></component>
  
</div>
</template>

<script>
import ManageItemTable from '@/components/manage/ManageItemTable'
import ManageItemList from '@/components/manage/ManageItemList'
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
    toggleStyle (style) {
      if (style === 0) this.selectedStyle = ManageItemTable
      else this.selectedStyle = ManageItemList
    }
  },
  async created () {
    this.selectedGroup = this.groups[0]
    this.selectedStyle = ManageItemTable
  },
  watch: {
    selectedGroup (val) {
    }
  }
}
</script>
