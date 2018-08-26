<template lang="html">
  <main>
    <sb-footer/>
  </main>
</template>

<script>
import Footer from '@/components/Footer';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import 'flexboxgrid';

export default {

  components: {
    'sb-footer': Footer,
  },

  data: () => ({
  }),
};
</script>

<style lang="scss">
* { box-sizing: content-box; }
body {
  font-family: Roboto, sans-serif;
}
</style>
