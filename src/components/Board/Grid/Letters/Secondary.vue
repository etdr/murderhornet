<template>
  <h2>{{ $store.state.letters.secondaries[i - 1] }}</h2>
</template>

<script>
export default {
  props: [
    'i'
  ]

}
</script>

<style lang="postcss" scoped>
h2 {
  display: inline-block;
  flex: 1 0 auto;

  color: black;
}
</style>