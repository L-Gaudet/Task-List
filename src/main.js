import { createApp } from 'vue';
import App from './App.vue'; // Import main App component
import router from '../vue-router.config.mjs'; // Import router configuration
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faPlus)

// Create Vue instance
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
