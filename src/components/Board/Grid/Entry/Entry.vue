<template>
  <div id="entrybox" @keydown="inputKey" tabindex="0">
    <h2><entry-letter v-for="(letter, i) of letters" :key="i" :letter="letter" /></h2>
  </div>
</template>

<script>
import EntryLetter from './EntryLetter.vue'

export default {
  components: {
    EntryLetter
  },
  data () {
    return {
      letters: []
    }
  },
  methods: {
    inputKey (e) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        this.letters.push(e.key.toLowerCase())
      } else if (e.keyCode === 8) {
        this.letters = this.letters.slice(0, -1)
      } else if (e.keyCode === 13) {
        this.$store.commit('guess', this.letters.join(''))
        this.letters = []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

#entrybox {
  padding: 0;
  margin: 0 auto;
  min-height: 14rem;
  width: 100%;
  display: flex;
  align-items: center;
}

#entrybox:focus {
  outline: none;
}

h2 {
  padding: 0 0 1.2rem;
  border-bottom: 2px solid gray;
  min-width: 8rem;
  margin: 0 auto;
  color: black;
  text-align: center;
  text-transform: uppercase;
  min-height: 4rem;
}

h2:focus {
  outline: none;
}

</style>