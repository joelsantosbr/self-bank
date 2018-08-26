<template lang="html">
  <main>
    <sb-header/>
    <router-view/>
    <sb-footer/>
  </main>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'flexboxgrid';

export default {

  components: {
    'sb-header': Header,
    'sb-footer': Footer,
  },

};
</script>

<style lang="scss">
* { box-sizing: content-box; }
body {
  font-family: Roboto, sans-serif;
  padding-bottom: 100px;
}
.row { margin-bottom: 0; }
</style>
