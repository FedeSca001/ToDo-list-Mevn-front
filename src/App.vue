<template>
  <LogIn v-if="userStore === 'none'"/>
  <div v-else>
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
</template>

<script setup>
import LogIn from './components/LogIn/LogIn.vue'
import NavBar from './components/NavBar/NavBar.vue';
import Aside from './components/Aside/Aside.vue';
import { RouterView } from 'vue-router';
import { useUsers } from './stores/user';
const users = useUsers();
const userStore = users.user;
</script>

<style scoped>

</style>
