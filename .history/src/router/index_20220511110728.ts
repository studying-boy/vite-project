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

const router = createRouter({
  history: createWebHashHistory(), //替代之前的mode，是必须的
  routers
});
export default router;