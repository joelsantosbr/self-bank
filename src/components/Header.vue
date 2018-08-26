<template lang="html">
  <header>
    <nav class="menu-header">
     <div class="nav-wrapper">
       <a href="#!" :class="{ 'display-none': $route.path==='/cadastrar'}" @click="$router.go(-1)" class="brand-logo left"><i class="material-icons">arrow_back</i> <strong class="menu-header__page-title">{{ page_title }}</strong></a>
       <ul class="right">
         <li><a href="#" data-target="sidenav-mobile" class="sidenav-trigger"><i class="material-icons">more_vert</i></a></li>
       </ul>
     </div>
   </nav>
  </header>
</template>

<script>
import MenuLateral from '@/components/MenuLateral';

export default {
  components: {
    'sb-menu-lateral': MenuLateral,
  },

  computed: {
    page_title: {
      get() { return this.$store.state.page_title; },
    },
  },

  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
  },
}
</script>

<style lang="scss">
.menu-header {
  margin-bottom: 20px;
  background-color: #1461d7;

  .material-icons { color: #00F898; }
  .sidenav-trigger { margin: 0; }

  &__page-title {
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
  }

  .display-none {
    display: none;
  }
}
</style>
