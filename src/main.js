import { createApp } from 'vue';
import App from './App.vue'; // Import main App component
import router from '../vue-router.config.mjs'; // Import router configuration
import './style.css'

// Create Vue instance
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
