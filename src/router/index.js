import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Cadastro from '@/components/Cadastro';
import Maquininhas from '@/components/Maquininhas';
import CadastroMaquina from '@/components/CadastroMaquina';
import Emprestimo from '@/components/Emprestimo';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
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
  {
    path: '/emprestimo',
    name: 'emprestimo',
    component: Emprestimo,
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
