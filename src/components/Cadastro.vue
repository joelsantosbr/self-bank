<template lang="html">
  <div id="cadastro" class="container">
    <div class="row">
        <form class="col s12">

          <div class="row">
            <div class="input-field col s12">
              <input
                id="nome"
                v-model="entity.name"
                type="text"
                class="validate"
              >
              <label for="nome">Nome/Razão Social</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                v-model="entity.email"
                type="email"
                class="validate"
              >
              <label for="email">E-mail</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="['(##) ####-####', '(##) #####-####']"
                id="phone"
                v-model="entity.phone"
                type="tel"
                class="validate"
              >
              <label for="phone">Telefone</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                id="cpf"
                v-model="entity.cpf"
                type="text"
                class="validate"
              >
              <label for="cpf">CPF/CNPJ</label>
            </div>
          </div>

        <div class="row">
          <div class="input-field col s12">
            <select
              id="bank-name"
              v-model="entity.bank.name"
            >
              <option value="itau">Itaú</option>
              <option value="bradesco">Bradesco</option>
              <option value="santander">Santander</option>
            </select>
            <label for="bank-name">Banco</label>
          </div>
        </div>

        <div class="row" v-show="entity.bank.name">
          <div class="input-field col s6">
            <input
              id="agencia"
              v-model="entity.bank.agency"
              type="text"
              class="validate"
            >
            <label for="agencia">Agência</label>
          </div>
          <div class="input-field col s6">
            <input
              id="conta"
              v-model="entity.bank.account"
              type="text"
              class="validate"
            >
            <label for="conta">Conta</label>
          </div>
        </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="'#####-###'"
                id="endereco"
                v-model="cep"
                type="text"
                class="validate"
                @blur.native="getAddressByCEP"
              >
              <label for="endereco">CEP</label>
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
import { required, email, numeric, minLength } from 'vuelidate/lib/validators';
import addressByCEP from '@/services/addressByCEP';

export default {

  data() {
    return {
      cep: '02362-010',
      enderecoForHumans: '',
      cepError: null,
      addressAPI: {},
    };
  },

  mounted() {
    M.AutoInit();
    this.getAddressByCEP();
  },

  validations: {
    entity: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      cpf: {
        required,
        minLength: minLength(14),
      },
      phone: {
        required,
        minLength: minLength(14),
      },
      bank: {
        name: { required },
        agency: { required },
        account: { required },
      },
      cep: { required },
      address: {
        street:  { required },
        number:  {
          required,
          numeric,
        },
      }
    },
  },

  computed: {
    entity: {
      get() { return this.$store.state.entity },
      set(payload) { this.$store.dispatch('setEntity', payload) },
    },
  },

  watch: {
    addressAPI(values) {
      if (values.erro) {
        this.address.uf = '';
        this.address.city = '';
        this.address.region = '';
        this.address.street = '';
        this.enderecoForHumans = '';
        this.cepError = false;
      } else this.cepError = true;
      const {
        bairro,
        localidade,
        logradouro,
        uf,
      } = values;
      if (bairro && localidade && uf && logradouro) {
        this.enderecoForHumans = `${bairro}, ${localidade} - ${uf}`;
        this.address.uf = uf;
        this.address.city = localidade;
        this.address.region = bairro;
        this.address.street = logradouro;
      }
    },
  },

  methods: {
    handleCadastro() {

    },

    async getAddressByCEP() {
      if (typeof this.cep === 'string' && this.cep.length >= 9) {
        this.addressAPI = await addressByCEP(this.cep);
      } else {
        this.addressAPI = {};
        this.enderecoForHumans = '';
        this.address.uf = '';
        this.address.city = '';
        this.address.street = '';
      }
    }
  }
}
</script>

<style lang="css">
</style>
