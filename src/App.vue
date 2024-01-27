<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import ProgressBar from './components/ProgressBar.vue'
</script>

<template>
  <header>
  </header>
  <h1>hello</h1>
  <ProgressBar />
  <router-link to="/">Go to Home</router-link>
  <router-view></router-view>
</template>


<style scoped>
/* Use to create local styles for each componenent */
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
