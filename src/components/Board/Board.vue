<template>
  <div id="board">
    <grid />
    <status />
  </div>
  <controls />
</template>

<script>
import Grid from './Grid/Grid.vue'
import Status from './Status/Status.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Grid,
    Status,
    Controls
  }
}
</script>

<style lang="postcss">
#board {
  display: flex;
  width: 100%;
  min-height: 40vh;
  background-color: #f4f4f4;
}

#gridholder {
  display: flex;
  flex: 1 0 auto;
}
</style>