<template lang="html">
  <div>
    maquininhas
  </div>
</template>

<script>
export default {
  computed: {
    page_title: {
      get() { return this.$store.state.page_title; },
      set(payload) { this.$store.dispatch('setPageTitle', payload) },
    },
  },

  mounted() {
    this.page_title = 'Maquininhas';
  },
}
</script>

<style lang="scss">

</style>
