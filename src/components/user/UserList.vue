<template>
<div class="container" style="padding-top: 30px">
  <div class="columns">
    <div class="column is-12">
      <b-table :data="model" hoverable striped>
        <template slot-scope="props">
          <b-table-column width="60" label="#">
            {{++props.index}}
          </b-table-column>
          <b-table-column label="ФИО">
            {{props.row.fio}}
          </b-table-column>
          <b-table-column label="E-mail">
            {{props.row.email}}
          </b-table-column>
          <b-table-column label="Роль">
            {{props.row.role}}
          </b-table-column>
          <b-table-column label="">
            <div>
              <i class="is-pulled-right fa fa-remove has-text-danger is-size-4" @click="removeChildDialog(props.row)">&nbsp;</i>
              <router-link tag="i" class="is-pulled-right fa fa-pencil is-size-4" :to="'/user/'+props.row.id"></router-link>
              <i class="is-pulled-right fa fa-lock has-text-warning is-size-4" @click="toggleBlocking(props.row, !props.row.isLocked)" title="Заблокировать" v-if="props.row.isLocked === false">&nbsp;</i>
              <i class="is-pulled-right fa fa-unlock has-text-success is-size-4" @click="toggleBlocking(props.row, !props.row.isLocked)" title="Разблокировать" v-else>&nbsp;</i>
            </div>
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
    }
  },
  computed: {
    ...mapGetters({
      model: 'getUsers'
    })
  },
  methods: {
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
  async created () {
  },
  watch: {
  }
}
</script>
