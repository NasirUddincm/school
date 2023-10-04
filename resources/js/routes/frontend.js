import { createRouter, createWebHistory } from 'vue-router';
import FrontendLayout from '../views/frontend/layout.vue';

const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      // Add your frontend routes here
      // Example: { path: '/', component: Home }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
