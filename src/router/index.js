import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Cadastro from '@/components/Cadastro';
import CadastroMaquina from '@/components/CadastroMaquina';
import Emprestimo from '@/components/Emprestimo';
import Credito from '@/components/Credito';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: 'cadastrar',
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
    path: '/cadastrar-maquininha',
    name: 'cadastrar-maquininha',
    component: CadastroMaquina,
  },
  {
    path: '/emprestimo',
    name: 'emprestimo',
    component: Emprestimo,
  },
  {
    path: '/credito',
    name: 'credito',
    component: Credito,
  },
];

const router = new Router({
  routes,
  mode: 'history',
  base: '/self-bank/',
  linkActiveClass: 'active-section',
  linkExactActiveClass: 'current-section',
});

export default router;
