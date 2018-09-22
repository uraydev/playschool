<template>
  <div class="container" style="padding-top: 30px">
    <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image" style="text-align: center">
            <img src="@/assets/bg1.jpg" alt="Placeholder image">
          </div>
          <div class="card-content">
            <div class="content">
              {{child.fio}}              
            </div>
            <b-field>
                <a class="button is-success is-fullwidth is-rounded" @click="saveChildData">
                  <span class="icon is-large">
                    <i class="is-pulled-right fa fa-pencil"></i>  
                  </span>
                  <span>
                    Сохранить            
                  </span>
                </a>
              </b-field>
              <b-field>
                <router-link class="button is-rounded is-fullwidth" to="/children">
                  <span class="icon is-large">
                    <i class="is-pulled-right fa fa-arrow-left"></i>  
                  </span>
                  <span>
                    Назад            
                  </span>
                </router-link>
              </b-field>
            
          </div>
        </div>
      </div>
      <div class="column is-9">
        <b-tabs>
          <b-tab-item label="Инфо">
            <b-field label="ФИО">
              <b-input v-model="fio"></b-input>
            </b-field>
            <b-field label="Дата рождения">
              <b-datepicker placeholder="Дата" icon="calendar" v-model="dob"> </b-datepicker>
            </b-field>
          </b-tab-item>   
          <b-tab-item label="Болезни">
            <b-field>
              <b-input type="textarea" v-model="illness"></b-input>
            </b-field>
          </b-tab-item>  
          <b-tab-item label="Прочее">
            <b-field>
              <b-input type="textarea" v-model="other"></b-input>
            </b-field>
          </b-tab-item>  
        </b-tabs>
        
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      dob: null,
      fio: null,
      illness: null,
      other: null
    }
  },
  computed: {
    ...mapGetters(['getChildById']),
    child () {
      return this.getChildById(this.id)
    }
  },
  async created () {
    this.fio = this.child.fio
    this.dob = this.child.dob
    this.illness = this.child.illness
    this.other = this.child.other
  },
  methods: {
    saveChildData () {
      this.$store.dispatch('editChild', {
        id: this.child.id,
        fio: this.child.fio,
        dob: this.child.dob,
        illness: this.illness,
        other: this.other
      })
        .then(() => {
          this.$toast.open({
            message: 'Данные успешно сохранены',
            type: 'is-success'
          })
        })
    }
  },
  watch: {
    child (e) {
    }
  }
}
</script>

<style>
  .b-tabs .tab-content {
    min-height: 550px;
  }
</style>
