import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueTheMask from 'vue-the-mask';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import Default from './containers/Default.vue';
import store from './store';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(VueTheMask);
Vue.use(VueSweetalert2);
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
