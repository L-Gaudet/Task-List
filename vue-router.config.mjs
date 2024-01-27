import { createRouter, createWebHistory } from 'vue-router';

// Import components for routing
import List from './src/pages/List.vue';

// Define routes
const routes = [
  { path: '/', name: 'home', component: List },
];


// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Export router
export default router;