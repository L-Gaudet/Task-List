<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import ProgressBar from './components/ProgressBar.vue'
import Home from './pages/Home.vue';
</script>

<template>
  <header>
  </header>
  <!-- <div class="dragable"></div> -->
  <Home />
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
  .dragable {
    height: 20px;
    width: 100vw;
    -webkit-app-region: drag;
  }
</style>
