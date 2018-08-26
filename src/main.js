import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import Default from './containers/Default.vue';
import store from './store';
import router from './router';

Vue.use(VueTheMask);
Vue.use(Vuelidate);

// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(Default),
});
