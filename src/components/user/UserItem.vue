<template>
<div class="container" style="padding-top: 30px">
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <b-field label="ФИО">
        <b-input v-model="fio"></b-input>
      </b-field>
      <b-field label="Роль">
        <b-select expanded placeholder="Выберите роль" v-model="role">
          <option
            v-for="option in getRoles"
            :value="option"
            :key="option">
            {{ option}}
          </option>
        </b-select>
      </b-field>
      <b-field label="E-mail">
        <h3>{{user.email}}</h3>
      </b-field>
      <b-field label="Статус блокировки">
        <h3>{{user.isLocked}}</h3>
      </b-field>
      <b-field>
        <a class="button is-success is-fullwidth is-rounded" @click="saveUserData">
          <span class="icon is-large">
            <i class="is-pulled-right fa fa-check"></i>  
          </span>
          <span>
            Сохранить            
          </span>
        </a>
      </b-field>
      <b-field>
        <router-link class="button is-rounded is-fullwidth" to="/users">
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
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      fio: null,
      role: null
    }
  },
  computed: {
    ...mapGetters(['getUserById', 'getRoles']),
    user () {
      return this.getUserById(this.id)
    }
  },
  async created () {
    this.fio = this.user.fio
    this.role = this.user.role
  },
  methods: {
    saveUserData () {
      this.$store.dispatch('editUser', {
        id: this.user.id,
        fio: this.fio,
        role: this.role
      })
        .then(() => {
          this.$toast.open({
            message: 'Данные успешно сохранены',
            type: 'is-success'
          })
        })
    },
    removeChildDialog (item) {
      this.$dialog.confirm({
        title: 'Подтвердите удаление',
        message: 'Удалить ребенка "' + item.fio + '" из списка?',
        type: 'is-danger',
        onConfirm: () => this.removeUser(item)
      })
    },
    test () {
      this.$router.push({name: 'Main'})
    },
    removeUser (item) {
      this.$store.dispatch('removeUser', item)
    },
    toggleBlocking (user, isLocked) {
      this.$store.dispatch('toggleBlockingUser', {user, isLocked})
    }
  },
  watch: {
  }
}
</script>
