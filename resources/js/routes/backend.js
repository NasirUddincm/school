import { createRouter, createWebHistory } from 'vue-router';
import BackendLayout from '../views/backend/layout.vue';

const routes = [
  {
    path: '/admin',
    component: BackendLayout,
    children: [
      // Add your backend routes here
      // Example: { path: '/', component: AdminDashboard }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
