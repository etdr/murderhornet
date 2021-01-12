<template>
  <div id="controls">
    <h2 class="control-item" @click="newGame()">NEW GAME</h2>
    <h2 class="control-item">RESET GAME</h2>
  </div>
</template>

<script>
export default {
  methods: {
    newGame () {
      this.$store.commit('newGame', {pangram: true, disallowed: [], quantity: 7})
    }
  }
}
</script>

<style lang="postcss" scoped>
#controls {
  background-color: #222;
  border-top: 3px solid darkgray;
  min-height: 10vh;
  width: 100%;
  display: flex;
  color: darkorange;
  text-align: center;
}

.control-item {
  flex: 1 0 auto;
  transition: text-shadow .2s;
}

.control-item:hover {
  text-shadow: 0 0 1rem yellow;
}
</style>