<template>
  <h4 :class="classes">{{ $store.state.mbm }}</h4>
</template>

<script>
export default {
  props: ['trigger'],
  data () {
    return {
      classes: {
        shown: false
      }
    }
  },
  watch: {
    trigger (newVal, oldVal) {
      this.classes.shown = true
      setTimeout(() => {this.classes.shown = false}, 1200)
    }
  }
}
</script>

<style lang="postcss" scoped>
h4 {
  color: yellow;
  background-color: black;
  padding: 5px;
  border-radius: 10px;
  font-weight: normal;
  font-style: italic;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
}

h4.shown {
  visibility: visible;
  opacity: 1;
  /* display: block; */
}
</style>