<template>
  <navbar />
  <router-view />
  <div id="app-spacer"></div>
  <footer />
</template>

<script>
import Navbar from './components/Navbar.vue'

import { getAllWordsForLetters } from './logic/generation.js'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

console.log(getAllWordsForLetters({ primary: 'e', secondaries: ['c', 'n', 'u', 'x', 'a', 't']}))
</script>

<style lang="postcss" scoped>
footer {

}

#app-spacer {
  flex: 1 0 auto;
  background-color: #222;
}
</style>
