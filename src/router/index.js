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
<<<<<<< HEAD
=======
    path: '/maquininhas',
    name: 'maquininhas',
    component: CadastroMaquina,
  },
  {
>>>>>>> c25054c03749c61f799e6eeb27fd0e9b1b2fee20
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
  base: '/',
  linkActiveClass: 'active-section',
  linkExactActiveClass: 'current-section',
});

export default router;
