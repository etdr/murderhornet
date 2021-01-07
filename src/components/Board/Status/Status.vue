<template>
  <div id="status">
    <progress-meter />
    <wordlist />
  </div>
</template>

<script>
import Meter from './Meter.vue'
import Wordlist from './Wordlist.vue'

export default {
  components: {
    Wordlist,
    'progress-meter': Meter
  }
}
</script>

<style lang="postcss">
#status {
  flex: 1 0 auto;
}
</style>