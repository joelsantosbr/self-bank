<template lag="html">
	<div class="container">

		<div class="row right-align top-money">
			<div class="col s12">
				<span class="toptext">Saldo_à_Pagar</span>
				<br>
				<span class="toptext"><b>R$ 1650,00</b></span>
			</div>
		</div>


		<div class="row align-center">
      <div class="col s12 center-align">
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Quero um empréstimo</a>
      </div>
    </div>

    <br>
    <br>


		<div v-for="emprestimo in emprestimos">
	    <div class="row home__transations">
		    <div class="col s4 left-align">
		      <strong>{{ emprestimo.titulo }}</strong><br>
		      <span class="home__money">R$ {{ emprestimo.valor }}</span>
		    </div>
		    <div class="col s5 offset-s3 right-align">
		      <strong>{{ emprestimo.prazo }}</strong><br>
		      <strong class="home_money">{{ emprestimo.taxa }}</strong> <span class="homemoney home_money--green">R$ {{ emprestimo.valor_pagamento }}</span>
		    </div>
		  </div>
		  <hr>
		</div>

	  <br>
		<div id="modal1" class="modal">
			<div class="container">
		        <div class="row right-align" style='padding-top: 10px'>
		        	<b><a class="modal-close"><i class="material-icons">close</i></a></b>
		        </div>

		        <div class="modal-content center-align">
		        	<div class="row">
		        		<div class="col s12">
		        			<b><span class="modal-money"> R$ {{ range }}</span></b>
		        		</div>
		        	</div>
		        	<div class="row center-align">
		        		<div class="col s12">
		        		<form action="#">
   							<p class="range-field">
      							<input type="range" v-model="range" id="test5" min="10" max="4000" />
    						</p>
 						 </form>
		        		</div>
		        	</div>

		        	<div class="row left-align">
		        		<div class="col s6">
		        			<b><span>Valor Total</span></b>
		        		</div>
		        		<div class="col s4 offset-s2">
		        			<b><span>Taxas 6%</span></b>
		        		</div>
		        	</div>
		        	<div class="row left-align">
		        		<div class="col s12">
		        			<span>R$ 2.120,00 <span style='font-size: 12px'>(30 dias)</span></span>
		        		</div>
		        		<div class="col s12">
		        			<span>R$ 2.240,00 <span style='font-size: 12px'>(60 dias)</span></span>
		        		</div>
		        	</div>

		        	<br>

		        	<div class="row center-align">
		        		<div class="col s12">
            				<a @click="pedirEmprestimo" class="waves-effect waves-light btn modal-close ">Solicitar Empréstimo</a>
		        		</div>
		        	</div>
		        </div>
	        </div>
    	</div>
    </div>


</template>

<script>
export default {

  name: 'Emprestimo',

  data () {
    return {
    	range: 0,
			emprestimos: [
				{
					titulo: 'Crédito a vista',
					prazo: 'para 30 dias',
					valor: 1000,
					taxa: 5.2,
					valor_pagamento: 1052,
				}
			]
    }
  },

  computed: {
    page_title: {
      get() { return this.$store.state.page_title; },
      set(payload) { this.$store.dispatch('setPageTitle', payload) },
    },
  },

  mounted() {
    this.page_title = 'Meus_Empréstimos';
    M.AutoInit();
	    document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.modal');
	    var instances = M.Modal.init(elems);
	  });
	},

	methods: {
		pedirEmprestimo() {
			const taxa = 5.2,
						valor_pagamento = ((taxa / 100) * this.range) + this.range;
		}
	}
}
</script>

<style lang="css" scoped>

.toptext {
	font-size: 16px;
}

.top-money {
	height: 140px;
}

.modal-money {
	font-size: 24px;
}


</style>
