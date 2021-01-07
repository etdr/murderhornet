<template>
  <div id="lettergrid">
    <primary />
    <secondary v-for="i in $store.state.secondArity" :key="i" :i="i" />
  </div>  
</template>

<script>
import Primary from './Primary.vue'
import Secondary from './Secondary.vue'

export default {
  components: {
    Primary,
    Secondary
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