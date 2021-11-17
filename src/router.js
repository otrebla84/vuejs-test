import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import NotFound from './components/base/common/NotFound.vue';

import ExampleForms from './components/#Examples/ExampleForms.vue';
import ExamplePanels from './components/#Examples/ExamplePanels.vue';
import ExampleButtons from './components/#Examples/ExampleButtons.vue';
import ExampleDialog from './components/#Examples/ExampleDialog.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', components: { default: Home } },
    { path: '/examples/forms',   name: 'ExampleForms',   components: { default: ExampleForms   } },
    { path: '/examples/buttons', name: 'ExampleButtons', components: { default: ExampleButtons } },
    { path: '/examples/panels',  name: 'ExamplePanels',  components: { default: ExamplePanels  } }, 
    { path: '/examples/dialogs', name: 'ExampleDialogs', components: { default: ExampleDialog  } },
    { path: '/404', name: 'not-found', components: { default: NotFound } }, 
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
});

export default router;