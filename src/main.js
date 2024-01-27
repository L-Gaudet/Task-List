import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router';
// import router from './router'

import List from './pages/List.vue'

// const Home = { template: List }
// const About = { template: '<div>About</div>' }

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: List },
  // { path: '/about', component: About },
  // ... other routes
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

const app = createApp(App)

app.mount('#app')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// app.use(router)
