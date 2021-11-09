import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', components: { default: Home } }
  ]
});

export default router;