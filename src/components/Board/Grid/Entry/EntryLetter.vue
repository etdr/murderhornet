<template>
  <span :class="classes">{{ letter }}</span>
</template>

<script>
export default {
  props: [ 'letter' ],

  computed: {
    classes () {
      return {
        isPrimary: this.$store.state.letters.primary === this.letter,
        isInvalid: this.$store.state.letters.primary !== this.letter && !this.$store.state.letters.secondaries.includes(this.letter)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
span {
  display: inline-block;
  margin: 0 0.06rem;
}

.isPrimary {
  color: darkorange;
}

.isInvalid {
  color: lightgray;
}

</style>