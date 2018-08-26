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
            <a class="waves-effect waves-light btn">Cadastrar</a>
          </div>
        </div>

        </form>
      </div>
  </div>
</template>

<script>

export default {
  mounted() {
  }
}
</script>

<style lang="css">
</style>
