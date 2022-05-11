import { createRouter, createWebHashHistory } from 'vue-router';
const routers = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    component: () => import('../components/home.vue')
  },
]