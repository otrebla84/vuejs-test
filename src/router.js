import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import NotFound from './components/base/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', components: { default: Home } },
    { path: '/404', name: 'not-found', components: { default: NotFound } },
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
});

export default router;