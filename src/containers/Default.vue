<template lang="html">
  <main>
    <sb-header/>
    <router-view/>
    <sb-footer :class="{ 'display-none': $route.path==='/cadastrar'}"/>
  </main>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderRecebiveis from '@/components/HeaderRecebiveis';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'flexboxgrid';

export default {

  components: {
    'sb-header': Header,
    'sb-header-recebiveis': HeaderRecebiveis,
    'sb-footer': Footer,
  },

};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>
