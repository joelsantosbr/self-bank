<template lang="html">
  <div id="cadastroMaquina" class="container">
    <div class="row">
        <form class="col s12">

        <div class="row">
          <div class="input-field col s12">
            <input id="nome" type="text" class="validate">
            <label for="nome">Nº de Identificação</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="cpf" type="text" class="validate">
            <label for="cpf">Nº de Contrato</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <select>
              <option value="itau">Rede</option>
              <option value="bradesco">Cielo</option>
              <option value="santander">GetNet</option>
            </select>
            <label>Empresa</label>
          </div>
        </div>

        <div class="row align-center">
          <div class="col s12 center-align">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Cadastrar</a>
          </div>
        </div>

        </form>
      </div>

      <div class="row" v-show="cardExists">
        <div class="col s12">
          <div class="card">

            <div class="card-content">
              <img class="materialboxed" width="146" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_PagSeguro.png/1200px-Logo_PagSeguro.png">
            </div>

            <div class="row card-content">
              <div class="input-field col s12">
                <input disabled value="1234029 - 92929292-m00" type="text" class="validate">
                <label for="nome">Nº de Identificação</label>
              </div>
            </div>

            <div class="row card-content">
              <div class="input-field col s12">
                <input disabled value="1234029 - 92929292-m00" type="text" class="validate">
               <label for="cpf">Nº de Contrato</label>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Modal com termos e condições -->
      <div id="modal1" class="modal">
        <div class="modal-content container">
          <h4>Termos de Serviço </h4>
          <p>Ao usar nossos Serviços, você está concordando com estes termos. Leia-os com atenção:</p>
          <p>
          ...
          </p>
          <div class="row align-center">
            <div class="col xs6">
              <a class="waves-effect waves-light btn modal-trigger modal-close grey">Discordo</a>
            </div>
            <div class="col xs6">
              <a class="waves-effect waves-light btn modal-trigger modal-close" v-on:click="cardExists = true" >Concordo</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
    cardExists: false
  }},

  computed: {
    page_title: {
      get() { return this.$store.state.page_title; },
      set(payload) { this.$store.dispatch('setPageTitle', payload) },
    },
  },

  mounted() {
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });
    this.page_title = 'Maquininhas';
  }


}
</script>

<style lang="css">

.card .card-content {
  padding: 0px 19px 0px 19px
}

</style>
