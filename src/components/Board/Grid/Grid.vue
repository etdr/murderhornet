<template>
  <div id="grid">
    <entry />
    <letter-grid />
    <control-buttons />
  </div>
</template>

<script>
import Entry from './Entry/Entry.vue'
import LetterGrid from './Letters/LetterGrid.vue'
import ControlButtons from './ControlButtons.vue'

export default {
  components: {
    Entry,
    LetterGrid,
    ControlButtons
  }
}
</script>

<style lang="postcss">
#grid {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  align-items: center;
  border-right: 1px solid black;
  justify-content: center;
}

:deep() h2 {
  display: inline-flex;
}
</style>