<template lang="html">
  <div id="cadastro" class="container">
    <div class="row">
        <form class="col s12">

          <div class="row">
            <div class="input-field col s12">
              <input id="nome" type="text" class="validate">
              <label for="nome">Nome/Razão Social</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="cpf" type="text" class="validate">
              <label for="cpf">CPF/CNPJ</label>
            </div>
          </div>

        <div class="row">
          <div class="input-field col s12">
            <select>
              <option value="itau">Itaú</option>
              <option value="bradesco">Bradesco</option>
              <option value="santander">Santander</option>
            </select>
            <label>Banco</label>
          </div>
        </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="endereco" type="text" class="validate">
              <label for="endereco">Endereço</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="nro" type="text" class="validate">
              <label for="nro">Número</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s12">
              <input id="complemento" type="text" class="validate">
              <label for="complemento">Complemento</label>
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
    M.AutoInit();
  }
}
</script>

<style lang="css">
</style>
