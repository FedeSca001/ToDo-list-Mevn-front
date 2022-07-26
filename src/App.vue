<template>
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>
    <aside>
      <Aside />
    </aside>
    <article>
      <RouterView/>
    </article>
</template>

<script setup>
import LogIn from './views/LogIn/LogIn.vue';
import NavBar from './components/NavBar/NavBar.vue';
import Aside from './components/Aside/Aside.vue';
import { RouterView } from 'vue-router';

</script>

<style scoped>

</style>
