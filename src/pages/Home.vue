<script setup>
import ProgressBar from '../components/ProgressBar.vue';
</script>

<template>
  <div class="container p-10 mx-auto w-full max-w-screen-md flex-col">
    <h1 class="text-4xl font-bold text-white pb-4">Task List</h1>
    <ProgressBar class=""/>
    <div class="container pt-10 mx-auto">
      <button id="addItem" class="text-gray-500 opacity-80">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>