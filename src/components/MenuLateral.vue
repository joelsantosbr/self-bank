<template lang="html">
  <ul class="sidenav" id="sidenav-mobile">
    <li><a class="sidenav-close" href="#!" @click="$router.push('/home')" >Home</a></li>
    <li><a class="sidenav-close" href="#!" @click="$router.push('/cadastrar-maquininha')">Maquininhas</a></li>
    <li><a class="sidenav-close" href="#!" @click="$router.push('/cadastrar')">Cadastrar</a></li>
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
