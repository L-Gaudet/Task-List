import { createRouter, createWebHistory } from 'vue-router';

// Import components for routing
import Home from './src/pages/Home.vue';

// Define routes
const routes = [
  { path: '/', name: 'home', component: Home },
];


// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Export router
export default router;