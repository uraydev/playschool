<template>
  <div class="container">
    <div class="row columns is-multiline">
      <div class="column is-2" v-for="card in cards" v-bind:key="card.id">
        <div class="card large round">
          {{ card.caption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    let c = []

    for (let i = 0; i < 100; i++) {
      c.push({
        id: i,
        caption: `Карточка ${i + 1}`
      })
    }

    return {
      cards: c
    }
  }
}
</script>

