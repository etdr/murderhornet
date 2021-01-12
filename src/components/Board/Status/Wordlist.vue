<template>
  <ul>
    <li v-for="(w, i) of $store.state.guessed.true" :key="i">{{ w }}</li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
ul {
  font-family: 'Lato', sans-serif;
}
</style>