<template lang="html">
  <header>
    <nav class="menu-header">
     <div class="nav-wrapper">
       <a href="#!" @click="$router.go(-1)" class="brand-logo left">
         <i class="material-icons" :class="{ 'display-none': $route.path==='/cadastrar'}">arrow_back</i> <strong class="menu-header__page-title" v-html="page_title"></strong>
       </a>
       <ul class="right">
         <li><a href="#" data-target="sidenav-mobile" class="sidenav-trigger"><i class="material-icons">more_vert</i></a></li>
       </ul>
     </div>
   </nav>
   <sb-menu-lateral/>
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

}
</script>

<style lang="scss" scoped>
.menu-header {
  margin-bottom: 20px;
  background-color: transparent;

  .material-icons { color: #00F898; }
  .sidenav-trigger { margin: 0; }

  &__page-title {
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
  }

}
</style>
