import Vue from 'vue';
import Router from 'vue-router';
import Cadastro from '@/components/Cadastro';
import Maquininhas from '@/components/Maquininhas';
import CadastroMaquina from '@/components/CadastroMaquina';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: 'cadastrar',
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastro,
  },
  {
    path: '/maquininhas',
    name: 'maquininhas',
    component: Maquininhas,
  },
  {
    path: '/cadastrar-maquininha',
    name: 'cadastrar-maquininha',
    component: CadastroMaquina,
  },
];

const router = new Router({
  routes,
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-section',
  linkExactActiveClass: 'current-section',
});

export default router;
