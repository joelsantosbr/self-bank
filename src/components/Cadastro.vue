<template lang="html">
  <div id="cadastro" class="container">
    <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input
                id="nome"
                v-model="entityLocal.name"
                :class="$v.entityLocal.name.$dirty ? 'invalid' : null"
                type="text"
                class="validate"
                @input="$v.entityLocal.name.$touch()"
              >
              <label for="nome">Nome/Razão Social</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                v-model="entityLocal.email"
                :class="$v.entityLocal.email.$dirty ? 'invalid' : null"
                type="email"
                class="validate"
                @input="$v.entityLocal.email.$touch()"
              >
              <label for="email">E-mail</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="['(##) ####-####', '(##) #####-####']"
                id="phone"
                v-model="entityLocal.phone"
                :class="$v.entityLocal.phone.$dirty ? 'invalid' : null"
                type="tel"
                class="validate"
                @input="$v.entityLocal.phone.$touch()"
              >
              <label for="phone">Telefone</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                id="cpf"
                v-model="entityLocal.cpf"
                :class="$v.entityLocal.cpf.$dirty ? 'invalid' : null"
                @input="$v.entityLocal.cpf.$touch()"
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
              v-model="entityLocal.bank.name"
              :class="$v.entityLocal.bank.name.$dirty ? 'invalid' : null"
            >
              <option value="itau">Itaú</option>
              <option value="bradesco">Bradesco</option>
              <option value="santander">Santander</option>
            </select>
            <label for="bank-name">Banco</label>
          </div>
        </div>

        <div class="row" v-show="entityLocal.bank.name">
          <div class="input-field col s6">
            <input
              id="agencia"
              v-model="entityLocal.bank.agency"
              :class="$v.entityLocal.bank.agency.$dirty ? 'invalid' : null"
              type="text"
              class="validate"
              @input="$v.entityLocal.bank.agency.$touch()"
            >
            <label for="agencia">Agência</label>
          </div>
          <div class="input-field col s6">
            <input
              id="conta"
              v-model="entityLocal.bank.account"
              :class="$v.entityLocal.bank.account.$dirty ? 'invalid' : null"
              type="text"
              class="validate"
              @input="$v.entityLocal.bank.account.$touch()"
            >
            <label for="conta">Conta</label>
          </div>
        </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                v-mask="'#####-###'"
                id="endereco"
                v-model="entityLocal.cep"
                :class="$v.entityLocal.bank.account.$dirty ? 'invalid' : null"
                type="text"
                class="validate"
                @input="$v.entityLocal.cep.$touch()"
                @blur.native="getAddressByCEP"
              >
              <label for="endereco">CEP</label>
            </div>
          </div>

          <div class="row align-center">
            <div class="col s12 center-align">
              <button type="button" :disabled="$v.entityLocal.$invalid || invalidButton" @click="handleCadastro" class="waves-effect waves-light btn">Cadastrar</button>
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
      enderecoForHumans: '',
      invalidButton: false,
      addressAPI: {},
      entityLocal: {
        name: '',
        cpf: '',
        cep: '',
        email: '',
        phone: '',
        bank: {
          name: '',
          agency: '',
          account: '',
        },
        address: {
          uf: '',
          city: '',
          region: '',
          street: '',
        },
      },
    };
  },

  mounted() {
    M.AutoInit();
    this.page_title = 'Cadastro';
  },

  validations: {
    entityLocal: {
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
      cep: {
        required,
        minLength: minLength(9),
      },
    },
  },

  computed: {
    entity: {
      get() { return this.$store.state.entity },
      set(payload) { this.$store.dispatch('setEntity', payload) },
    },
    page_title: {
      get() { return this.$store.state.page_title; },
      set(payload) { this.$store.dispatch('setPageTitle', payload) },
    },
  },

  watch: {
    addressAPI(values) {
      if (values.erro) {
        this.entityLocal.address.uf = '';
        this.entityLocal.address.city = '';
        this.entityLocal.address.region = '';
        this.entityLocal.address.street = '';
        this.enderecoForHumans = '';
      }
      const {
        uf,
        bairro,
        localidade,
        logradouro,
      } = values;
      if (bairro && localidade && uf && logradouro) {
        this.enderecoForHumans = `${bairro}, ${localidade} - ${uf}`;
        this.entityLocal.address.city = localidade;
        this.entityLocal.address.region = bairro;
        this.entityLocal.address.uf = uf;
        this.entityLocal.address.street = logradouro;
      }
    },
    entity() {
      if (!this.$v.entityLocal.$invalid) {
        this.invalidButton = true;
      }
    },
  },



  methods: {
    handleCadastro() {
      this.getAddressByCEP();
      this.entity = this.entityLocal;
      this.$router.push('/maquininhas');
    },

    async getAddressByCEP() {
      if (typeof this.cep === 'string' && this.cep.length >= 9) {
        this.addressAPI = await addressByCEP(this.cep);
      } else {
        this.addressAPI = {};
        this.enderecoForHumans = '';
        this.entityLocal.address.uf = '';
        this.entityLocal.address.city = '';
        this.entityLocal.address.street = '';
      }
    }
  }
}
</script>

<style lang="css">
</style>
