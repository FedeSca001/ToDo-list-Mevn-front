
<template>
  <header>
      <nav>
        <NavBar />
      </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar/NavBar.vue';
</script>


<style scoped>

</style>
