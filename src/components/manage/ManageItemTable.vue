<template>
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
</template>

<script>
export default {
  props: ['children']
}
</script>
