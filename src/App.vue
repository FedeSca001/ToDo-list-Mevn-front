<template>
  <div v-if="show === {}">
    <header >
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
    </div>
    <LogIn v-else/>

</template>

<script setup>
import LogIn from './components/LogIn/LogIn.vue'
import NavBar from './components/NavBar/NavBar.vue';
import Aside from './components/Aside/Aside.vue';
import { RouterView } from 'vue-router';
import { useUsers } from './stores/user';
const users = useUsers();
const show = users.user;
</script>

<style scoped>

</style>
