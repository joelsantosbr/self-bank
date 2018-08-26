<template lang="html">
  <div class="home">
    <div>
      <input class="home__datepicker datepicker" type="text" placeholder="Filtrar por data">
    </div>

    <div class="row home__transations">
      <div class="col s1 home__selector">
        <label>
          <input type="checkbox" class="filled-in" />
          <span></span>
        </label>
      </div>
      <div class="col s3 text-center">
        <img :src="pagseguroIMG" alt="PagSeguro">
      </div>
      <div class="col s4">
        <strong>Crédito a vista</strong><br>
        <span class="home__money">R$ 1000,00</span>
      </div>
      <div class="col s4">
        <strong>para 30 dias</strong><br>
        <strong class="home__money">-5,2%</strong> <span class="home__money home__money--green">R$ 1000,00</span>
      </div>
    </div>

    <div class="row home__transations">
      <div class="col s1 home__selector">
        <label>
          <input type="checkbox" class="filled-in" />
          <span></span>
        </label>
      </div>
      <div class="col s3 text-center">
        <img :src="cieloIMG" alt="Celo">
      </div>
      <div class="col s4">
        <strong>Crédito a vista</strong><br>
        <span class="home__money">R$ 1000,00</span>
      </div>
      <div class="col s4">
        <strong>para 30 dias</strong><br>
        <strong class="home__money">-5,2%</strong> <span class="home__money home__money--green">R$ 1000,00</span>
      </div>
    </div>

    <div class="row home__transations">
      <div class="col s1 home__selector">
        <label>
          <input type="checkbox" class="filled-in" />
          <span></span>
        </label>
      </div>
      <div class="col s3 text-center">
        <img :src="pagseguroIMG" alt="PagSeguro">
      </div>
      <div class="col s4">
        <strong>Crédito a vista</strong><br>
        <span class="home__money">R$ 1000,00</span>
      </div>
      <div class="col s4">
        <strong>para 30 dias</strong><br>
        <strong class="home__money">-5,2%</strong> <span class="home__money home__money--green">R$ 1000,00</span>
      </div>
    </div>

    <div class="row home__transations">
      <div class="col s1 home__selector">
        <label>
          <input type="checkbox" class="filled-in" />
          <span></span>
        </label>
      </div>
      <div class="col s3 text-center">
        <img :src="pagseguroIMG" alt="Celo">
      </div>
      <div class="col s4">
        <strong>Crédito a vista</strong><br>
        <span class="home__money">R$ 1000,00</span>
      </div>
      <div class="col s4">
        <strong>para 30 dias</strong><br>
        <strong class="home__money">-5,2%</strong> <span class="home__money home__money--green">R$ 1000,00</span>
      </div>
    </div>

  </div>
</template>

<script>
import cieloIMG from '@/assets/img/cielo.png';
import pagseguroIMG from '@/assets/img/pagseguro.png';
import semicirculoIMG from '@/assets/img/semicirculo.svg';

export default {

  data() {
    return {
      cieloIMG,
      pagseguroIMG,
      semicirculoIMG,
    };
  },

  computed: {
    page_title: {
      get() { return this.$store.state.page_title; },
      set(payload) { this.$store.dispatch('setPageTitle', payload) },
    },
  },

  mounted() {
    this.page_title = 'Self_Bank <small>Saldo de recebíveis</small>';
    document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.datepicker');
     var instances = M.Datepicker.init(elems);
   });
  },
}
</script>

<style lang="scss">
.home {

  &__selector {
    margin-top: 4px;
  }

  &__datepicker {
    display: block;
    max-width: 280px;
    margin: 0 auto 30px!important;
  }

  &__transations {
    padding: 15px 20px;
    margin-bottom: 10px;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.87);
    background-color: #f0fee6;
    &:hover,
    &:active {
      background-color: rgba(0, 0, 0, .1);
    }
  }
}
</style>
