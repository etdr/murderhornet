<template>
  <div id="grid">
    <message-box :trigger="submitTrigger" />
    <entry :submitWord="submitWord" :shuffleLetters="shuffleLetters" />
    <letter-grid :shuffleTrigger="shuffleTrigger" />
    <control-buttons />
  </div>
</template>

<script>
import Entry from './Entry/Entry.vue'
import LetterGrid from './Letters/LetterGrid.vue'
import ControlButtons from './ControlButtons.vue'
import MessageBox from './MessageBox.vue'

export default {
  components: {
    Entry,
    LetterGrid,
    ControlButtons,
    MessageBox
  },
  data () {
    return {
      submitTrigger: 0,
      shuffleTrigger: 0
    }
  },
  methods: {
    submitWord () {
      this.submitTrigger++
    },
    shuffleLetters () {
      this.shuffleTrigger++
    }
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