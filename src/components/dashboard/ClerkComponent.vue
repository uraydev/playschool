<template>
  <div class="container">
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

export default {
  components: {ChildernList, GroupList}
}
</script>
