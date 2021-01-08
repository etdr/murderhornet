<template>
  <div id="lettergrid">
    <secondary v-for="i in firstSecondariesCount" :key="i" :i="secondaries[i - 1]" />
    <primary />
    <secondary v-for="i in secondSecondariesCount + 1" :key="i" :i="secondaries[i + firstSecondariesCount - 1]" />
  </div>  
</template>

<script>
import Primary from './Primary.vue'
import Secondary from './Secondary.vue'

export default {
  props: ['shuffleTrigger'],
  components: {
    Primary,
    Secondary
  },
  data () {
    return {
      firstSecondariesCount: 0,
      secondaries: this.$store.state.letters.secondaries
    }
  },
  methods: {
    shuffleSecondaries () {
      this.firstSecondariesCount = Math.floor(Math.random() * this.$store.state.secondArity)

      const ls = [...this.$store.state.letters.secondaries ]
      let currentI = ls.length, temp, randI

      while (0 !== currentI) {
        randI = Math.floor(Math.random() * currentI)
        currentI--

        temp = ls[currentI]
        ls[currentI] = ls[randI]
        ls[randI] = temp
      }
      console.log(ls)
      this.secondaries = ls
    },
  },
  computed: {
    secondSecondariesCount () {
      return this.$store.state.secondArity - this.firstSecondariesCount
    },

  },
  watch: {
    shuffleTrigger () {
      this.shuffleSecondaries()
    }
  }

}
</script>

<style lang="postcss" scoped>
#lettergrid {
  display: flex;
  flex: 0;
}

:deep() h2 {
  width: 10px;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
}
</style>