import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import Default from './containers/Default.vue';
import store from './store';
import router from './router';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueTheMask);
Vue.use(Vuelidate);
Vue.use(Vuetify);

// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(Default),
});
