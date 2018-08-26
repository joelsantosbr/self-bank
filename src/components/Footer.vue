<template lang="html">
  <div id="footer-app" class="row center-xs middle-xs footer-app">
    <div class="col-xs">
        <router-link :to="{ name: 'credito', params: {} }">
      <img :src="imgFirstItem" alt="Investimento"> 
        </router-link>
    </div>
    <div class="col-xs">
      <div class="footer-app__float-icon">
        <router-link :to="{ name: 'maquininhas', params: {} }">
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </div>
    <div class="col-xs">
        <router-link :to="{ name: 'emprestimo', params: {} }">
      <img :src="imgSecondItem" alt="Empréstimo"> 
        </router-link>
    </div>
  </div>
</template>

<script>
import imgFirstItem from '@/assets/img/investimento.png';
import imgSecondItem from '@/assets/img/emprestimo.png';
export default {

  name: 'Footer',

  data: () => ({
    showSecondary: true,
    imgFirstItem,
    imgSecondItem,
  }),

}
</script>

<style lang="scss">
.footer-app {
  position: fixed;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  height: 56px;
  z-index: 2;
  color: #FFF;
  cursor: pointer;
  background-color: #1461d7;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    top: -40px;
    background-color: #FFF;
  }

  .material-icons {
    font-size: 32px;
    color: #00F898;
  }

  &__float-icon {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 56px;
    z-index: 2;
    margin-bottom: 56px;
    border-radius: 100%;
    background-color: #00F898;
    transition: .4s margin ease-in-out;
    box-shadow: 0 6px 6px rgba(0, 0, 0, .24);

    .material-icons {
      margin-top: 7px;
      font-size: 42px;
      color: #FFF;
    }

    &:active,
    &:hover {
      margin-bottom: 40px;
    }
  }
}
</style>
