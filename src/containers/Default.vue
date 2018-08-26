<template lang="html">
  <main>
    <sb-cadastro-maquina/>
    <sb-footer/>
  </main>
</template>

<script>
import Footer from '@/components/Footer';
import Cadastro from '@/components/Cadastro';
import CadastroMaquina from '@/components/CadastroMaquina';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'flexboxgrid';

export default {

  components: {
    'sb-footer': Footer,
    'sb-cadastro': Cadastro,
    'sb-cadastro-maquina': CadastroMaquina
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

.row {
  margin-bottom: 0px;
}
</style>
