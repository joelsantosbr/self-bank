<template lang="html">
  <ul class="sidenav" id="sidenav-mobile">
    <li><a class="sidenav-close" @click="$router.push('/home')" >Home</a></li>
    <li><a class="sidenav-close" @click="$router.push('/maquininhas')">Maquininhas</a></li>
    <li><a class="sidenav-close" @click="$router.push('/emprestimo')">Emprestimos</a></li>
    <li><a class="sidenav-close" @click="$router.push('/credito')">Investimentos</a></li>
    <li><a class="sidenav-close" @click="$router.push('/cadastrar')">Cadastrar</a></li>
  </ul>
</template>

<script>
export default {

  data() {
    return {
      elemn: '',
    }
  },

  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      this.elemn = document.getElementById('sidenav-mobile');
      const instance = M.Sidenav.init(this.elemn);
    });
  },
}
</script>

<style lang="scss">
</style>
