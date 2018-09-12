<template>
  <div class="container" style="padding-top: 30px">
    <div class="columns">
      <div class="column is-6">
        <group-list/>
      </div>
      <div class="column is-6">
        <childern-list/>
      </div>
    </div>
  </div>
</template>

<script>
import ChildernList from '@/components/children/ChildrenList'
import GroupList from '@/components/group/GroupList'
// import {mapGetters} from 'vuex'

export default {
  components: {ChildernList, GroupList},
  created () {
    // console.log('ss')
  }
}
</script>
