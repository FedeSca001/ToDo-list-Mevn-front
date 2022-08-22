<template>
  <div v-if="showApp" class="container">
    <header class="header">
      <nav>
        <NavBar />
      </nav>
    </header>
    <aside class="aside">
      <Aside />
    </aside>
    <article class="article">
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
const userStore = users.user;
const showApp = JSON.parse(sessionStorage.getItem("user")) || false;
</script>

<style>
html{
  height: 100%;
}
body{
  min-height: 100%;
}
*{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.container{
  display: grid;
  gap: 1vw;
  grid-template-areas: "header" "aside" "article";
}
.header{
  grid-area: header;
  background-color: blueviolet;
}
.aside{
  grid-area: aside;
  background-color: blueviolet;
}
.article{
  grid-area: article;
  background-color: blueviolet;
}

</style>
